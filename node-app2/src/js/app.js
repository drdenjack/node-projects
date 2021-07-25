// var users = require('./users.js')
var express = require('express')
var app = express()
var port = 3000

// users.add_users_routes(app);

app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

