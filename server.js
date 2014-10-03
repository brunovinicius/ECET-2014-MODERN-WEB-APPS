var model = require('./model');
var Author = model.Author;
var Post = model.Post;


var authors = [
	new Author(1, 'Bruno'),
	new Author(2, 'Fillipe'),
];

var posts = [
	new Post(authors[0], 'Isso é um tweeet...'),
	new Post(authors[1], 'Que b**** de tweet...'),
	new Post(authors[0], 'É MENTIRAAAA!'),
	new Post(authors[1], '@_@'),
	new Post(authors[0], '.|.'),
	new Post(authors[1], 'Genteeee...'),
	new Post(authors[0], '¬¬"'),
];

var express = require('express');
var app = express();

app.use(express.static(__dirname));

app.get('/api/posts', function(req, res) {
  res.send(posts)
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d...', server.address().port);
});
