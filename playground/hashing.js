const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
    id: 10
};

var token = jwt.sign(data, '123abc');
console.log(token);

console.log(jwt.verify(token, '123abc'));

// var message = 'Eh nois manolo';
// var hash = SHA256(message).toString();

// console.log(`${message} ----- ${hash}`);

// var data = {
//     id: 4
// };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.data.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(data) + 'somesecret').toString();
// if (resultHash === token.hash) {
//     console.log("Data wasn't changed");
// } else {
//     console.log('Data was changed! Do not trust');
// }