var restify = require('restify');
var fs = require('fs');

var port = process.env.PORT || 3000;

var controllers = {};
var controllers_path = process.cwd() + '/app/controllers';

fs.readdirSync(controllers_path).forEach(function (file) {
    if (file.indexOf('.js') != -1) {
        controllers[file.split('.')[0]] = require(controllers_path + '/' + file);
    }
});

var server = restify.createServer();

server
.use(restify.fullResponse())
.use(restify.bodyParser());

// Article Routes
server.post('/articles', controllers.article.createArticle);
server.put('/articles/:id', controllers.article.updateArticle);
server.del('/articles/:id', controllers.article.deleteArticle);
server.get({path: '/articles/:id', version: '1.0.0'}, controllers.article.viewArticle);
server.get({path: '/articles/:id', version: '2.0.0'}, controllers.article.viewArticle_v2);

// This is comment operations referenced in article
server.put('/articles/:id/comments', controllers.article.createArticleComment);

// Comment Start
server.put('/comments/:id', controllers.comment.updateComment);
server.del('/comments/:id', controllers.comment.deleteComment);
server.get('/comments/:id', controllers.comment.viewComment);


server.listen(port, function (err) {
    if (err){
        console.error(err);
    }
    else{
        console.log('API ready at : %d', port);
    }
});

if (process.env.environment == 'production') {
    process.on('uncaughtException', function (err) {
        console.error(JSON.parse(JSON.stringify(err, ['stack', 'message', 'inner'], 2)));
    });
}