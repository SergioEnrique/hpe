
var sentiments = require('../application/sentiments')
var twitter = require('../application/twitter')

exports.example = function (req, res) {

	//var search = "spotify 'love' OR 'hate'"
	var search = req.query.filter + " 'love' OR 'hate'"

    twitter.tweets2(40, search, function (tweets) {
        var counter = 0
        var usedcounter = 0
        var sum = 0
        var negative = 0
        var positive = 0
        var tweetsAnalized = []
        
        tweets.forEach(function (tweet) {
            sentiments.analyze(tweet.text, function(data){

            	if (data.aggregate.score != 0) {
            		tweetsAnalized.push({analysis:data, tweet: tweet})
            		sum += data.aggregate.score
            		usedcounter++
            		if (data.aggregate.score > 0) {
            			positive++
            		}
            		else{
            			negative++
            		}
            	}

                counter++
                if (counter == tweets.length) {

                    //res.json(tweetsAnalized)
                    res.json({
                    	search: search,
                    	positive: positive,
                    	negative: negative,
                    	average: sum/usedcounter,
                    	tweets: tweetsAnalized
                    })
                }

            })
        })
    })

}
