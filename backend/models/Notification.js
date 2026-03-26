const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  user: Object,
  sender: Object,
  type: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Notification", notificationSchema);
