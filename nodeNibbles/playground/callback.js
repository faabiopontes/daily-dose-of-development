console.log('Starting callback.js');
var getUser = (id, callback) => {
  var user = {
    id: id,
    name: 'Fabio'
  };

  setTimeout(() => {
    callback(user);

  }, 3000);
};

getUser(31, (user) => {
  console.log(user);
});
console.log('Finishing callback.js');