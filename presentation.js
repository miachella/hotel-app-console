var readline = require('readline');
var service = require("./service.js");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

function start() {
    console.log('1. Lister les clients \n2. Ajouter un client \n3. Rechercher un client par nom \n4. Vérifier la disponibilité d\'une chambre \n99. Sortir');
    
    rl.question('Votre choix : ', function(saisie) {
        switch (saisie){
            case '1':
                console.log('>> Liste des clients');
                service.listerClients(function(listerClients){
                    console.log(listerClients.map(function (client) {
                        return client.nom + ' ' + client.prenoms
                    }).join('\n'));
                    console.log('\n');
                    start();
                }, function (err) {
                    console.log('La liste des clients n\'est pas accessible.');
                    start();
                })
                break;
            case '2' :
                console.log('>> Ajout d\'un nouveau client')
    rl.question('Saisissez le nom du nouveau client : ', function(saisieNom){
        rl.question('Saisissez le prénom du nouveau client : ', function(saisiePrenom){
            service.ajouterClient(saisieNom, saisiePrenom, function(ajouterClient){
                console.log(saisieNom + ' ' + saisiePrenom + ' a correctement été ajouté(e) à la base.')
                start();
            }, function (err) {
                console.log('Le client n\'a pas été ajouté à la base.');
                start();
            });
            
        })
    })
                break;
            case '3' :
                console.log('Cette fonction n\'est pas encore disponible, merci de revenir ultérieurement')
                start();
                break;
            case '4' :
                console.log('Cette fonction n\'est pas encore disponible, merci de revenir ultérieurement')
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

