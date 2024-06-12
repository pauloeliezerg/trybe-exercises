const hydrate = (string) => {
  const splitedString = string.split("");
  let waterGlasses = 0;

  for (index = 0; index < splitedString.length; index += 1) {
    const parsedCharacter = parseInt(splitedString[index]);
    if (parsedCharacter) waterGlasses += parsedCharacter;
  }

  const nounNumber = waterGlasses > 1 ? "s" : "";

  return `${waterGlasses} copo${nounNumber} de água`;
};

module.exports = hydrate;
