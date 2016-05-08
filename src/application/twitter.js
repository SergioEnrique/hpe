var Twit        = require('twit');
var config      = require('../../config');
// Twitter shit
 var T = new Twit(config.twit);

 exports.tweets =  function getTweets (number, filter, cb){
   
     var stream = T.stream('statuses/filter', { track: filter, language: 'en'});
     var allTweets = [];
     var count = 0;

     stream.on('tweet', function (tweet) {
         allTweets.push(tweet.text);
         console.log(tweet.text)
         count += 1;
         if (count === number){
             stream.stop();
             return cb(allTweets);
         }
     })

 }

exports.tweets2 = function getSearchTweets (number, search, cb){
    T.get('search/tweets', { q: search, count: number }, function(err, data, response) {
        //console.log(data.statuses)
        return cb(data.statuses)
    })
}

exports.reply = function replyUser(user, text, cb){
    T.post('statuses/update', { status: text }, function(err, data, response) {
    return cb({result: 'Exito!'})
})
}
