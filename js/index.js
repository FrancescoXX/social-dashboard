//express hello world
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(process.env.EXTERNALPORT, function () {
  console.log("Running on ", process.env.EXTERNALPORT);
});