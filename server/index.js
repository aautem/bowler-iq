require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();
app.set("port", process.env.PORT || 5000);

// Middleware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Priority serve static files
app.use(express.static(path.resolve(__dirname, "../client/build")));

// Add database routes
require("./routes.js")(app, express);

// All remaining requests return the React app
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(app.get("port"), () => {
  console.log("Listening on port " + app.get("port"));
});

module.exports = app;
