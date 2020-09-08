const express = require("express");
const app = express();
const port = 8000;
let todo = { heading: "Todo new", tasks: [], lastTodoId: 0 };

app.use(express.json());

app.get("/api/getCurrentHeading", (req, res) => {
  console.log({ heading: todo.heading });
  res.json({ heading: todo.heading });
});

app.get("/api/getLastTodoId", (req, res) => {
  res.send(JSON.stringify({ lastTodoId: todo.lastTodoId }));
});

app.get("/api/getAllTasks", (req, res) => {
  res.send(JSON.stringify({ lastTodoId: todo.tasks }));
});

app.listen(port, () => console.log(`Example app listening on port port!`));
