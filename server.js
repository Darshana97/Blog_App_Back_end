const express = require("express");
const cors = require("cors");

const app = express();

var corsOption = {
  origin: ["http://localhost:4200", "http://localhost:4000"],
};

app.use(cors(corsOption));

app.listen(8000, () => {
  console.log("Server is started and listening");
});

app.get("/", function (req, res) {
  res.send("Hello Node Js!");
});

require("./articles")(app);
