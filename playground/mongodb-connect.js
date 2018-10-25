// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    console.log('--------------------');
    const db = client.db('TodoApp');

    // db.collection('Users').insertOne({
    //     name: 'Buba',
    //     age: 25,
    //     location: 'Minas Gerais'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // })    

    client.close();
});