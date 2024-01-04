const express = require("express");
const app = express();

const path = require("path");

const PORT = process.env.PORT || 5010;

app.use(express.static("public"));

app.get("/", (req, res) => {
  return res.json("Hello from Docker Server! 🐋🐬  ");
});

app.get("/client", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "index.html"));
});

app.listen(PORT, () => {
  console.log("Docker Server is running... 🐬 ");
});
