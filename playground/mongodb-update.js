// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err){
        return console.log('Unable to connect to MongoDB');
    }
    console.log('Connected to MongoDB');
    console.log('--------------------');
    const db = client.db('TodoApp');

    db.collection('Users')
        .findOneAndUpdate({
            _id: new ObjectID("5bd11400634cb105e80dcd59")
        }, {
            $set: {
                name: "Onildo"
            },
            $inc: {
                age: -1
            }
        }, {
            returnOriginal: false
        })
        .then((results) => {
            console.log(results);
        })

    // db.collection('Todos')
    //     .findOneAndUpdate({
    //         _id: new ObjectID("5bd23e35971a053c9d259645")
    //     }, {
    //         $set: {
    //             completed: true
    //         }
    //     }, {
    //         returnOriginal: false
    //     })
    //     .then((results) => {
    //         console.log(results);
    //     });

    // client.close();
});