const postReq = (url, data) => {
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
};

export const updateHeading = (heading) => {
  return new Promise((resolve, reject) => {
    postReq("/api/updateHeading", { heading })
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

export const saveTask = (message) => {
  return new Promise((resolve, reject) => {
    postReq("/api/saveTask", { message })
      .then((res) => res.json)
      .then(() => resolve(true));
  });
};
