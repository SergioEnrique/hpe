var havenondemand = require('havenondemand')
// var config = require("../../config")
var client = new havenondemand.HODClient("e3fd654c-b8c8-4c49-a20d-c5df558874a4", "v1")

exports.example = function (req, res) {

	var data = {'text' : 'I like cats'}

	client.call('analyzesentiment', data, function(err, resp, body){
		//console.log(resp)
		res.send(JSON.stringify(body))
	})

}