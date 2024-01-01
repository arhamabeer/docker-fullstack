const express = require("express");
const app = express();

const PORT = process.env.PORT || 5010;

app.get("/", (req, res) => {
  return res.json("Hello from Docker Server!");
});

app.listen(PORT, () => {
  console.log("Docker Server is running...");
});
