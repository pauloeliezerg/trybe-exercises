// 1. if the function does not receive name or age (or both), throw an exception with the message 'All information is required'
const studentRegister = (name, age) => {
  if (!name || !age) throw new Error("All information is required");
};
