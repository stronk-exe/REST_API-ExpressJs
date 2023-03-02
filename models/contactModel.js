const mongoose = require('mongoose')

const contactModel = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'add the contact name']
	},
	email: {
		type: String,
		required: [true, 'add the contact email']
	},
	phone: {
		type: Number,
		required: [true, 'add the contact number']
	}
	},
	{
		timestamps: true
	}
)

module.exports = mongoose.model('Contact', contactModel)