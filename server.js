const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server app is listening at http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/", function (req, res) {
  res.send("Got a POST request");
  console.log(req.body);
});
