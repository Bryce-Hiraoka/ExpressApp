var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/signup',function(req,res,next){
  res.render('signup', {title:'Express'})
});

router.post('/submitUser', function(req, res){
  const accountInfo = {
    email: req.body.email,
    password: req.body.password
  };
  const db = req.con;
  console.log(db);
  db.query("INSERT INTO accounts SET ?", accountInfo, function(rows, err){
    if(err) {
      console.log(err);
    }else{
      res.send("Insertion successful");
    }
  })
});

router.get('/signin', function(req, res){
  res.render('signin', {title: "Please Sign In"});
});

router.post('/signinUser', function(req, res){
  const accountInfo = {
    email: req.body.email,
    password: req.body.password
  };
  const db = req.con;
  db.query("SELECT * FROM accounts", accountInfo, function(rows, err){
    if(err) {
      res.redirect('signin');
    }else{
      res.send("Signin successful");
    }
  })
});

module.exports = router;
