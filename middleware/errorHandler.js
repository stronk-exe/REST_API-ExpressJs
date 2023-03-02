const { constants } = require('../constants')

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode ? res.statusCode : 500
	switch (statusCode) {
		case constants.VALIDATION_ERROR:
			res.json({ title:'Validation failed', message: err.message, stackTrace: err.stack })
		case constants.UNAUTHORIZED:
			res.json({ title:'Unautorized', message: err.message, stackTrace: err.stack })
		case constants.FORBIDDEN:
			res.json({ title:'Forbidden', message: err.message, stackTrace: err.stack })
		case constants.NOT_FOUND:
			res.json({ title:'Not found', message: err.message, stackTrace: err.stack })
		default:
			console.log('all good!')
			break
	}
}

module.exports = errorHandler