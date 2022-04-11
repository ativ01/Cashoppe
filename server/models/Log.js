const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema({
  host: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  path: {
    type: String,
  },
  method: {
    type: String,
  },
  referer: {
    type: String,
  },
  os: {
    type: String,
  },
  browser: {
    type: String,
  },
  platform: {
    type: String,
  },
  source: {
    type: String,
  },
});

module.exports = Log = mongoose.model("Log", LogSchema);
