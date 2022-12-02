const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: [true, "company name is required"],
    maxLength: 50,
  },
  position: {
    type: String,
    required: [true, "position is required"],
    maxLength: 100,
  },
  status: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "user is required"],
  },
},{timestamps:true});

module.exports = mongoose.model('Job',JobSchema)
