//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //findOneAndUpdate
  /*
  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('59dc29c46c85de292fc17fe9')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });
  */
  //db.close();

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59dc30896c85de292fc18101')
  }, {
    $set: {
      name: "Annamalai Gokkul Natarajan"
    },
    $inc:  {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

});
