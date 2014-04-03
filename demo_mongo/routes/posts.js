
/*
 * GET post listing.
 */

var models = require('../connect');

exports.list = function(req, res){
	models.Post.find(function(err, docs) {
		res.send(docs);
	});
};


exports.create = function(req, res){
	var newPost = new models.Post(req.body);
	
	newPost.save(function(err, doc) {
		res.send(doc);
	});
};


exports.update = function(req, res){
	var id = req.body._id;

	delete req.body._id;

	models.Post.findByIdAndUpdate(id, req.body, function(err, doc) {
		res.send(doc);
	});
};


exports.remove = function(req, res){
	var id = req.params.id;

	models.Post.findByIdAndRemove(id, function(err, doc) {
		res.send({success: true});
	});
};