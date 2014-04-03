var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-faccat');

var Post = mongoose.model('Post', {
	title: String,
	content: String
});

module.exports = {
	Post: Post,
	mongoose: mongoose
}