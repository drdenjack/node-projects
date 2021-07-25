import { add_users_routes } from "./users";

const express = require('express')
const app = express()
const port = 3000

add_users_routes(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
