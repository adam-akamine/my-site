const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + 'index.html'));
})

var server = app.listen(3000, function () {
  console.log("Server listening on port " + server.address().port);
})