var cps = require('../../node_modules/cps-api');


var conn = new cps.Connection('tcp://cloud-us-0.clusterpoint.com:9007', 'Angelhack', 'mr.wayneteng@gmail.com', 'admin', 'document', 'document/id', {account: 100502});



module.exports= function() {
    var retr_req = new cps.RetrieveRequest("id1");
    conn.sendRequest(retr_req, function (err, retr_resp) {
        if (err) return console.error(err); // Handle error
        console.log(retr_resp);
    });

    //// Search query
    //// query = "{<xpath1>$term$</xpath1><xpath2>term2</xpath2}";
    //query = "{" + cps.Term("$term$", "xpath1") + cps.Term("term2", "xpath2") + "}";
    //
    //// query = "{<xpath1><subxpath1>term1</subxpath1></xpath1><xpath2>term2</xpath2}";
    //    query = "{" + cps.Term("term1", "xpath1/subxpath1") + cps.Term("term2", "xpath2") + "}";
    //
    //// query = "{<xpath1>\$term\$</xpath1><xpath2>term2</xpath2}";
    //    query = "{" + cps.QueryTerm("$term$", "xpath1") + cps.Term("term2", "xpath2") + "}";
    //
    //// query = "<xpath1>&gt;5</xpath1>";
    //    query = cps.Term(">5", "xpath1");
    //
    ////Search ordering params
    //var search_req = new cps.SearchRequest("query");
    //search_req.setOrdering([cps.NumericOrdering("user_count", "desc"), cps.RelevanceOrdering()]);
    //conn.sendRequest(search_req, function (err, search_resp) {
    //    if (err) return console.error(err); // Handle error
    //    console.log(search_resp);
    //});

};