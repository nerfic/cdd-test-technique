# Test technique pour Clac des doigts

![consigne](https://github.com/nerfic/cdd-test-technique/blob/main/img/consigne.PNG?raw=true)

### Pour ce test technique j'ai choisis MongoDB pour la base de donnée.

Voici les différentes routes de l'API :

1) Récupérer tous les poulets => GET http://localhost:8000/chicken
2) Ajouter un poulet => POST http://localhost:8000/chicken

| Champs | Type | Obligatoire |
| --------------- | --------------- | --------------- |
| name | String | Oui |
| birthday | Date | Non |
| weight | Number | Oui |

3) Récupérer les informations d'un poulet avec son ID => GET http://localhost:8000/chicken/:id
4) Modifier les informations d'un poulet avec son ID => PUT http://localhost:8000/chicken/:id
5) Supprimer un poulet avec son ID = DELETE http://localhost:8000/chicken/:id
6) Faire avancer un poulet d'un pas avec son ID => POST http://localhost:8000/chicken/run/:id
6) Faire avancer un poulet avec un nombre de pas choisi avec son ID et un query params "steps" => POST http://localhost:8000/chicken/run/:id?steps=number

### Mes ajouts : 

* Ajout d'un script pour l'installation
* Au lieu de seulement faire avancer le poulet de 1 steps, j'ai préféré rajouté la possibilité choisir le nombre de pas qu'on souhaite.
* Ajout d'un fichier fixtures.js pour avoir déjà des poulets dans la base de donnée

### Installation : 

1) git clone git@github.com:nerfic/cdd-test-technique.git
2) cd cdd-test-technique
3) sh install.sh // Sert à installer les packages npm et les fixtures
4) node index.js