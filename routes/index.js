var express = require('express');
var router = express.Router();
var fs = require('fs');
var find = require('lodash-node/compat/collection/find');

router.get('/', function(req, res, next) {
	fs.readFile('./contacts.json', (err, data) => {
		if (err) return res.status(400).send(err);
		var arr = JSON.parse(data);
		console.log(arr);
		res.render('index', 
		  	{ arr: arr }
	  	);
	});
});
  
router.get('/moreInfo/:email', function(req, res, next) {
	var email = req.params.email;
	fs.readFile('./contacts.json', function(err, data) {
		if (err) return res.status(400).send(err);
		var arr = JSON.parse(data);
		var selected = find(arr, {"email": email});
		res.render('moreInfo',
			{ selected: selected }
		);
	});
});

module.exports = router;