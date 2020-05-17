const express = require("express");

const app = express();

app.listen(8000, () => {
  console.log("Server is started and listening");
});

app.get("/", function (req, res) {
  res.send("Hello Node Js!");
});
