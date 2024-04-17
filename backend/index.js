const express = require("express");
const app = express();

app.get("/", async function (req, res) {
  res.send("hello");
});

app.listen("3003");
