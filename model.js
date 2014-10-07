var Author = function (id, name) {
	var self = this;

	self.id = id;
	self.name = name;
};

var Post = function (id, text, author) {
	var self = this;
	
	self.id = id;
	self.text = text;
	self.author = author;
	self.createdAt = new Date();
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports.Author = Author;
	module.exports.Post = Post;
}
