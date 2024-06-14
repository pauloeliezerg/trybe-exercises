// 1. given an array of temperatures in degrees Celsius, create a function that returns a new array with the temperatures converted to Fahrenheit. The conversion formula is: Fahrenheit = (Celsius * 9/5) + 32
const temperaturesCelsius = [23, 10, 32, 21, 47];

const temperaturesFahrenheit = temperaturesCelsius.map(
  (temperature) => (temperature * 9) / 5 + 32,
);
