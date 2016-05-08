var twitter = require('../application/twitter')

exports.reply = function (req, res) {
    var tweetArray = req.body.users
        var text = "Hey you should check our service, have a 30% discount code bit.ly/aedr"
        var cont = 0
        tweetArray.forEach(function(tweet){
            twitter.reply('@' + tweet + ' ' + text, function(data) {
                console.log(data)                
                cont++
            
            if (cont === tweetArray.length)
                res.json({success: 1})
            })
        })
}
