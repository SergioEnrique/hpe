// Dependencies
var express = require("express")
var bodyParser = require("body-parser")
var morgan = require("morgan")
var path = require("path")
var config = require("./config")

var app = express()

// Config
var port = 3000
app.use(morgan("dev"))

// Public folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./src/presenter/router"))

// Start server
app.listen(port)
console.log("La magia ocurre en http://localhost:" + port)