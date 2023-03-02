const mongoos = require('mongoose')

const connectDb = async () => {
	try {
		const connect = await mongoos.connect(process.env.CONNECTION_STRING)
		console.log('database connected', connect.connection.host, connect.connection.name)
	}
	catch (err) {
		console.log(err)
		process.exit(1)
	}
}

module.exports = connectDb