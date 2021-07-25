var express = require('express');
var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req, res) => {
  msg = `<h1>Welcome to the basic users test server!</h1>
  <br><br>
  <h3>Try the /users endpoint!</h3>
  `
    res.send(msg)
});

module.exports = router;
