import Admin from './Admin';

var adm = new Admin('ddd@def.ssscom.br','Qwert1234');
console.log(adm,adm.isAdmin());

const users = [
 { name: 'Diego', age: 23, company: 'Rocketseat' },
 { name: 'Gabriel', age: 15, company: 'Rocketseat' },
 { name: 'Lucas', age: 30, company: 'Facebook' },
];

const ages = users.map(user => user.age);
console.log("Ages:");
console.log(ages);

const rocketMembers = users.filter(user => user.age > 18 && user.company === 'Rocketseat');
console.log("Rocket Members:");
console.log(rocketMembers);

const googleMembers  = users.find(user => user.company === 'Google');
console.log("Google Members:");
console.log(googleMembers);

const joiningOperations = users.map(user => ({...user, age: user.age * 2})).filter(user => user.age <= 50);
console.log("User with max age 50 after doubling:");
console.log(joiningOperations);