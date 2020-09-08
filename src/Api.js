export const updateHeading = () => {
  return new Promise((resolve, reject) => {
    resolve(true);
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
    fetch("/api//api/getAllTasks")
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
