const express = require("express");
const { getDefaultStatus, getNextStatus } = require("./status");

const redisClient = require("redis").createClient({ db: 1 });

const app = express();
const port = 8000;

const getFromDb = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, value) => {
      if (err) {
        reject(err);
      }
      resolve(value);
    });
  });
};

const postToDb = (key, value) => {
  return new Promise((resolve, reject) => {
    redisClient.set(key, value, (status) => {
      resolve(true);
    });
  });
};

const getList = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.hgetall(key, (err, data) => {
      resolve(data);
    });
  });
};
const pushTo = (key, field, value) => {
  return new Promise((resolve, reject) => {
    redisClient.hset(key, field, value, (err, number) => {
      err && reject(err);
      resolve(number);
    });
  });
};

const IncrementId = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.incr(key, (err, number) => {
      err && reject(err);
      resolve(number);
    });
  });
};

const setDbToDefault = async () => {
  await postToDb("heading", "Todo");
};

app.use(express.json());
setDbToDefault();
app.get("/api/getCurrentHeading", (req, res) => {
  getFromDb("heading").then((heading) => {
    res.json({ heading });
  });
});

app.get("/api/getLastTodoId", (req, res) => {
  getFromDb("lastTodoId").then((lastTodoId) => {
    res.json({ lastTodoId });
  });
});

app.post("/api/updateHeading", (req, res) => {
  const { heading } = req.body;
  postToDb("heading", heading).then(() => res.end());
});

app.get("/api/getAllTasks", (req, res) => {
  getList("tasks").then((tasks) => {
    const parsedTasks = tasks || {};
    const allTasks = Object.values(parsedTasks).map((task) => JSON.parse(task));
    res.json({ tasks: allTasks });
  });
});

app.post("/api/deleteAllTasks", (req, res) => {
  setDbToDefault().then(() => {
    redisClient.del("tasks", () => {
      res.end();
    });
  });
});

app.post("/api/saveTask", (req, res) => {
  const { message } = req.body;
  const status = getDefaultStatus();
  IncrementId("lastTodoId")
    .then((taskId) => {
      const task = JSON.stringify({ message, status, taskId });
      pushTo("tasks", `task${taskId}`, task);
    })
    .then(() => res.end());
});

app.post("/api/toggleTaskStatus", (req, res) => {
  const { taskId } = req.body;
  console.log(taskId);
  redisClient.hget("tasks", `task${taskId}`, (err, task) => {
    console.log(task);
    const taskToUpdate = JSON.parse(task);
    taskToUpdate.status = getNextStatus(taskToUpdate.status); // get next status
    redisClient.hset(
      "tasks",
      `task${taskId}`,
      JSON.stringify(taskToUpdate),
      () => {
        res.end();
      }
    );
  });
});

app.post("/api/deleteTask", (req, res) => {
  const { taskId } = req.body;
  redisClient.hdel("tasks", `task${taskId}`, () => {
    res.end();
  });
});

app.listen(port, () => console.log(`Example app listening on port port!`));
