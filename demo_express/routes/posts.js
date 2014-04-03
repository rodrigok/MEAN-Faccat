
/*
 * GET post listing.
 */

exports.list = function(req, res){
	var posts = [];

	for (var i = 0; i < 10; i++) {
		posts.push({title: 'Primeiro Post com Epress', content: 'Express!!!'});
	};
	
	res.send(posts);
};