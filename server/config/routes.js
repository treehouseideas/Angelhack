var clusterpoint = require('./clusterpoint');

module.exports = function(app){


    app.get('/partials/*', function(req,res){
        res.render('../../public/views/' + req.params[0])
    });
    app.put('/api/:email/:firstname/:lastname', clusterpoint.insert);

    app.all('/api/*', function(req, res){
        res.send(404)
    });

    app.get('*', function(req,res){
        res.render('index', {
        });
    });
};