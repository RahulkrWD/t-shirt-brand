const express = require("express");
const router = express.Router();
const auth = require("../controller/authController/auth");
const forgetPassword = require("../controller/authController/forgetPassword");
const google = require("../controller/authController/google");

router.post("/register", auth.registerController);
router.post("/verify-user", auth.verifyOtp);
router.post("/login", auth.loginController);
router.post("/forget-password", forgetPassword.forgetPassword);
router.post("/reset-password", forgetPassword.resetpassword);
router.post("/google-login", google.googleLoginController);
router.post("/google-register", google.googleRegisterController);

module.exports = router;
