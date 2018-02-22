module.exports = {
  getDuplicates: (array) => {
    var arrayNumbers = [];
    var arrayNumbersDuplicated = [];
    for (var i = 0; i < array.length; ++i) {
      var value = array[i];
      if (arrayNumbers.indexOf(value) == -1) {
        arrayNumbers.push(value);
      }
      else {
        if (arrayNumbersDuplicated.indexOf(value) == -1) {
          arrayNumbersDuplicated.push(value);
        }
      }
    } return arrayNumbersDuplicated;
  }
};