var clusterpoint = require('./clusterpoint');

module.exports = function(app){


    app.get('/partials/*', function(req,res){
        res.render('../../public/views/' + req.params[0])
    });
    app.get('/api/*', clusterpoint.search);


    app.get('*', function(req,res){
        res.render('index', {
        });
    });
};