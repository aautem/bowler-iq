var mongoose = require('mongoose');

var GameSchema = new mongoose.Schema({
  // _id: // AUTO-GENERATED
  userId: {type: mongoose.Schema.ObjectId, ref: 'User'},
  date: String,
  frames: Array,
  score: Number,
  spares: Number,
  splits: Number,
  strikes: Number,
  gutterballs: Number,
  averageFrame: Number,
  openFrames: Number,
  closedFrames: Number,
  closePercent: Number,
  totalPins: Number
});

module.exports = mongoose.model('Game', GameSchema);
