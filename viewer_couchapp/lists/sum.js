function(head, req) {
    var row, out, sum = 0, sep = '\n';

    // Send the same Content-Type as CouchDB would
    if (req.headers.Accept.indexOf('application/json')!=-1)
      start({"headers":{"Content-Type" : "application/json"}});
    else
      start({"headers":{"Content-Type" : "text/plain"}});

    if ('callback' in req.query) send(req.query['callback'] + "(");

    
    while (row = getRow()) {
        sum += parseFloat(row.value);
    }
    
    out = JSON.stringify(sum);
    send(out);
    
    if ('callback' in req.query) send(")");
    
};
