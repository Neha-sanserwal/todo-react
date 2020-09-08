export const updateHeading = () => {
  return new Promise((resolve, reject) => {
    resolve(true);
  });
};
export const getCurrentHeading = () => {
  return new Promise((resolve, reject) => {
    resolve({ heading: "Todo" });
  });
};
export const getAllTasks = () => {
  return new Promise((resolve, reject) => {
    resolve({ tasks: [] });
  });
};
export const getLastTodoId = () => {
  return new Promise((resolve, reject) => {
    resolve({ lastTodoId: 0 });
  });
};
