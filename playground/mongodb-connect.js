// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj.getTimestamp());

// var user = {name: 'Cristina', age:39};
//
// var {name} = user;
//
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // },(err, result)=>{
  //   if(err){
  //     return console.log('unable to insert todo',err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });
  // db.collection('Users').insertOne({
  //   name: 'Francesco2',
  //   age: 42,
  //   location: 'Napoli'
  // },(err, result)=>{
  //     if(err){
  //       return console.log('unable to insert user',err);
  //     }
  //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp()));
  // });

  db.close();
});
