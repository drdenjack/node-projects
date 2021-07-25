const { add_users_routes } = require('./routes/users')
const express = require('express')
const cors = require("cors");
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express()
const port = process.env.PORT || 3000;

var corsOptions = {
  origin: "http://localhost:8081"  // This is because the FE is running on port 8081
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// set routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

// sync with db
const db = require("./models/index");
db.sequelize.sync();

// clear DB
console.log("process.env.CLEAR_DB");
console.log(process.env.CLEAR_DB);
if(process.env.CLEAR_DB == '1') {
  console.log('DROPPING DB AS REQUESTED BY CLEAR_DB ENV VARIABLE')
  db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
  });
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
