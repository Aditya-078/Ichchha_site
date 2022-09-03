const mongoose = require('mongoose')
const schemaToLoad = mongoose.Schema

const imagesSchema = new mongoose.Schema({
	name: {
		type: String
	},
	phoneNo: {
		type: Number
	},
	// email: {
	// 	type: email
	// },
	location:{
		type: String
	},
	requirement:{
		type: String
	}
})

module.exports = mongoose.model('imagesSchema', imagesSchema)