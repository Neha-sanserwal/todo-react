const express = require("express");
const app = express();
const port = 8000;
const todo = { 1: [], heading: "" };
app.listen(port, () => console.log(`Example app listening on port 8000!`));
