const connection = require("../../config/database");

const getAllMembers = async (req, res) => {
  try {
    const db = await connection();
    const sql = "SELECT id, fullname, email FROM members";
    const [result] = await db.execute(sql);
    res.status(200).json({
      status: "success",
      message: "Success get data members",
      data: result,
    });
  } catch (err) {
    console.error("Database Error: ", err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = getAllMembers;
