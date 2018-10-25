// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    console.log('--------------------');
    const db = client.db('TodoApp');

    // db.collection('Todos')
    //     .find()
    //     .count()
    //     .then((count) => {
    //         // console.log(JSON.stringify(docs, undefined, 2));
    //         console.log('Todos:', count);
    //     }, (err) => {
    //         console.log('Unable to fetch todos', err);
    //     });

    db.collection('Users')
        .find({
            name: "Blake"
        })
        .toArray()
        .then((docs) => {
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });


    // client.close();
});