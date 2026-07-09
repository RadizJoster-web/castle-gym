const connection = require("../../config/database");

const getMember = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);

  if (!id) {
    console.log("Please enter id");
    return res.status(400).json({ error: "Please enter id" });
  }

  try {
    const db = await connection();
    const sql = "SELECT id, fullname, email FROM members WHERE id = (?)";
    const [result] = await db.execute(sql, [id]);

    if (result.length === 0) {
      res.status(404).json({
        error: "Member not registered yet",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Success get data member",
      data: result[0],
    });
  } catch (err) {
    console.error("Database Error: ", err);
    res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

module.exports = getMember;
