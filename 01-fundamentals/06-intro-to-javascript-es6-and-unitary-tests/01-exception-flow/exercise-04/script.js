// 1. if the function does not receive name or age (or both), throw an exception with the message 'All information is required'
// 2. if the role receives the name and an age below 18 years old, throw an exception with the message 'Oops, unfortunately you can't take classes at the moment'
const studentRegister = (name, age) => {
  if (!name || !age) throw new Error("All information is required");
  if (age < 18)
    throw new Error("Oops, unfortunately you can't take classes at the moment");
};
