var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true })
		.then(() => {
    		console.log("CONNECTED TO DATABASE")
		},(e)=>{
        	console.log(e);
		});

module.exports = {mongoose};
