const mongoose = require("mongoose");

const pinAmountSchema = mongoose.Schema({
  pin: {
    type: Number,
  },
  Area: {
    type: String,
  },
  City: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Pinamounttable", pinAmountSchema);
