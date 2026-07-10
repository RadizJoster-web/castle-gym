const connection = require("../../../config/database");
const crypto = require("crypto");
const sendOTPEmail = require("../../../helper/mailer");

// Variabel lokal untuk menyimpan cooldown OTP di memori (Hemat DB dari Spam!)
const otpCooldowns = new Map();

const requestOTP = async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ error: "Please enter required field" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Format email tidak valid" });
  }

  const lastRequestTime = otpCooldowns.get(email);
  if (lastRequestTime && Date.now() - lastRequestTime < 60000) {
    const remaining = Math.ceil(
      (60000 - (Date.now() - lastRequestTime)) / 1000,
    );
    return res.status(429).json({
      error: `Please wait ${remaining} and request otp again`,
    });
  }

  try {
    const db = await connection();

    // Check existing Member
    const [existingMember] = await db.execute(
      "SELECT is_verified FROM members WHERE email = ?",
      [email],
    );

    if (existingMember.length > 0) {
      if (existingMember[0].is_verified) {
        return res
          .status(400)
          .json({ error: "Email is registered and verified, please login" });
      }
    }

    // Generate 6 digit angka acak yang aman
    const otpCode = crypto.randomInt(100000, 999999).toString();

    // Atur waktu kedaluwarsa (5 menit dari sekarang)
    const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

    // 5. OPERASI DATABASE (Digabung menggunakan Transaction jika perlu, atau query sekuensial yang efisien)
    if (existingMember.length > 0) {
      // Jika user ketik ulang karena merasa salah/belum verifikasi, update data & OTP-nya
      await db.execute(
        "UPDATE members SET fullname = ?, password = ?, otp_code = ?, otp_expires_at = ? WHERE email = ?",
        [fullname, password, otpCode, expiresAt, email],
      );
    } else {
      // Jika benar-benar user baru
      await db.execute(
        "INSERT INTO members (fullname, email, password, otp_code, otp_expires_at, is_verified) VALUES (?, ?, ?, ?, ?, false)",
        [fullname, email, password, otpCode, expiresAt],
      );
    }

    // Catat waktu request untuk cooldown anti-spam
    otpCooldowns.set(email, Date.now());

    await sendOTPEmail(email, otpCode);

    res.status(200).json({
      status: "success",
      message: "Success send otp to email",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed send otp" });
  }
};

module.exports = requestOTP;
