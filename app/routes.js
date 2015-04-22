var Note = require('./note.js')
module.exports = function(app, passport) {
  //listing notes
  app.get('/api/notes', function(req, res){
    Note.find(function(err, notes){
      if(err)
        res.send(err);
      res.json(notes);
    });
  });

  //get note by date
  app.get('/api/notes/:date', function(req, res){
    Note.findOne({
      date : req.params.date
    }, function(err, notes){
      if(err)
        res.send(err);
      res.json(notes);
    });
  });

  //creating a note
  app.post('/api/notes', function(req, res){
    Note.update({date:req.body.date},
      {
        date : req.body.date,
        content : req.body.content
      },
      {upsert: true},
      function(err, notes){
        if(err)
          req.send(err);
        res.json(notes);
    })
  });

  //deleting a note
  app.delete('/api/notes/:id', function(req, res){
    Note.remove({
      _id : req.params.id
    }, function(err, notes){
        if(err)
          res.send(err);
        //not very efficient, change that later...
        Note.find(function(err, todos) {
          if (err)
            res.send(err)
          res.json(todos);
        });
    })
  });

  app.get('/', function(req, res){
    res.sendfile('./mobile/www/index.html');
  });

  function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
  }
}
