var twitter = require('../application/twitter')

exports.reply = function (req, res) {
    var tweetArray = req.body.tweets
        var text = "I freaking love coffee"
        var cont = 0
        tweetArray.forEach(function(tweet){
            twitter.reply('@' + tweet.tweet.user.screen_name + ' ' + text, function(data) {
                console.log(data)                
                cont++
            
            if (cont === tweetArray.length)
                res.json({success: 1})
            })
        })
}
