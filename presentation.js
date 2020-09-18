const readline = require('readline');
const service = require("./service.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

function start() {
    console.log(`
    1. Lister les clients
    2. Ajouter un client
    3. Rechercher un client par nom
    4. Vérifier la disponibilité d'une chambre
    99. Sortir`);
    
    rl.question('Votre choix : ', saisie => {
        switch (saisie){
            case '1':
                console.log('>> Liste des clients');
                service.listerClients(listerClients => {
                    console.log(listerClients.map(client => `${client.nom} ${client.prenoms}`).join('\n'));
                    console.log('\n');
                    start();
                }, err => {
                    console.log('La liste des clients n\'est pas accessible.');
                    start();
                })
                break;
            case '2' :
                console.log('>> Ajout d\'un nouveau client')
    rl.question('Saisissez le nom du nouveau client : ', saisieNom => {
        rl.question('Saisissez le prénom du nouveau client : ', saisiePrenom => {
            service.ajouterClient(saisieNom, saisiePrenom, ajouterClient => {
                console.log(`${saisieNom} ${saisiePrenom} a correctement été ajouté(e) à la base.`);
                start();
            }, err => {
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

