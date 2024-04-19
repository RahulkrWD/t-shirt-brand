const mongoose = require("mongoose");

async function connectDB() {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb on ${db.connection.host}`);
  } catch (err) {
    console.log("error on mongoDB connection", err);
  }
}
module.exports = connectDB;
