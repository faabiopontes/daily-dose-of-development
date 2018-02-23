# Weather App

Using the Google Maps API to get the latitude and longitude of a location.

And then getting weather information using Forecast API (DarkSky API).

## Forecast Request URLs
- https://api.darksky.net/forecast/[key]/[latitude],[longitude]
- https://api.darksky.net/forecast/4eca276784134e501dbf3f8296d80890/-30.0192482,-51.1954874

## Our Forecast Key
- 4eca276784134e501dbf3f8296d80890

## Things we learned
- JSON.stringify(jsonObject, undefined, 2): returns a JSON string with break lines and indentation
- A Callback can be a named function or a inner function (closure)
- Promises can only be resolved or rejected
- Promises.then() can receive two callback function for when it's resolved or rejected
- Promises().then().catch() can be used so we don't have to handle every reject