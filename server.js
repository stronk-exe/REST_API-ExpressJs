const express = require('express')
const dotenv = require('dotenv').config()
const app = express()

app.use('/api/contacts', require('./routes/contactRoutes'))

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`listining on port ${port}...`)
})