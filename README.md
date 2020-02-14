# EDC - 02 - Création d'un panier

## Présentation de l'application.
Application qui permet de rechercher un film via la barre de recherche, voir sa bande annonce, sa description et l'ajouter à un panier.
Le prix est généré de manière aléatoire aléatoirement.
L'application fait également remonter une liste de film populaire à son initialisation.

## Librairies utilisées
**React** - Organisation en composant
**Emotion** - Styliser les composants - https://emotion.sh
**Typehead** - Faciliter l'intégration de l'autocomplétion dans la barre de recherche
**Axios** - Interroger une A.P.I.

## Organisation du code
**Dossier** / fichier *.eslintrc* fichier de configuration de l'extension Eslint
**Dossier** *build* - Application déployée sur le serveur (npm run build)
**Dossier** *public* - Index.html point d'entré de l'application
**Dossier** *src* - Code global de l'application
**Dossier** *src/class* - Contient la partie aplicative de l'application, contient seulement la class Basket qui gère  méthodes pour ajouter, supprimer.... des éléments au panier. En cours : déporter la connexion à l'API et la récupération de film dans cette partie
**Dossier** *src/components/containers* - Contient les composants React de l'application, le dossier containers contient les composants parents (Header, Videolist....)
**Dossier** *src/styles* - Contient toute la partie style de l'application, à la racine un fichier Global.js (composant Emotion) qui contient, un reset css, mes helpers... (ex. une classe d-none, qui permet de masquer les éléments display:none;). Fichier theme.js va gérer les couleurs, les polices de mon application sous forme d'un objet javascript (ex : theme.color.primary).
**Dossier** *src/styles/components* - Contient les styles de mes composants, les fichiers sont nommés styles+ le nom du composant auquel ils sont rattachés.
**Dossier** *src/styles/containers* - idem
**Dossier** *src/utils/* 
* Fonctions javascript génériques - 
    * getRandom : génère un nombre aléatoire. 
    * isEmpty : test si un object est vide.
