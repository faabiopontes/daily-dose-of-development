const fs = require('fs');

var getTimesheets = () => {
  try {
    var timesheetsString = fs.readFileSync(__dirname + '/timesheets.json');
    var timesheetsObject = JSON.parse(timesheetsString);
    return timesheetsObject.timesheets;
  } catch (e) {
    return [];
  }
};

var timesheets = getTimesheets();
console.log(timesheets.length);
debugger;