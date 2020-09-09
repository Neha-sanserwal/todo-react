const rtg = require("url");
const redisClient = require("redis").createClient(rtg.port, rtg.hostname);
redisClient.auth(rtg.auth.split(":")[1]);

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

const getFromList = (key, field) => {
  return new Promise((resolve, reject) => {
    redisClient.hget(key, field, (err, task) => {
      err && reject(reject);
      resolve(task);
    });
  });
};
const setFieldOfList = (key, field, value) => {
  return new Promise((resolve, reject) => {
    redisClient.hset(key, field, value, (err) => {
      err && reject(reject);
      resolve(true);
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

const deleteField = (key, field) => {
  return new Promise((resolve, reject) => {
    redisClient.hdel(key, field, (err) => {
      err && reject(err);
      resolve(true);
    });
  });
};

const deleteKey = (key) => {
  return new Promise((resolve, reject) => {
    redisClient.del(key, (err) => {
      err && reject(err);
      resolve(true);
    });
  });
};

module.exports = {
  IncrementId,
  pushTo,
  getList,
  postToDb,
  getFromDb,
  getFromList,
  setFieldOfList,
  deleteKey,
  deleteField,
};
