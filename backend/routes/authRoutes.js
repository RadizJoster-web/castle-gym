const exporess = require("express");
const routes = exporess.Router();

// Controllers
const requestOTP = require("../controllers/authControllers/register/requestOTP");
const verifyOTP = require("../controllers/authControllers/register/verifyOTP");
const login = require("../controllers/authControllers/login/login");

routes.post("/register/request", requestOTP);
routes.post("/register/verify", verifyOTP);
routes.post("/login", login);

module.exports = routes;
