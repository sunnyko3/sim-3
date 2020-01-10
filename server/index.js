const express = require('express')
const controller = require('./controller')
require('dotenv').config()
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const app = express()
const authCtrl = require('./authCtrl')

app.use(express.json())

app.post('/api/signup', authCtrl.register)


massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Database set')
    app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} Scouting for skillz`))
})
.catch(err => console.log(err));