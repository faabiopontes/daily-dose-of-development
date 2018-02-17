const request = require('request');

var getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/4eca276784134e501dbf3f8296d80890/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to Forecast.io server.');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch weather.');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
};
var convertFtoC = (fahrenheitTemperature, decimals = 1) => {
  let celsiusTemperature = (fahrenheitTemperature - 32) / 1.8;
  return celsiusTemperature.toFixed(decimals);
};

module.exports.getWeather = getWeather;
module.exports.convertFtoC = convertFtoC;