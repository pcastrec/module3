```
@startuml
title Exercice 2 - Voiture

class Voiture {
  - immatriculation : String
  + Voiture(immatriculation : String, puissance : int)
  + demarrer() : String
  + setConducteur(c : Conducteur) : void
  + afficher() : String
}

class Moteur {
  - puissance : int
  - enMarche : boolean
  + Moteur(puissance : int)
  + demarrer() : void
  + estEnMarche() : boolean
}

class Roue {
  - pression : double
  + Roue()
  + gonfler(valeur : double) : void
}

class Conducteur {
  - nom : String
  - numeroPermis : String
  + Conducteur(nom : String, numeroPermis : String)
}

Voiture *-- "1" Moteur : possède >
Voiture *-- "4" Roue : possède >
Voiture o-- "0..1" Conducteur : est conduite par >
@enduml
```

Travail demandé

- Le Moteur et les 4 Roue doivent être créés dans le constructeur de Voiture (composition : ils naissent et meurent avec elle).
- Le Conducteur est créé à l'extérieur et passé via setConducteur (agrégation : il existe indépendamment).
demarrer() refuse de démarrer s'il n'y a pas de conducteur.
- Question :
* * si on supprime la voiture, que deviennent le moteur ? le conducteur ?
* * Expliquez la différence entre le losange plein et le losange vide.
(Losange plein: Composition)
(Losange vide: Aggregation)