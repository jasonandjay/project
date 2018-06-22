var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    req.params
    res.send('hello world')
})

app.listen(8081);