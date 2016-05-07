var havenondemand = require('havenondemand')
var config = require("../../config")
var client = new havenondemand.HODClient(config.heavenapikey, "v1")

exports.analyze = function (text, callback) {

	var data = {'text' : text}

	client.call('analyzesentiment', data, function(err, resp, body){
		if (err) throw err
		//console.log(resp)
		callback(body)
	})

}