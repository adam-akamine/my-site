const express = require('express');
const path = require('path');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile('/index.html');
})

app.get('/about', function(req, res) {
  res.sendFile('/about.html');
})

app.get('/contact', function(req, res) {
  res.sendFile('/contact.html');
})

var server = app.listen(3000, function () {
  console.log("Server listening on port " + server.address().port);
})