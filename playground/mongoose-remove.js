const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

Todo.findByIdAndRemove('5bd79edc1214e9fa777180d8').then((result) => {
    console.log(result);
});