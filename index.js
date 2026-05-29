const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.get("/", (req, res) => {
  res.send("Hello in home page");
});
app.get("/about-us", (req, res) => {
  res.send("Hi there on about us page");
});

app.listen(port, () => {
  console.log(`server is running on  ${port}`);
});
