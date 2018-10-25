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
    //     .deleteOne({
    //         text: 'teste'
    //     }).then((result) => {
    //         console.log(result);
    //     });

    db.collection('Users')
        .deleteMany({
            name: 'Buba'
        })
        .then((results) => {
            console.log(results);
        })

    db.collection('Users')
        .findOneAndDelete({
            _id: new ObjectID("5bd22d00ca862d22746087e7")
        }).then((results) => {
            console.log(results);
        })

    // client.close();
});