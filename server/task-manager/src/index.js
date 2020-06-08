const express = require('express')
require('./db/mongoose')
// const user = require('./models/user')
const userRoute = require('./routes/user')
const registerRoute = require('./routes/register')
var cors = require('cors');

const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
app.use(userRoute)
app.use(registerRoute)

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.listen(port, () => {
    console.log('Server is up on port: ' + port)
})