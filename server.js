var express = require('express');
var bodyParser = require('body-parser')
var model = require('./model');

var Author = model.Author;
var Post = model.Post;

var id_sequence = 1;
var authors = [
	new Author(id_sequence++, 'Bruno'),
	new Author(id_sequence++, 'Fillipe'),
];

var posts = [
	new Post(id_sequence++, 'Mussum ipsum cacilds, vidis litro abertis', authors[0]),
	new Post(id_sequence++, 'Consetis adipiscings elitis.', authors[1]),
	new Post(id_sequence++, 'Pra lá , depois divoltis porris, paradis', authors[0]),
	new Post(id_sequence++, 'Paisis, filhis, espiritis santis', authors[1]),
	new Post(id_sequence++, 'Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo', authors[0]),
	new Post(id_sequence++, 'Manduma pindureta quium dia nois paga', authors[1]),
	new Post(id_sequence++, 'Cacilds! ¬¬"', authors[0]),
];

var app = express();

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // to support URL-encoded bodies
app.use(express.static(__dirname));

app.get('/api/posts', function(req, res) {
	res.send(posts);
});

app.post('/api/posts', function(req, res) {
	var rawPost = req.body.post;
	var post = new Post(id_sequence++, rawPost.text, new Author(rawPost.author.id, rawPost.author.name));
	posts.push(post);
	res.send(post);
});

app.get('/api/authors', function(req, res) {
	res.send(authors);
});

app.post('/api/authors', function(req, res) {
	var username = req.body.username;
	var author = new Author(id_sequence++, username);
	authors.push(author);
	res.send(author);
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d...', server.address().port);
});
