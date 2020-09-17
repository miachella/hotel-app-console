var readline = require('readline');
var service = require("./service.js");



function start() {
    console.log('1. Lister les clients \n99. Sortir');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    rl.question('Votre choix : ', function(saisie) {
        switch (saisie){
            case '1':
                console.log('>> Liste des clients');
                service.listerClients(function(listerClients){
                    console.log(listerClients.map(function (client) {
                        return client.nom + ' ' + client.prenoms
                    }).join('\n'));
                })
                start();
                break;
            case '99':
                console.log('Au revoir !');
                rl.close();
                break;
            default :
                console.log('La saisie n\'est pas bonne');
                start();
        }
    })
}
exports.demarrer = start;

