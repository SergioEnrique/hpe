
var sentiments = require('../application/sentiments')
var twitter = require('../application/twitter')

exports.example = function (req, res) {

    twitter.tweets(20, ['spotify', 'itunes'], function (tweets) {
        var counter = 0
        tweetsAnalized = []
        tweets.forEach(function (tweet) {
            sentiments.analyze(tweet, function(data){
                tweetsAnalized.push({data:data, tweet: tweet})
                counter++
                if (counter == tweets.length) {
                    res.send(JSON.stringify(tweetsAnalized))
                }
            })
        })
    })

}
