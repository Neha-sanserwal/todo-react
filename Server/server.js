const express = require("express");
const { getDefaultStatus, getNextStatus } = require("./status");
const db = require("./redis");

const app = express();
const port = 8000;

const TASKS = "tasks";
const LAST_TODO_ID = "taskTodoID";
const HEADING = "HEADING";

const setDbToDefault = async () => {
  await db.postToDb(HEADING, "Todo");
};

app.use(express.json());
setDbToDefault();
app.get("/api/getCurrentHeading", (req, res) => {
  db.getFromDb(HEADING).then((heading) => {
    res.json({ heading });
  });
});

app.get("/api/getLastTodoId", (req, res) => {
  db.getFromDb(LAST_TODO_ID).then((lastTodoId) => {
    res.json({ lastTodoId });
  });
});

app.post("/api/updateHeading", (req, res) => {
  const { heading } = req.body;
  db.postToDb(HEADING, heading).then(() => res.end());
});

app.get("/api/getAllTasks", (req, res) => {
  db.getList(TASKS).then((tasks) => {
    const parsedTasks = tasks || {};
    const allTasks = Object.values(parsedTasks).map((task) => JSON.parse(task));
    res.json({ tasks: allTasks });
  });
});

app.post("/api/deleteAllTasks", (req, res) => {
  db.deleteKey(TASKS)
    .then(setDbToDefault)
    .then(() => res.end());
});

app.post("/api/saveTask", (req, res) => {
  const { message } = req.body;

  const status = getDefaultStatus();
  db.IncrementId(LAST_TODO_ID)
    .then((taskId) => {
      const id = `task${taskId}`;
      const task = JSON.stringify({ message, status, taskId });
      db.pushTo(TASKS, id, task);
    })
    .then(() => res.end());
});

app.post("/api/toggleTaskStatus", (req, res) => {
  const { taskId } = req.body;
  const id = `task${taskId}`;
  db.getFromList(TASKS, id)
    .then(JSON.parse)
    .then((task) => {
      task.status = getNextStatus(task.status);
      return JSON.stringify(task);
    })
    .then((task) => db.setFieldOfList(TASKS, id, task))
    .then(() => res.end());
});

app.post("/api/deleteTask", (req, res) => {
  const { taskId } = req.body;
  const id = `task${taskId}`;

  db.deleteField(TASKS, id).then(() => res.end());
});

app.listen(port, () => console.log(`Example app listening on port port!`));
