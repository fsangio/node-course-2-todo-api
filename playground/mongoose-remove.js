const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result)=>{
  console.log(result);
});

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove()

Todo.findOneAndRemove({_id:'58e6a576c3050bbd3a2d9b29'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('58e6a576c3050bbd3a2d9b29').then((todo)=>{
  console.log(todo);
});
