const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  studentName: String,
  roomNumber: String
});

module.exports = mongoose.model("Room", roomSchema);