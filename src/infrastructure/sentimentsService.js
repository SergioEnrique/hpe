var sentiments = require('../application/sentiments')
var twitter = require('../application/twitter')

exports.example = function (req, res) {

	var tweets = twitter.tweets

	var counter = 0
	tweets.forEach(function (tweet) {
		sentiments.analyze(text, function(data){

			
			if (true) {}
			res.send(JSON.stringify(data))
		})
	})

}