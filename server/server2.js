  var mongoose = require('mongoose');

  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/TodoApp');
  /*
  var Todo = mongoose.model('Todo', {
    text: {
      type: String,
      required: true,
      minlength: 1,
      trim: true
    },
    completed: {
      type: Boolean,
      default: false
    },
    completedAt: {
      type: Number,
      default: null
    }
  });

  var otherTodo = new Todo({
    text: '   Edit this Video   '
  });

  otherTodo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (e) => {
    console.log('Unable to save Todo', e);
  });
  */
  //User
  //email - require it - trim it - type: string - minlength: 1
  var User = mongoose.model('User', {
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1
    }
  });

  var newUser = new User({
    email: 'agn253@nyu.edu   '
  });

  newUser.save().then((doc) => {
    console.log('User saved', doc);
  }, (e) => {
    console.log('Unable to save User', e);
  });
