var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
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
  





module.exports = router;
