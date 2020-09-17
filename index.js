var presentation = require('./presentation');

function afficherMenu() {
    console.log('** Administration Hotel **');
    presentation.demarrer();
}
    afficherMenu();
    var readline = require('readline');
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
        });
    rl.question('Votre choix : ', function(saisie) {
        

        if (saisie == '1'){
            console.log('>> Liste des clients');
            rl.close();
        } else if (saisie == '99') {
            console.log('Au revoir !');
            rl.close();
        } else {
            console.log('La saisie n\'est pas bonne');
        }
    })


