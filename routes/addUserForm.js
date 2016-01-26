var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fs.readFile('./contacts.json', (err, data) => {
		if (err) return res.status(400).send(err);
		var arr = JSON.parse(data);
		res.render('addUserForm', arr);
	});
});

router.post('/add', function(req, res, next) {
	fs.readFile('./contacts.json', (err, data) => {
		if (err) return res.status(400).send(err);
		var arr = JSON.parse(data);
		var name = req.body.name;
		var tel = req.body.tel;
		var email = req.body.email;
		var address = req.body.address;
		arr.push(
			{
				"name": name,
				"tel": tel,
				"email": email,
				"address": address
			}
		);
		fs.writeFile('./contacts.json', JSON.stringify(arr), (err, data) => {
			if (err) return res.status(400).send(err);
			res.send(arr);
		});
	})
})

module.exports = router;