var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/* GET specific user. */
router.get('/:userId', function(req, res, next) {
  console.log(req.params);
  let text = 'respond with info from user: '+req.params.userId;
  res.send(text);
});

module.exports = router;
