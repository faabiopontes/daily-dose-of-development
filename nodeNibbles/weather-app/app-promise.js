const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  if (response.data.status === "OVER_QUERY_LIMIT") {
    throw new Error('Over query limit for now, try again later');
  }
  if (response.data.status === "ZERO_RESULTS") {
    throw new Error('Unable to find that address');
  }
  var lat = response.data.results[0].geometry.location.lat;
  var lng = response.data.results[0].geometry.location.lng;
  var weatherUrl = `https://api.darksky.net/forecast/4eca276784134e501dbf3f8296d80890/${lat},${lng}`;
  console.log(response.data.results[0].formatted_address);
  return axios.get(weatherUrl);
}).then((response) => {
  var temperature = response.data.currently.temperature;
  var apparentTemperature = response.data.currently.apparentTemperature;
  console.log(`It's currently ${weather.convertFtoC(temperature)}ºC, but it feels like ${weather.convertFtoC(apparentTemperature)}ºC`);
})
.catch((e) => {
  if (e.code === 'ENOTFOUND') {
    console.log('Unable to connect to ' + e.request._currentUrl);
  } else {
    console.log(e.message);
  }
});