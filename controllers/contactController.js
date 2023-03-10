const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

const getContacts = asyncHandler(async (req, res) => {
	const contacts = await Contact.find({ user_id: req.user.id })
	res.status(200).json(contacts)
})

const getContact = asyncHandler(async (req, res) => {
	const contact = await Contact.findById(req.params.id)
	if (!contact)
	{
		res.status(404)
		throw new Error('Contact not found!')
	}
	res.status(200).json(contact)
})

const createContact = asyncHandler(async (req, res) => {
	const { name, email, phone } = req.body
	if (!name || !email || !phone)
	{
		res.status(400)
		throw new Error('All fields are mandatory!')
	}
	const contact = Contact.create({user_id: req.user.id, name, email, phone })
	res.status(200).json(contact)
})

const editContact = asyncHandler(async (req, res) => {
	const contact = Contact.findById(req.params.id)
	if (!contact)
	{
		res.status(404)
		throw new Error('contact not found!')
	}
	if (contact.user_id.toString() !== req.user.id)
	{
		res.status(404)
		throw new Error('Permission denied!')
	}
	const newContact = await Contact.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	)
	res.status(200).json(newContact)
})

const deleteContact = asyncHandler(async (req, res) => {
	const contact = Contact.findById(req.params.id)
	if (!contact)
	{
		res.status(404)
		throw new Error('contact not found!')
	}
	if (contact.user_id.toString() !== req.user.id)
	{
		res.status(404)
		throw new Error('Permission denied!')
	}
	await Contact.deleteOne({ _id: req.params.id })
	res.status(200).json(contact)
})

module.exports = { getContacts, getContact, createContact, editContact, deleteContact }