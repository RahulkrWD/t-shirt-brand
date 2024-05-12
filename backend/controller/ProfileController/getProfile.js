const userModel = require("../../model/user");

// get all profile
async function getProfile(req, res) {
  try {
    const profile = await userModel.find();
    res.send(profile);
  } catch (err) {
    console.log("server error", err);
  }
}

// get each user profile with middleware
async function userProfile(req, res) {
  let query = {};
  const id = req.params.id;
  if (id) {
    query = { uniqueId: id };
  }
  try {
    const userProfile = await userModel.find(query);
    res.send(userProfile);
  } catch (err) {
    console.log("server error", err);
  }
}

// update profile
async function updateProfile(req, res) {
  const id = req.params.id;
  const { phone } = req.body;
  try {
    const updateProfile = await userModel.findOneAndUpdate(
      { uniqueId: id },
      { phone }
    );
    res.send({ success: true, message: "profile updated", updateProfile });
  } catch (err) {
    console.log("server error", err);
  }
}
module.exports = {
  getProfile,
  userProfile,
  updateProfile,
};
