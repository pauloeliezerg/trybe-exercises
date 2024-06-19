// Fonte: <https://restcountries.com/v2/all>

const countries = [
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
  {
    name: "Brazil",
    region: "Americas",
    currencies: [{ code: "BRL", name: "Brazilian Real" }],
    capital: "Brasília",
    population: 213993437,
    area: 8515767,
  },
  {
    name: "Canada",
    region: "Americas",
    currencies: [{ code: "CAD", name: "Canadian Dollar" }],
    capital: "Ottawa",
    population: 38008005,
    area: 9976140,
  },
  {
    name: "China",
    region: "Asia",
    currencies: [{ code: "CNY", name: "Chinese Yuan" }],
    capital: "Beijing",
    population: 1439323776,
    area: 9640011,
  },
  {
    name: "France",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Paris",
    population: 67022000,
    area: 551695,
  },
  {
    name: "India",
    region: "Asia",
    currencies: [{ code: "INR", name: "Indian Rupee" }],
    capital: "New Delhi",
    population: 1393409038,
    area: 3287263,
  },
  {
    name: "Mexico",
    region: "Americas",
    currencies: [{ code: "MXN", name: "Mexican Peso" }],
    capital: "Mexico City",
    population: 126190788,
    area: 1964375,
  },
  {
    name: "Russia",
    region: "Europe/Asia",
    currencies: [{ code: "RUB", name: "Russian Ruble" }],
    capital: "Moscow",
    population: 146599183,
    area: 17098242,
  },
  {
    name: "South Africa",
    region: "Africa",
    currencies: [{ code: "ZAR", name: "South African Rand" }],
    capital: "Pretoria",
    population: 59308690,
    area: 1221037,
  },
  {
    name: "United States",
    region: "Americas",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Washington, D.C.",
    population: 331449281,
    area: 9629091,
  },
];

// 1. add the planet property with the value Earth in all countries directly in the countries array
countries.forEach((country) => (country.planet = "Earth"));

// 2. for each country, create an object with just the name, currency code and currency name information; this information must be stored in a new array; do this exercise using the forEach method, it is not worth map
const currencyArray = [];
countries.forEach(({ name, currencies: [{ code, name: currencyName }] }) =>
  currencyArray.push({ name, code, currencyName }),
);

// 3. write a function called findCountry that takes two parameters: the array of countries and the name of the desired country; upon receiving these values, the function must return the desired country element; if it is not found, the function should throw an error with the message: “Country not found!”
const findCountry = (countries, countryName) => {
  const countryFound = countries.find(
    (country) => country.name === countryName,
  );
  return countryFound || "Country not found";
};

// 4. develop a function that creates a copy of the countries array and adds Germany to this new array using the spread operator
const newCountry = {
  name: "Germany",
  region: "Europe",
  currencies: [{ code: "EUR", name: "Euro" }],
  capital: "Berlin",
  population: 83190556,
  area: 357386,
};

const addCountry = (country) => {
  const newCountries = [...countries];
  newCountries.push(country);
};
addCountry(newCountry);

// 5. develop a solution to loop through the countries array and build a string for each country with specific information and formatting; the properties are passed as arguments to the buildString function and added to the final string; the string must be constructed with the name, capital, currencies.code and currencies.name properties separated by a -
countries.forEach(
  ({ name, capital, currencies: [{ code, name: currencyName }] }) =>
    console.log(`${name} - ${capital} - ${code} - ${currencyName}`),
);
