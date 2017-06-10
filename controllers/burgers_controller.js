var express = require('express');
var router = express.Router();
var db = require('../models');


module.export = function(app) {

app.get('/', function(req, res){
  res.redirect('/burgers')
});

app.get('/burgers', function(req, res){
  db.findAll({}).then(function(dbburgers){
    var hbsObject = {burgers: data};

    console.log(hbsObject);

    res.json('index', hbsObject);
  });
});

router.post('/burgers/create', function(req, res){
  burgers.create(['burger_name'], [req.body.b_name], function(data){
    res.redirect('/burgers')
  });
});

router.put('/burgers/update/:id', function(req, res){
  var condition = 'id = ' + req.params.id;

  console.log('condition ', condition);

  burgers.update({'devoured': req.body.devoured}, condition, function(data){
    res.redirect('/burgers');
  });
});
};

