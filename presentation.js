const readline = require('readline');
const {Service} = require("./service.js");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

class Presentation {

    constructor(){
        this.service = new Service();
    }
    
    start() {
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
                    const listeClients$ = this.service.listerClients();
                    listeClients$
                        .then(clients => {console.log(clients.map(client => `${client.nom} ${client.prenoms}`).join('\n'));
                                console.log('\n');}
                        )
                        .catch(err => console.log('La liste des clients n\'est pas accessible.'))
                        .finally(() => start());
                    break;
                case '2' :
                    console.log('>> Ajout d\'un nouveau client')
                    const ajoutClient$ = this.service.ajouterClient();
                    rl.question('Saisissez le nom du nouveau client : ', saisieNom => {
                        rl.question('Saisissez le prénom du nouveau client : ', saisiePrenom => {
                            ajoutClient$
                                .then(console.log(`${saisieNom} ${saisiePrenom} a correctement été ajouté(e) à la base.`))
                                .catch(err => console.log('Le client n\'a pas été ajouté à la base.'))
                                .finally(() => start());
                        })});
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
}


exports.Presentation = Presentation;

