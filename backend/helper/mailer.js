const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const sendOTPEmail = async (targetEmail, otp) => {
  const mailOption = {
    from: `"Sistem Verifikasi" <${process.env.SMTP_USER}>`,
    to: targetEmail,
    subject: "Your OTP Verification Code",
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; max-width: 500px;">
        <h2>Verifikasi Email</h2>
        <p>Here's the OTP code to validate your email. This code is only valid for 5 minutes</p>
        <h1 style="background: #f4f4f4; padding: 10px; text-align: center; letter-spacing: 5px; color: #333;">${otp}</h1>
        <p>Don't shere this code to anyone</p>
      </div>
    `,
  };

  return transporter.sendMail(mailOption);
};

module.exports = sendOTPEmail;
