var express = require('express');
var app = express();
var PORT = 3000;

var links = require('./links.json');

app.get("/:link", (req, res) => {
  res.status(301).redirect(links[req.params.link]);
});

app.get('/', (req, res) => {
    res.json({"message": "API is functional!"});
});

app.listen(PORT, err => {
    if (err) console.log(err);
    console.log("Server listening on PORT:", PORT);
});

module.exports = app;
