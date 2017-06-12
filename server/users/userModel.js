var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  // _id: // AUTO-GENERATED
  name: String,
  badges: {
    f01: Boolean,
    f02: Boolean,
    f03: Boolean,
    f04: Boolean,
    f05: Boolean,
    f06: Boolean,
    f07: Boolean,
    f08: Boolean,
    f09: Boolean,
    f10: Boolean,
    f11: Boolean,
    f12: Boolean
  },
  stats: {
    average: Number,
    averageFrame: Number,
    closePercent: Number,
    closedFrames: Number,
    gutterballs: Number,
    highScore: Number,
    openFrames: Number,
    totalFrames: Number,
    totalGames: Number,
    totalPins: Number,
    totalScore: Number,
    totalSpares: Number,
    totalSplits: Number,
    totalStrikes: Number
  }
});

module.exports = mongoose.model('User', UserSchema);
