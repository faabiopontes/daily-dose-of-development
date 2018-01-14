var square = x => x * x;

// when you have only one parameter
// the code below is the same as above
var square = (x) => x * x;

// when you have only one command
// it automatically returns
// the code below is the same as above
var square = (x) => {
  var result = x * x;
  return result;
};

console.log(square(8));

var user = {
  name: 'Fabio',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  },
  sayHiAlt() {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);
  }
};

user.sayHi();
user.sayHiAlt(1,2,3);