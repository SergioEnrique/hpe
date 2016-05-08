// Dependencies
var express = require('express')

var router = express.Router()

// Services
var sentimentsService = require("../infrastructure/sentimentsService")
var autoReplyService = require('../infrastructure/autoReplayService.js')
// Create route
router.get("/sentiments", sentimentsService.example)

router.post('/autoreply', autoReplyService.reply)

// Export file
module.exports = router
