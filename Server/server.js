const express = require("express");
const app = express();
const port = 8000;
let todo = { heading: "Todo new", tasks: [], lastTodoId: 0 };

app.use(express.json());

app.get("/api/getCurrentHeading", (req, res) => {
  res.json({ heading: todo.heading });
});

app.get("/api/getLastTodoId", (req, res) => {
  res.json({ lastTodoId: todo.lastTodoId });
});

app.post("/api/updateHeading", (req, res) => {
  const { heading } = req.body;
  todo.heading = heading;
  res.end();
});

app.get("/api/getAllTasks", (req, res) => {
  res.json({ tasks: todo.tasks });
});

app.listen(port, () => console.log(`Example app listening on port port!`));
