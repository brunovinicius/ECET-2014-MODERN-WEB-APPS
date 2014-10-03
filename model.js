var Author = function (id, name) {
	var self = this;

	self.id = id;
	self.name = name;
};

var Post = function (author, text) {
	var self = this;

	self.author = author;
	self.text = text;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports.Author = Author;
	module.exports.Post = Post;
}
