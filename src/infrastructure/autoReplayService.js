var twitter = require('../application/twitter')

exports.reply = function (req, res) {
    var tweetArray = ['kendalliguori','WRNC_Live' ]
        var text = "I freaking love coffee"
        var cont = 0
        tweetArray.forEach(function(username){
            twitter.reply(username,'@' + username + text, function(data) {
                console.log(data)                
                cont++
            
            if (cont === tweetArray.length)
                res.json({success: 1})
            })
        })
}
