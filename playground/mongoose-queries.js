const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = "5bd2531988ac3d28207397b9";

if (!ObjectID.isValid(id)){
    console.log('ID is invalid');
} else {
    User.findById(id)
        .then((user) => {
            if (!user) {
                return console.log('User not found');
            }
            console.log('User found by id', JSON.stringify(user, undefined, 2));
        })
}

// var id = "6bd3a1ea1471242e50c791b55";

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((err) => console.log(err));