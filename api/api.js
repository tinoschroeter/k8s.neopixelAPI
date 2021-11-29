const express = require('express')
const app = express()

const blink = require('./api/blink')
const getItem = require('./api/getItem')
const off = require('./api/off')
const setColor = require('./api/setColor')
const startCI = require('./api/startCI')

const db = []

app.use(express.json())

app.get('/api/blink/:color', blink(db))
app.get('/api/color/:color', setColor(db))
app.get('/api/off', off(db))
app.get('/api/ci', startCI(db))

app.get('/api/getItem', getItem(db))

const port = process.env.PORT || 80
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
