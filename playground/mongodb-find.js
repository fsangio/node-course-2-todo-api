// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



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

  // db.collection('Todos').find({
  //   _id: new ObjectID('58c6b2caf1a3f23388276ef5')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos', err);
  // })
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count:${count}`);
  // },(err)=>{
  //   console.log('Unable to fetch todos', err);
  // })
  db.collection('Users').find({name: 'Francesco'}).count().then((count)=>{
    console.log(`Todos count:${count}`);
  },(err)=>{
    console.log('Unable to fetch todos', err);
  });
  db.collection('Users').find({name: 'Francesco'}).toArray().then((docs)=>{
    console.log(JSON.stringify(docs, undefined, 2));
  },(err)=>{
    console.log('Unable to fetch todos', err);
  });
  // db.close();
});
