
var sentiments = require('../application/sentiments')
var twitter = require('../application/twitter')

exports.example = function (req, res) {

    twitter.tweets2(100, "spotify 'love' OR 'hate'", function (tweets) {
        var counter = 0
        tweetsAnalized = []
        tweets.forEach(function (tweet) {
            sentiments.analyze(tweet.text, function(data){

            	if (data.aggregate.score != 0) {
            		tweetsAnalized.push({analysis:data, tweet: tweet})
            	}

                counter++
                if (counter == tweets.length) {
                    res.json(tweetsAnalized)
                }

            })
        })
    })

}
