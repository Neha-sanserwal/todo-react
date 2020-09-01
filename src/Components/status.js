const DUE = "due";
const PROCESSING = "processing";
const COMPLETED = "completed";

const nextStatus = {
  [DUE]: PROCESSING,
  [PROCESSING]: COMPLETED,
  [COMPLETED]: DUE,
};

const getNextStatus = (currentStatus) => {
  return nextStatus[currentStatus];
};

const getDefaultStatus = () => DUE;

export { getDefaultStatus, getNextStatus };
