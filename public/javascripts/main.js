'use strict';

$(document).ready(init);

function init() {
	$('#addContactLink').click(addContactLink);
	$('form').submit(addName);
}

function addContactLink() {
	console.log('redirect');
	location.replace('/addUserForm');
}

function addName(e) {
	e.preventDefault();
	console.log('ok');
	var name = $('#name').val();
	var tel = $('#tel').val();
	var email = $('#email').val();
	var address = $('#address').val();
	$('form').trigger('reset');
	$.post('./addUserForm/add', {
		name: name,
		tel: tel,
		email: email,
		address: address
	}).success(function(data) {
		console.log('ok');
		location.replace('/');
	})
}