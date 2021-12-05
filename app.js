const express = require('express')
const app = express()
const port = 4200

app.use(function(req, res, next){
    res.header("Acces-Control-Allow-Origin", "*");
    res.header("Acces-Control-Allow-Headers", "Origin, X-Requested-with, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send({'text': 'this text was sent from the server'});
});

app.listen(port, () => {
    console.log(`Example app listeninig on port ${port}!`);
});

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})