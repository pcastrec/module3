```
@startuml
title Exercice 1 - Animaux

abstract class Animal {
  # nom : String
  # age : int
  + Animal(nom : String, age : int)
  + getNom() : String
  + {abstract} crier() : String
  + seDeplacer() : String
  + toString() : String
}

class Chien {
  - race : String
  + Chien(nom : String, age : int, race : String)
  + crier() : String
  + rapporterBalle() : String
}

class Chat {
  - estInterieur : boolean
  + Chat(nom : String, age : int, estInterieur : boolean)
  + crier() : String
}

class Oiseau {
  - envergure : double
  + Oiseau(nom : String, age : int, envergure : double)
  + crier() : String
  + seDeplacer() : String
}

Animal <|-- Chien
Animal <|-- Chat
Animal <|-- Oiseau
@enduml
```

Travail demandé

- Implémenter les 4 classes.
- seDeplacer() renvoie « marche » par défaut ; Oiseau la redéfinit pour renvoyer « vole ».
- Dans un main, créer une liste d'Animal contenant au moins un objet de chaque type, puis la parcourir en appelant crier() et seDeplacer().
- Question :
* * pourquoi ne peut-on pas écrire new Animal(...) ?
* * Pourquoi peut-on appeler rapporterBalle() sur un Chien mais pas sur un Animal ?