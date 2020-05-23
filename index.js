const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("started");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
