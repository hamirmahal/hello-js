//Today's Weather Forecast
const kelvin = 293
// Converting Kelvin to Celsius
let celsius = kelvin - 273
// Conversting Celsius to Fahrenheit
let fahrenheit = celsius * (9/5) + 32
//Rounding degrees Fahrenheit
Math.floor(fahrenheit)
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);