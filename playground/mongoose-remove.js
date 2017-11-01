  const {ObjectID} = require('mongodb');
  const {mongoose} = require('./../server/db/mongoose');
  const {Todo} = require('./../server/models/todo');
  const {User} = require('./../server/models/user');
/*Todo.remove({}).then((result) => {
    console.log(result);
  });


*/
  Todo.findOneAndRemove({_id: '59f93f6894d717c747f662cd'}).then((todo) => {
    console.log(todo);
  });

  Todo.findByIdAndRemove('59f93f6894d717c747f662cd').then((todo) => {
    console.log(todo);
  });
