const connection = require("../../config/database");

const createMember = async (req, res) => {
  const newMember = req.body.data;

  if (!newMember) {
    console.log("Please enter required data");
    return res.status(400).json({ error: "Please enter required data" });
  }

  if (newMember.length > 40) {
    console.log("Full Name must be less than 40 character");
    return res
      .status(400)
      .json({ error: "Full Name must be less than 40 character" });
  }

  const validEmail = "@gmail.com";
  if (!validEmail.includes(newMember.email)) {
    console.log("Email invalid");
    return res.status(400).json({ error: "Email invalid" });
  }
};

module.exports = createMember;
