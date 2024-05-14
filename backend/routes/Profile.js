const express = require("express");
const router = express.Router();
const getProfile = require("../controller/ProfileController/getProfile");
const profilePhoto = require("../controller/ProfileController/ProfilePhoto");
const middleware = require("../middleware/middleware");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

// all get-profile
router.get("/get-profile", getProfile.getProfile);

//get each user profile with middleware
router.get("/user/profile/:id", getProfile.userProfile);

// update profile
router.put("/update-profile/:id", getProfile.updateProfile);

// profile photo update
router.put(
  "/upload/photo/:id",
  upload.single("file"),
  profilePhoto.uploadPhoto
);

// get profile photo
router.get("/get-photo/:id", profilePhoto.getPhoto);

module.exports = router;
