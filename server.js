// server.js
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;
// Run the app by serving the static files in the dist directory
app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default Heroku port
app.listen(port);
console.log('cestak-web server listening on port: '+port);

// For all GET requests, send back index.html so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});