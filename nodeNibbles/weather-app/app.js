// const yargs = require('yargs');

// const geocode = require('./geocode/geocode.js');

// const argv = yargs
//   .options({
//     address: {
//       demand: true,
//       alias: 'a',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;

// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });


// Require Request
// Make request to DarkSky API using
// Show the temperature property to the screen
const request = require('request');
request({
  url: `https://api.darksky.net/forecast/4eca276784134e501dbf3f8296d80890/-30.0192482,-51.1954874`,
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(`Temperature: ${body.currently.temperature}`);
  } else {
    console.log('Unable to fetch weather.');
  }
});

// Forecast Request
// https://api.darksky.net/forecast/[key]/[latitude],[longitude]
// https://api.darksky.net/forecast/4eca276784134e501dbf3f8296d80890/-30.0192482,-51.1954874

// Forecast Key
// 4eca276784134e501dbf3f8296d80890