const express = require('express');
const app = express();
const PORT = 3000;

const links = require('./links.json');

app.get("/:link", (req, res) => {
  const redirect = links[req.params.link];

  if (redirect === null || redirect === undefined) {
    res.status(400).json({"message": "Redirect does not exist!"});
    return;
  }

  res.status(301).redirect(redirect);
});

app.get('/', (req, res) => {
    res.json({"message": "API is functional!"});
});

app.listen(PORT, err => {
    if (err) console.log(err);
    console.log("Server listening on PORT:", PORT);
});

module.exports = app;
