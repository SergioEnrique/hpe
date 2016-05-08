// Dependencies
var express = require("express")
var bodyParser = require("body-parser")
var morgan = require("morgan")
var path = require("path")
var cors = require("cors")
var config = require("./config")
var jade = require('pug')

var app = express()

// Config
var port = 3000
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// Jade engine
app.set('view engine', 'jade');

// Public folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./src/presenter/router"))

app.get("/competencias", function(req, res){
    res.render('competencias');
});

app.post('/lookUp', function(req, res){
    var competitors = [req.body.competitor1,req.body.competitor2,req.body.competitor3,req.body.competitor4];
    res.render('lookup', { competitors: competitors});
});

// Start server
app.listen(port)
console.log("La magia ocurre en http://localhost:" + port)
