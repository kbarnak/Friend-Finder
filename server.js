// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Initiate your express server
const app = express();

// PORT set up
const PORT = process.env.PORT || 8080;

// Routes 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// API and HTML Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Express.static (public static)
app.use(express.static(__dirname + '/app/public'));

// Listening Set up
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});