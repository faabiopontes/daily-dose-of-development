const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    address: {
      demand: true,
      alias: 'a',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) {
    console.log(errorMessage);
  } else {
    console.log(`Address: ${results.address}`);
    let callbackWeather = (errorMessage, results) => {
      if (errorMessage) {
        console.log("errorMessage");
      } else {
        console.log(`The temperature is ${weather.convertFtoC(results.temperature)} ºC, but the apparent temperature is ${weather.convertFtoC(results.apparentTemperature)} ºC`);
      }
    };

    weather.getWeather(results.latitude, results.longitude, callbackWeather);
  }
});


