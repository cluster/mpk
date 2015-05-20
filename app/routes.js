var Note = require('./note.js'),
    Goal = require('./goal.js')
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

  //listing goals
  app.get('/api/goals', function(req, res){
    Goal.find(function(err, notes){
      if(err)
        res.send(err);
      res.json(notes);
    });
  });

  //creating a goal
  app.post('/api/goals', function(req, res){
    var id = req.body._id;
    if(id){
      Goal.findOneAndUpdate({_id:id},
        {
          title : req.body.title,
          description : req.body.description
        },
        function(err, notes){
          if(err)
            res.send(err);
          res.json(notes);
      });
    }else{
      var goal = new Goal({
        title : req.body.title,
        description : req.body.description
      });
      goal.save(
        function(err, notes){
          if(err)
            res.send(err);
          res.json(notes);
      });
    }

  });

  //get note by date
  app.get('/api/goals/:id', function(req, res){
    Goal.findOne({
      _id : req.params.id
    }, function(err, notes){
      if(err)
        res.send(err);
      res.json(notes);
    });
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
