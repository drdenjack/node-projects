var express = require('express');
const users = require('../controllers/users.controller')
var router = express.Router();


// don't put '/users' as the route because it's already defined in the app.use('/users', usersRouter) call
router.get('/', (req, res) => {
    return users.findAll(req, res);
});
router.get('/:id', (req, res) => {
    return users.findOne(req, res);
});
router.post('/', (req, res) => {
    // in reality this shouldn't be a real endpoint
    console.log('starting post')
    console.log("header: ")
    console.log(req.headers)
    console.log("body: ")
    console.log(req.body)
    return users.create(req, res);
    // return res.send('Received a POST HTTP method');
});
router.put('/:id', (req, res) => {
    return users.update(req, res);
});
router.delete('/:id', (req, res) => {
    return users.delete(req, res);
});
router.delete('/', (req, res) => {
    return users.deleteAll(req, res);
});

module.exports = router;
