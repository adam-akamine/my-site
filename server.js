const express = require('express');

const app = express();

app.get('/', function(req, res) {
  res.send('Hello!');
})

var server = app.listen(3000, function () {
  console.log("Server listening on port " + server.address().port);
})