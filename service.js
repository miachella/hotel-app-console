const request = require('request');

class Service {

static listerClients(callbackOK, callbackKO) {

  return new Promise((resolve, reject) => {

    request('http://localhost:8080/clients?start=0&size=10', { json: true }, (err, res, body) => {
        if (err) { reject(err); }
        else { resolve(body);}
  });
  });
}


static ajouterClient(saisieNom, saisiePrenom, callbackOK, callbackKO) {

  return new Promise((resolve, reject) => {
    request.post({
        url:     'http://localhost:8080/clients',
        method: 'POST',
        json: {nom: `${saisieNom}`, prenoms: `${saisiePrenom}`}
      }, (err, res, body) => {
        if (err) { reject(err); }
        else { resolve(body);}
      });
    });
}

}


exports.Service = Service;