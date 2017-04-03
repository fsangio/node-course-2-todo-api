const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '58e2cdc86547e7c82a34d7a2z';
// if(!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
/*Todo.find({
  _id: id
}).then((todos)=>{
  console.log('Todos', todos);
});

Todo.findOne({
  _id: id
}).then((todo)=>{
  console.log('Todo', todo);
});*/

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('Id not found');
//   }
//   console.log('Todo', todo);
// }).catch((e)=> console.log(e));

User.findById('18d1310ae28fe4a4236a18bf').then((user)=>{
  if(!user){
    return console.log('Unable t find user');
  }
  console.log(JSON.stringify(user, undefined, 2));
})
