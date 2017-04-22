require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body);
  if(req.body.todos && req.body.todos.length>0){
    var todos = req.body.todos;
    console.log(`Insert of array of todo ${todos.length}`);
    Todo.insertMany(todos).then((todos)=>{
      res.send({todos});
    },(e)=>{
      res.status(400).send(e);
    });
  } else {
    console.log('Insert of a single todo');
    var todo = new Todo({
      text: req.body.text
    });
    todo.save().then((doc)=>{
      res.send(doc);
    },(e)=>{
      res.status(400).send(e);
    });
  }
});

app.get('/todos',(req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e)=>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id', (req,res)=>{
    //res.send(req.params);
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
      return res.status(404).send();
    }
    Todo.findById(id).then((todo)=>{
      if(!todo)
        return res.status(404).send();
      //res.send(JSON.stringify(todo,undefined,2));
      res.send({todo});
    }).catch((e)=>{
      res.status(400).send();
    });
});

app.delete('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id))
    return res.status(404).send();
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo)
      return res.status(404).send();
    return res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});


app.patch('/todos/:id', (req,res)=>{
    var id = req.params.id;
    var body = _.pick(req.body,['text','completed']);

    if(!ObjectID.isValid(id))
      return res.status(404).send();

    if(_.isBoolean(body.completed) && body.completed){
      body.completedAt = new Date().getTime();
    }else{
      body.completed = false;
      body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body},{new: true}).then((todo)=>{
      if(!todo){
        return res.status(404).send();
      }
      res.send({todo});
    }).catch((e)=>{
      res.status(400).send();
    });
});

// POST /users
app.post('/users', (req, res) => {
  var body = _.pick(req.body, ['email', 'password']);
  var user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token)=>{
    res.header('x-auth',token).send(user);
  }).catch((e) => {
    res.status(400).send(e);
  })
});

app.listen(port,()=>{
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
// var newUser = new User({
//   name: 'fsangio',
//   email: 'fsangio@gmail.com'
// });
// newUser.save().then((result)=>{
//   console.log('Saved user', result)
// },(e)=>{
//   console.log('Unable to save todo')
// });
//
// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc)
// }, (e)=>{
//   console.log('Unable to save todo')
// });


// var otherTodo = new Todo({
//   text: '  Edit this video  ',
// });
//
// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc,undefined,2));
// },(e)=>{
//   console.log('Unable to save todo')
// });
