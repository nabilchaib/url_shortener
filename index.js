const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api/index.js');

const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})
app.use(bodyParser.json());
app.use('/api' ,apiRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})