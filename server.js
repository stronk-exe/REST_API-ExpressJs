const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./middleware/errorHandler')
const connectDB = require('./config/dbConnection')
const app = express()

app.use(express.json())
app.use('/', require('./routes/contactRoutes'))
app.use('/', require('./routes/userRoutes'))
app.use(errorHandler)

connectDB()

const port = process.env.PORT || 3000
app.listen(port, () => {
	console.log(`listining on port ${port}...`)
})