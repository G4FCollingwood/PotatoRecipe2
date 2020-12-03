var express = require('express')
var app = express()

app.get('/', function(req, resp){
   resp.send('Schmuck')
})

app.listen(8090)