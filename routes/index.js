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

module.exports = router;
