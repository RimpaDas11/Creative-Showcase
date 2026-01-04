const mongoose = require("mongoose");

module.exports = mongoose.model(
  "Image",
  new mongoose.Schema({
    imageUrl: String,
    username: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  })
);
