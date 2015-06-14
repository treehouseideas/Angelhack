var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');



module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3030,
        clustername: 'mr.wayneteng@gmail.com',
        clusterpass: 'asdfgf'
    },
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80,
        clustername: 'mr.wayneteng@gmail.com',
        clusterpass: 'asdfgf'
    }
};
