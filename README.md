# EDC - 02 - Création d'un panier

## DEMO

https://kovsky.netlify.com/
Application hébergée sur https://netlify.com synchronisée avec la branche master de ce dépôt.

## Présentation de l'application.

Application qui permet de rechercher un film via la barre de recherche, voir sa bande annonce, sa description et l'ajouter à un panier.
Le prix est généré de manière aléatoire.
L'application fait également remonter une liste de film populaire à son initialisation.

## Installation.

Après avoir téléchargé/cloné le dépôt
_npm install_
_npm start_

## API

The movie DB https://www.themoviedb.org/documentation/api?language=fr

## Librairies utilisées

**React** - https://fr.reactjs.org/

**Emotion** - Styliser les composants - https://emotion.sh

**Typehead** - Faciliter l'intégration de l'autocomplétion dans la barre de recherche https://www.npmjs.com/package/typeahead

**Axios** - Interroger une A.P.I. https://github.com/axios/axios

**use-persisted-state** - Persistance des states dans le local storage (sauvegarde du panier à la fermeture de l'application) https://github.com/donavon/use-persisted-state

## Structure des fichiers/dossiers

**Dossier** / fichier _.eslintrc_ fichier de configuration Eslint. https://eslint.org/

**Dossier** _build_ - Application déployée sur le serveur (npm run build).

**Dossier** _public_ - Index.html point d'entré de l'application.

**Dossier** _src_ - Code global de l'application.

**Dossier** _src/class_ - Contient la partie aplicative de l'application.

- Basket.js : Gère tous les éléments du panier (ajout, suppression, montant total etc...)
- Movies.js : Gère tout ce qui concerne la récupération de film

**Dossier** _src/components/containers_ - Contient les composants React de l'application, le dossier containers contient les composants parents (Header, Videolist....)

**Dossier** _src/styles_ - Contient toute la partie style de l'application, à la racine un fichier Global.js (composant Emotion) qui contient, un reset css, mes helpers... (ex. une classe d-none, qui permet de masquer les éléments display:none;). Fichier theme.js va gérer les couleurs, les polices de mon application sous forme d'un objet javascript (ex : theme.color.primary).

**Dossier** _src/styles/components_ - Contient les styles de mes composants, les fichiers sont nommés styles+ le nom du composant auquel ils sont rattachés.

**Dossier** _src/styles/containers_ - idem

**Dossier** _src/utils/_
Contient des fonctions javascript génériques :

- getRandom : génère un nombre aléatoire.
- isEmpty : test si un object est vide.

Contient également un fichier _const.js_ avec toutes les variables en dur de l'application.
