const userModel = require("../../model/user");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");

// register
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rahulkrnodejs@gmail.com",
    pass: "plnu vxnk hodz bxbw",
  },
});

function generateOTP() {
  return Math.floor(Math.random() * 90000) + 100000;
}
const otpStorage = {};

const registerController = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.send({ message: "Email is required" });
    }

    // exisiting user
    const exisitinguser = await userModel.findOne({ email });
    if (exisitinguser) {
      return res.send({
        success: false,
        message: "user already exists",
      });
    }
    const otp = generateOTP();
    otpStorage[email] = otp;
    const mailOptions = {
      from: "rahulkrnodejs@gmail.com",
      to: email,
      subject: "Verify Your Email",
      text: `Your OTP is: ${otp}`,
    };
    await transporter.sendMail(mailOptions);
    res.send({
      success: true,
      message: "OTP send successfully in your email",
    });
  } catch (err) {
    res.send({ success: false, message: "Error in registeration", err });
  }
};
// otp verification
async function verifyOtp(req, res) {
  try {
    const { name, password, email, otp, uniqueId } = req.body;
    if (!name || !email || !password || !otp) {
      return res.send({ success: false, message: "All fields are required" });
    }
    if (otpStorage[email] && otpStorage[email] == otp) {
      delete otpStorage[email];
      const hashedPassword = await bcrypt.hash(password, 10);
      await userModel.create({
        name,
        email,
        password: hashedPassword,
        uniqueId,
        otp,
      });
      res.send({ success: true, message: "register successfully" });
    } else {
      res.send({ success: false, message: "Invalid OTP" });
    }
  } catch (err) {
    res.send({ success: false, message: "something went wrong" });
  }
}

// login
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.send({ message: "All fields are required" });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.send({
        success: false,
        message: "Invalid email or password",
      });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.send({
      success: true,
      message: "login successfully",
      token,
      user,
    });
  } catch (err) {
    res.send({
      success: false,
      message: "error in login",
    });
  }
};

module.exports = {
  registerController,
  verifyOtp,
  loginController,
};
