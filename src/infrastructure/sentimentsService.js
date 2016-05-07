var sentiments = require('../application/sentiments')

exports.example = function (req, res) {

	var text = 'I love a blue car'

	sentiments.analyze(text, function(data){
		res.send(JSON.stringify(data))
	})

}