// Dependencies
var express = require('express')

var router = express.Router()

// Services
var sentimentsService = require("../infrastructure/sentimentsService")

// Create route
router.get("/sentiments", sentimentsService.example)

// Export file
module.exports = router