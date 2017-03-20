// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('58d028423f544ce5e549bf12')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result)=>{
  //     console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('58c6bc181e2f711cc0a5798e')
  }, {
    $set: { name: 'Frank'},
    $inc: {age: 1}    
  }, {
      returnOriginal: false
  }).then((result)=>{
      console.log(result);
  });
  // db.close();
});
