var express = require('express')
var bodyParser = require('body-parser')


var app = new express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

var port = process.env.PORT || 3000

itemRouter = require('./shoppingCartRouter')()

app.use('/v1/api/', itemRouter)


app.get('/', function(req, res){
  res.send("Welcome to Shopping Cart API")
})

app.listen(port, function(){
  console.log('Running on port:' + port);
})
