let http = require("http");

let server = http.createServer();

server.on("request", function(req , res){ 

    // créer un serveur un peu plus évolué 
    // en fonction du type de requête, il va répondre différemment 

    // console.log( req.url );
    // res.end(); // page blanche pour l'instant

    // si un client demande l'adresse suivante 
    // http://localhost:4000/ => Page d'accueil 

    if(req.url === "/"){
        res.write("Page d'accueil");
        res.end();
    }

    if(req.url === "/api/articles"){
        // retourner un json => collection 
        let data = [
            { 
                id : 1,
                titre : "article1"
            },
            {
                id : 2,
                titre : "article 2"
            }
        ]; // rappeler le json placeholder 
        res.writeHead( 200 , {"Content-type":"application-json" } );
        res.write( JSON.stringify(data) ) ;
        // [{},{}] => "[{},{}]" JSON.stringify() côté serveur
        // "[{},{}]" => [{},{}] JSON.parse() côté client AJAX 
        res.end();
    }
});

server.listen(4000 , "localhost");
// démarrer le serveur 
// node 07-serveur-avancee.js
// firefox / chrome http://localhost:4000/
// arrêter le serveur Ctrl + C 
// req.url
// cls 
// arrêter le serveur Ctrl + C 

// c ou http://localhost:4000  => /
// http://localhost:4000/article/2 => /article/2
// http://localhost:4000/presentation?page=2 => /presentation?page=2

/*
    créer un nouveau fichier 08-exo.js

    ce fichier contient un serveur Node qui écoute sur le port 3200 à
    l'adresse localhost 

    importer le fichier 04-exo-data.js

    1 si un client appelle l'adresse http://localhost:3200
    // Bienvenu sur l'API 

    2 si un client appelle l'adresse https://localhost:3200/api/json-generator
    retourner le contenu de la variable data 

    3 si un client appelle l'adresse https://localhost:3200/api/json-generator/0
    retourner le 1er item de variable data 

    // rdv dans 1 h => 13h33 bon appétit tout le monde !!! 
    // à toute suite !!  

    // hello hello ?
    // j'espère que votre repas a été excellent !! 
*/ 
