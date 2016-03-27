var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function (req, res, next) {
  res.set('Access-Control-Allow-Origin', 'http://lvyou.baidu.com');

  res.json({
    ok: 1,
    name: 123,
    hello: 3333
  });
});

router.get('/jsonp', function (req, res) {
  var callbackName = req.query.__callback;

  if (callbackName) {
    res.send(callbackName + '(1,2,3,4,5,23,23,23,2,32,2,"3sajdkasjdkasjlks")');
  }
})

router.post('/form', function (req, res, next) {
  var name = req.body.name;
  var age = req.body.age;

  console.log(name, age);
  res.json({
    ok: 1
  })
});

module.exports = router;
