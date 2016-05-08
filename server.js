// Dependencies
var express = require("express")
var bodyParser = require("body-parser")
var morgan = require("morgan")
var path = require("path")
var cors = require("cors")
var config = require("./config")
var swig = require('swig')

var app = express()

// Config
app.set('port', (process.env.PORT || 5000));
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// Swig engine
app.set('view engine', 'swig');

// Public folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./src/presenter/router"))

app.get("/competencias", function(req, res){
    res.send(swig.renderFile('views/competencias.html'))
});

app.post('/lookUp', function(req, res){
    var competitors = [req.body.competitor1,req.body.competitor2,req.body.competitor3,req.body.competitor4];
    res.send(swig.renderFile('views/lookup.html', { competitors: competitors}));
});

// Start server
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});