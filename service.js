var request = require('request');

function listerClients(callbackOK, callbackKO) {
    request('http://localhost:8080/clients?start=0&size=3', { json: true }, function(err, res, body) {
        if (err) { callbackKO(err); }
        else { callbackOK(body);}
});
}

exports.listerClients = listerClients;
