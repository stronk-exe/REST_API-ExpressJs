const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')

const getContacts = asyncHandler(async (req, res) => {
	const contacts = await Contact.find()
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
	// res.status(200).json({ message: `Get all contact: ${req.params.id}` })
})

const createContact = asyncHandler(async (req, res) => {
	// console.log(req.body.name)
	const { name, email, phone } = req.body
	if (!name || !email || !phone)
	{
		res.status(400)
		throw new Error('All fields are mandatory!')
	}
	const contact = Contact.create({ name, email, phone })
	res.status(200).json(contact)
	// res.status(200).json({ message: `Creating a new contact` })
})

const editContact = asyncHandler(async (req, res) => {
	const contact = Contact.findById(req.params.id)
	if (!contact)
	{
		res.status(404)
		throw new Error('contact not found!')
	}
	const newContact = await Contact.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	)
	res.status(200).json(newContact)
	// res.status(200).json({ message: `Editing a contact: ${req.params.id}` })
})

const deleteContact = asyncHandler(async (req, res) => {
	const contact = Contact.findById(req.params.id)
	if (!contact)
	{
		res.status(404)
		throw new Error('contact not found!')
	}
	await Contact.remove()
	res.status(200).json(contact)
	// res.status(200).json({ message: `Deleting a contact: ${req.params.id}` })
})

module.exports = { getContacts, getContact, createContact, editContact, deleteContact }