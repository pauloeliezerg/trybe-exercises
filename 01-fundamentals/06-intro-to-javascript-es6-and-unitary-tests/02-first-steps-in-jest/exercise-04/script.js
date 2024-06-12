const techList = (techArray, name) => {
  if (!techArray.length) return `Vazio!`;

  const techList = [];
  const orderedArray = techArray.sort();

  for (let index = 0; index < orderedArray.length; index += 1) {
    techList.push({});
    techList[index].tech = orderedArray[index];
    techList[index].name = name;
  }

  return techList;
};

module.exports = techList;
