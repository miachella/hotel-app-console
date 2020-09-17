var request = require('request');

function listerClients(callbackOK, callbackKO) {
    request('http://localhost:8080/clients?start=0&size=10', { json: true }, function(err, res, body) {
        if (err) { callbackKO(err); }
        else { callbackOK(body);}
});
}

function ajouterClient(saisieNom, saisiePrenom, callbackOK, callbackKO) {
    request.post({
        url:     'http://localhost:8080/clients',
        method: 'POST',
        json: {nom: `${saisieNom}`, prenoms: `${saisiePrenom}`}
      }, function(err, res, body){
        if (err) { callbackKO(err); }
        else { callbackOK(body);}
      });
}


exports.listerClients = listerClients;
exports.ajouterClient = ajouterClient;
