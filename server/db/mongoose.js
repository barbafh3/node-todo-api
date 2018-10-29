var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
		localhost: 'mongodb://localhost:27017/TodoApp',
		mlab: 'mongodb://root:mestre123@ds143953.mlab.com:43953/todoapp'
}
mongoose.connect( db.localhost || db.mlab, { useNewUrlParser: true });

module.exports = {mongoose};
