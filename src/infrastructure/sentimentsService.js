var havenondemand = require('havenondemand')
var config = require("../../config")
var client = new havenondemand.HODClient(config.heavenapikey, "v1")

exports.example = function (req, res) {

	var data = {'text' : 'I love your mom'}

	client.call('analyzesentiment', data, function(err, resp, body){
		//console.log(resp)
		res.send(JSON.stringify(body))
	})

}