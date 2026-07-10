const connection = require("../../../config/database");
const bcrypt = require("bcryptjs");
const generateToken = require("../../../helper/jwt");

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email && !password) {
    return res.status(400).json({ error: "Please enter required field" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Format email invalid" });
  }

  try {
    const db = await connection();

    const [member] = await db.execute(
      "SELECT fullname, email, password, is_verified FROM members WHERE email = ?",
      [email],
    );

    if (member.length === 0) {
      return res
        .status(404)
        .json({ error: "Member not found. Please register first" });
    }

    const validPassword = member[0].password;
    const isPasswordMatch = await bcrypt.compare(password, validPassword);

    if (!isPasswordMatch) {
      return res.status(400).json({ error: "Wrong password" });
    }

    if (!member[0].is_verified) {
      return res.status(400).json({
        error:
          "Your account not verified yet. Please check email for verification OTP first",
      });
    }

    const payload = {
      email: member[0].email,
    };

    const token = generateToken(payload);

    return res.status(200).json({
      status: "success",
      message: "Login successful",
      data: {
        member: {
          fullname: member[0].fullname,
          email: member[0].email,
        },
        token: token,
      },
    });
  } catch (err) {
    console.error("Internal Error", err);
    return res.status(500).json({ error: "Internal Error" });
  }
};

module.exports = login;
