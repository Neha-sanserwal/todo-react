const postReq = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateHeading = (value) => {
  return new Promise((resolve, reject) => {
    postReq("/api/updateHeading", { heading: value })
      .then((res) => res.json)
      .then(() => resolve(true));
  });
};
export const getCurrentHeading = () => {
  return new Promise((resolve, reject) => {
    fetch("/api/getCurrentHeading")
      .then((res) => res.json())
      .then(resolve);
  });
};
export const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    fetch("/api/getAllTasks")
      .then((res) => res.json())
      .then(resolve);
  });
};
export const getLastTodoId = () => {
  return new Promise((resolve, reject) => {
    fetch("/api/getLastTodoId")
      .then((res) => res.json())
      .then(resolve);
  });
};
