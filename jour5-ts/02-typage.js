// 02-typage.ts
// spéficifique (l'ajout de typescript)
let a = "bonjour"; // on type la variable a 
// a = 2; si vous réalisez l'instruction suivante => erreur est levée 
let b = 1234;
let c = 20 > 10;
let e; // n'importe quelle type 
// pour une fonction qui retourne un chiffre 
function calcul(param1, param2) {
    return param1 + param2;
}
function attention() {
    console.log("Attention !!!");
}
let autreFonction = (a) => {
    console.log("autre fonction");
};
export {};
// tsc 02-typage.ts => version ES3
// tsc  02-typage.ts --target es6
// tsc  02-typage.ts --target es6 -w
// mode watch
// dans le dossier jour5-ts
// créer un nouveau fichier 03-exo.ts
// créer plusieurs variables 
// a = "Bonjour"
// b = 2 
// fonction aireCercle( rayon ){}
// retourne le résultat du calcul suivante
// PI x rayon x rayon 
// utiliser la fonction   aireCercle( rayon )
// pour a et pour b 
// convertir le fichier 03-exo.ts => 
// 03-exo.js (version6)
// executer le fichier 03-exo.js avec node
// pause dans 15 min 
// commencer l'exo à toute suite !!
// pour éviter l'erreur de variable dupliquée
// export {} => laisse jusqu'à 15h51 et corrigé !
