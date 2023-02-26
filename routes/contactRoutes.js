const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
	res.status(200).json({ message: "getting all contacts" })
})

router.route('/').post((req, res) => {
	res.status(200).json({ message: "adding contact" })
})

router.route('/:id').get((req, res) => {
	res.status(200).json({ message: "getting a contact" })
})

router.route('/:id').put((req, res) => {
	res.status(200).json({ message: "modifying a contact" })
})

router.route('/:id').delete((req, res) => {
	res.status(200).json({ message: "deleting a contact" })
})

module.exports = router