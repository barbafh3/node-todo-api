var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
var db = {
		localhost: 'mongodb://localhost:27017/TodoApp',
		mlab: process.env.MONGODB_URI
}
mongoose.connect( db.localhost || db.mlab, { useNewUrlParser: true })
		.then(() => {
    		console.log("CONNECTED TO DATABASE")
		},(e)=>{
        	console.log(e);
		});

module.exports = {mongoose};
