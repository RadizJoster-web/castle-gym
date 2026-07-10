const jwt = require("jsonwebtoken");

const generateToken = (payload) => {
  // payload berisi data singkat user, misal { email: 'user@gmail.com' }
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

module.exports = generateToken;
