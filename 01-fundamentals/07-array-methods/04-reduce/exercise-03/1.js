const countries = [
  {
    name: "Afghanistan",
    region: "Asia",
    currencies: [{ code: "AFN", name: "Afghan afghani" }],
    capital: "Kabul",
    population: 40218234,
    area: 652230,
  },
  {
    name: "Aland Islands",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Mariehamn",
    population: 28875,
    area: 1580,
  },
  {
    name: "Albania",
    region: "Europe",
    currencies: [{ code: "ALL", name: "Albanian lek" }],
    capital: "Tirana",
    population: 2837743,
    area: 28748,
  },
  {
    name: "Algeria",
    region: "Africa",
    currencies: [{ code: "DZD", name: "Algerian dinar" }],
    capital: "Algiers",
    population: 44700000,
    area: 2381741,
  },
  {
    name: "American Samoa",
    region: "Oceania",
    currencies: [{ code: "USD", name: "United States Dollar" }],
    capital: "Pago Pago",
    population: 55197,
    area: 199,
  },
  {
    name: "Andorra",
    region: "Europe",
    currencies: [{ code: "EUR", name: "Euro" }],
    capital: "Andorra la Vella",
    population: 77265,
    area: 468,
  },
  {
    name: "Angola",
    region: "Africa",
    currencies: [{ code: "AOA", name: "Angolan kwanza" }],
    capital: "Luanda",
    population: 32866268,
    area: 1246700,
  },
  {
    name: "Anguilla",
    region: "Americas",
    currencies: [{ code: "XCD", name: "East Caribbean dollar" }],
    capital: "The Valley",
    population: 13452,
    area: 91,
  },
];

// 1. create the getPopulation function that returns the total population of all countries
const getPopulation = (countries) =>
  countries.reduce((totalPopulation, { population }) => {
    totalPopulation += population;
    return totalPopulation;
  }, 0);

// 2. create the longestName function that should return the country with the longest name
const getBiggerName = (longestName, countryName) =>
  countryName.name.length >= longestName.name.length
    ? countryName
    : longestName;

const longestName = (countries) => countries.reduce(getBiggerName).name;

// 3. create a function called totalAreaByRegion that takes an optional region parameter with the default value ‘Europe’; this function calculates and returns the total area of ​​all countries in a given region
const totalAreaByRegion = (countries, region = "Europe") =>
  countries.reduce((totalArea, country) => {
    if (country.region === region) totalArea += country.area;
    return totalArea;
  }, 0);

// 4. create a function called getLargestCountriesByRegion that returns an object containing the countries with the largest area in each region
const getBiggerCountry = (biggerCountry, country) => {
  if (
    !biggerCountry[country.region] ||
    country.area > biggerCountry[country.region].area
  ) {
    biggerCountry[country.region] = { name: country.name, area: country.area };
  }
  return biggerCountry;
};

const getLargestCountriesByRegion = (countries) => {
  return countries.reduce(getBiggerCountry, {});
};

console.log(getLargestCountriesByRegion(countries));
