var sentiments = require('../application/sentiments')
var twitter = require('../application/twitter')

exports.example = function (req, res) {

	twitter.tweets(function (tweets) {
		var counter = 0
		tweetsAnalized = []
		tweets.forEach(function (tweet) {
			sentiments.analyze(tweet, function(data){
				tweetsAnalized.push(data)
				counter++
				if (counter == tweets.length) {
					res.send(JSON.stringify(tweetsAnalized))
				}
			})
		})
	})

}