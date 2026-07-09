const express = require("express");
const router = express.Router();

// Controller
const getAllMembers = require("../controllers/memberControllers/getAllMembers");
const getMember = require("../controllers/memberControllers/getMember");
const createMember = require("../controllers/memberControllers/createMember");

router.get("/", getAllMembers);
router.get("/:id", getMember);
router.post("/", createMember);

module.exports = router;
