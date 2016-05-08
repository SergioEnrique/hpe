
var sentiments = require('../application/sentiments')
var twitter = require('../application/twitter')

exports.example = function (req, res) {

	//var search = "spotify 'love' OR 'hate'"
	var search = req.query.filter + " 'love' OR 'hate'"

    twitter.tweets2(100, search, function (tweets) {
        var counter = 0
        var percentaje = 0
        var tweetsAnalized = []
        
        tweets.forEach(function (tweet) {
            sentiments.analyze(tweet.text, function(data){

            	if (data.aggregate.score != 0) {
            		tweetsAnalized.push({analysis:data, tweet: tweet})
            		percentaje += data.aggregate.score
            	}

                counter++
                if (counter == tweets.length) {

                    //res.json(tweetsAnalized)
                    res.json({
                    	search: search,
                    	percentaje: percentaje,
                    	tweets: tweetsAnalized
                    })
                }

            })
        })
    })

}
