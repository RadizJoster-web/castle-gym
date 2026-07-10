const express = require("express");
const router = express.Router();

// Controller
const getAllMembers = require("../controllers/memberControllers/getAllMembers");
const getMember = require("../controllers/memberControllers/getMember");

router.get("/", getAllMembers);
router.get("/:id", getMember);

module.exports = router;
