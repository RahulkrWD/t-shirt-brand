const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    uniqueId: {
      type: Number,
      require: true,
    },
    phone: {
      type: Number,
    },

    picName: String,
    size: Number,
    type: String,
    data: Buffer,
    createdAt: { type: Date, default: Date.now },
  },

  { timestamps: true }
);

module.exports = mongoose.model("users", userSchema);
