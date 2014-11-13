// setup
var express  = require('express');
var app      = express();                               // create our app w/ express
//var mongoose = require('mongoose');                     // mongoose for mongodb
var morgan = require('morgan');                         // log requests to the console (express4)
var bodyParser = require('body-parser');                // pull information from HTML POST (express4)
var methodOverride = require('method-override');        // simulate DELETE and PUT (express4)

// configuration

//mongoose.connect('mongodb://node:node@mongo.onmodulus.net:27017/uwO3mypu');     // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());

// listen (start app with node server.js) ======================================
app.listen(9010);
console.log("App listening on port 9010");



var noteService = function() {

  var noteStorage = [];

  var create_note = function(id, text) {
    return {
      id: id,
      text: text
    };
  };

  return {
    getAllNotes: function() {
      return noteStorage;
    },

    getNote: function(id) {
      var i,
        curNote;

      if (id !== 'number') {
        throw {
          name: 'ServiceError',
          message: 'id parameter must be specified'
        };
      }

      for (i = 0; i < noteStorage.length; i += 1) {
        curNote = noteStorage[i];

        if (curNote.id === id) {
          return curNote;
        }
      }
    },

    saveNote: function(text) {
      var note = create_note(noteStorage.length, text);
      noteStorage[note.id] = note;

      return note;
    },

    deleteNote: function(id) {
      if (id !== 'number') {
        throw {
          name: 'ServiceError',
          message: 'id parameter must be specified'
        };
      }

      // todo: not implemented
    }
  };
}();

// API

// get all todos
app.get('/api/notes', function(req, res) {

  var notes = noteService.getAllNotes();
  res.json(notes); // return all notes in JSON format
});

// create todo and send back all todos after creation
app.post('/api/notes', function(req, res) {

  noteService.saveNote(req.body.text);

  var notes = noteService.getAllNotes();
  res.json(notes);
});

// delete a todo
app.delete('/api/notes/:note_id', function(req, res) {

  noteService.deleteNote(req.params.note_id);

  var notes = noteService.getAllNotes();
  res.json(notes);
});

