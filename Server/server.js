const express = require("express");

const { getDefaultStatus, getNextStatus } = require("./status");

const app = express();
const port = 8000;
let todo = { heading: "Todo", tasks: [], lastTodoId: 0 };
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

app.post("/api/deleteAllTasks", (req, res) => {
  todo = { heading: "Todo", tasks: [], lastTodoId: 0 };
  res.end();
});

app.post("/api/saveTask", (req, res) => {
  const { message } = req.body;
  const status = getDefaultStatus();
  todo.tasks.push({ message, status, taskId: todo.lastTodoId });
  todo.lastTodoId++;
  res.end();
});

app.post("/api/toggleTaskStatus", (req, res) => {
  const { taskId } = req.body;
  const tasksCopy = todo.tasks.map((task) => ({ ...task })); // clone
  const taskToUpdate = tasksCopy.find((task) => task.taskId === taskId); // finding task to toggle
  taskToUpdate.status = getNextStatus(taskToUpdate.status); // get next status
  todo.tasks = tasksCopy;
  res.end();
});

app.post("/api/deleteTask", (req, res) => {
  const { taskId } = req.body;
  todo.tasks = todo.tasks.filter((task) => task.taskId !== taskId);
  res.end();
});

app.listen(port, () => console.log(`Example app listening on port port!`));
