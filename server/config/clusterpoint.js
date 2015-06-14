var cps = require('cps-api');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./config')[env];



var cpsConn = new cps.Connection(  'tcp://cloud-us-0.clusterpoint.com:9007',  'Angelhack',     config.clustername,    config.clusterpass, 'document', 'document/id', {account: 100502});

console.log('clusterpoint connected');

//req retrieve
exports.request = function(id) {
    var retr_req = new cps.RetrieveRequest(id);
    cpsConn.sendRequest(retr_req, function (err, retr_resp) {
        if (err) return console.error(err); // Handle error
        console.log(retr_resp);
    });
};
    //Search ordering params
exports.search = function(searchterm, usercount) {
    var search_req = new cps.SearchRequest(searchterm);
    cpsConn.sendRequest(search_req, function (err, search_resp) {
        if (err) return console.error(err); // Handle error
        console.log(search_resp);
    });
};

//insert
exports.insert = function(listitem,res) {
    listitem.id = Date.now();
    var insert_request = new cps.InsertRequest(listitem);
    cpsConn.sendRequest(insert_request, function (err, insert_response) {
        if (err) return console.error(err);
        console.log('New user registered: ' + insert_response.document.id);
        res.send(insert_response.document.id)
    });
};
//update
exports.update = function() {
    var name = "Username Updated";
    var update_request = new cps.UpdateRequest('<document><id>1</id>' + cps.Term(name, "name") + '</document>');
    cpsConn.sendRequest(update_request, function (err, update_response) {
        if (err) return console.error(err);
    });
};

exports.retrieve = function() {
    var retrieve_req = new cps.RetrieveRequest('1434268315411');
    cpsConn.sendRequest(retrieve_req, function (err, retrieve_resp) {
        if (err) return console.log(err);
        if (retrieve_resp) {
            console.log(retrieve_resp.results.document[0].listitem);
        }
    }, 'json');
};