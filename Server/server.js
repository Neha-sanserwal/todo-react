const express = require("express");

const { getDefaultStatus, getNextStatus } = require("./status");

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

app.post("/api/saveTask", (req, res) => {
  const { message } = req.body;
  const status = getDefaultStatus();
  todo.tasks.push({ message, status, taskId: todo.lastTodoId });
  todo.lastTodoId++;
  console.log(todo.tasks);
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port port!`));
