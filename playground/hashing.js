const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

var password = 'teste';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// })

var hashedPwd = "$2a$10$Ss9SHsMAA2x7WpCRq5a7NedcWP/P66UQoaNgKu4/vXYSflAroPlXu";

bcrypt.compare(password, hashedPwd, (err, res) => {
    console.log(res);
})