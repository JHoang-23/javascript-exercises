const convertToCelsius = function(tempInFahrenheit) {
  //(x-32) * 5/9
  let tempInCelsius = (tempInFahrenheit - 32) * (5/9)
  let rounded = Math.round(tempInCelsius * 10) / 10

  return rounded
};

const convertToFahrenheit = function(tempInCelsius) {
  //x * 9/5 + 32
  let tempInFahrenheit = (tempInCelsius * 9/5) + 32
  let rounded = Math.round(tempInFahrenheit * 10) / 10

  return rounded

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
