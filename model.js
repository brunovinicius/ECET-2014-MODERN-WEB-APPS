var Author = function (id, name) {
	this.id = id;
	this.name = name;
};

var Post = function (id, text, author) {
	this.id = id;
	this.text = text;
	this.author = author;
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports.Author = Author;
	module.exports.Post = Post;
}
