const userModel = require("../../model/user");
// upload profile photo
async function uploadPhoto(req, res) {
  try {
    const { file } = req;
    if (!file) {
      return res.send({ success: false, message: "Please select image" });
    }
    const id = req.params.id;
    const File = await userModel.findOneAndUpdate(
      { uniqueId: id },
      {
        picName: file.originalname,
        size: file.size,
        type: file.mimetype,
        data: file.buffer,
      }
    );
    res.send({
      success: true,
      message: "File Uploaded successfully",
      File,
    });
  } catch (err) {
    console.log("server error", err);
  }
}

// get profile photo
async function getPhoto(req, res) {
  const id = req.params.id;
  try {
    const files = await userModel.find({ uniqueId: id });
    if (!files || files.length == 0) {
      return res.send({ success: false, message: "No files found" });
    }
    const profile = [];
    files.forEach((file) => {
      profile.push({
        id: file._id,
        picName: file.picName,
        type: file.type,
        data: file.data.toString("base64"),
      });
    });
    res.send(profile);
  } catch (err) {
    console.log("server error", err);
  }
}
module.exports = { uploadPhoto, getPhoto };
