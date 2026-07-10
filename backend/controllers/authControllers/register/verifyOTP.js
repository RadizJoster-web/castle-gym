const connection = require("../../../config/database");

const verifyOTP = async (req, res) => {
  const { email, userOTP } = req.body;

  if (!userOTP) {
    return res.status(400).json({ error: "Please entered OTP" });
  }

  try {
    const db = await connection();

    const [validOTP] = await db.execute(
      "SELECT otp_code, otp_expires_at FROM members WHERE email = ?",
      [email],
    );

    if (validOTP.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const { otp_code, otp_expires_at } = validOTP[0];

    if (userOTP != otp_code) {
      return res.status(400).json({ error: "OTP code doesn't match" });
    }

    const currentTime = new Date();
    const expiredTime = new Date(otp_expires_at);
    if (currentTime > expiredTime) {
      return res
        .status(400)
        .json({ error: "The OTP code has expired. Please request a new code" });
    }

    await db.execute(
      "UPDATE members SET is_verified = true, otp_code = NULL, otp_expires_at = NULL WHERE email = ?",
      [email],
    );

    return res
      .status(200)
      .json({ success: "success", message: "Registered successful" });
  } catch (err) {
    console.error("Internal Error: ", err);
    return res.status(500).json({ error: "Internal Error" });
  }
};

module.exports = verifyOTP;
