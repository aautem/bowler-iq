const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');

// start mongo database
require('./db.js');

const app = express();
app.set('port', (process.env.PORT || 5000));

// middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

// Answer API requests.
// app.get('/api', function (req, res) {
//   res.set('Content-Type', 'application/json');
//   res.send('{"message":"Hello from the custom server!"}');
// });

// route handling
require('./routes.js')(app, express);

// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(app.get('port'), () => {
  console.log('Listening on port ' + app.get('port'));
});

module.exports = app;
