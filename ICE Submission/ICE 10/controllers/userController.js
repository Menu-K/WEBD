const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

require('../model/User');
const User = mongoose.model('User');

// home view get
const homeView = (req, res) => {
	const pageTitle = 'Home';
	res.render('home', {
		pageTitle: pageTitle,
	});
};

const formView = (req, res) => {
	const pageTitle = 'Registration Form';
	res.render('form', {
		pageTitle: pageTitle,
	});
};

const formSubmission = (req, res) => {
	console.log(req.body);
	const { fullName, email, password, confirm } = req.body;

	if (password != confirm) {
		console.log('Passwords must match!');
	} else {
		User.findOne({ email: email }).then((user) => {
			if (user) {
				console.log('Found User! Email already exists.');
				pageTitle = 'Already Registered';
				message = 'You already are registered';
				res.render('form-submission', {
					pageTitle: pageTitle,
					alreadyRegistered: true,
					message: message,
				});
			} else {
				const newUser = new User({
					fullName,
					email,
					password,
				});
				bcrypt.genSalt(10, (err, salt) => 
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;

						newUser.password = hash;
						newUser
							.save()
							.then(() => {
								pageTitle = 'Form Submission Page';
								registeredMessage = 'You are now registered';
								res.render('form-submission', {
                                    pageTitle: pageTitle,
                                    alreadyRegistered: false,
									registeredMessage: registeredMessage
								});
							})
							.catch((err) => console.log(err));
					})
				);
			}
		});
	}
};
module.exports = {
	homeView,
	formView,
	formSubmission,
};
