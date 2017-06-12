var mongodbUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/bowleriq';

mongoose.connect(mongodbUri);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));

db.once('open', function() {
  console.log('BowlerIQ Database Connected.');
});
