const exporess = require("express");
const routes = exporess.Router();

// Controllers
const requestOTP = require("../controllers/authControllers/register/requestOTP");
const verifyOTP = require("../controllers/authControllers/register/verifyOTP");

routes.post("/register/request", requestOTP);
routes.post("/register/verify", verifyOTP);

module.exports = routes;
