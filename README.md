# Test technique pour Clac des doigts

![consigne](img)

Pour ce test technique j'ai choisis MongoDB pour la base de donnée.

Voici les différentes routes de l'API :

1) Récupérer tous les poulets => GET http://localhost:8000/chickens
2) Ajouter un poulet => POST http://localhost:8000/chickens
3) Récupérer les informations d'un poulet avec son ID => GET http://localhost:8000/chickens/:id
4) Modifier les informations d'un poulet avec son ID => PUT http://localhost:8000/chickens/:id
5) Supprimer un poulet avec son ID = DELETE http://localhost:8000/chickens/:id
6) Faire avancer un poulet avec son ID et un query params "steps" => POST http://localhost:8000/chickens/run/:id?steps=number

Au lieu de faire avancer le poulet de 1 steps, j'ai préféré pouvoir choisir le nombre de pas qu'on souhaite.

Installation : 

1) git clone git@github.com:nerfic/cdd-test-technique.git
2) cd cdd-test-technique && npm install
3) cd ./models/ && node fixtures.js
4) cd ../ && node index.js