```
@startuml
title Exercice 3 - Dessin

class Point {
  - x : double
  - y : double
  + Point(x : double, y : double)
  + distance(autre : Point) : double
  + translater(dx : double, dy : double) : void
}

abstract class Forme {
  # couleur : String
  + Forme(couleur : String)
  + {abstract} aire() : double
  + {abstract} perimetre() : double
  + {abstract} translater(dx : double, dy : double) : void
  + decrire() : String
}

class Cercle {
  - rayon : double
  + Cercle(couleur : String, cx : double, cy : double, rayon : double)
  + aire() : double
  + perimetre() : double
  + translater(dx : double, dy : double) : void
}

class Rectangle {
  # largeur : double
  # hauteur : double
  + Rectangle(couleur : String, x : double, y : double, largeur : double, hauteur : double)
  + aire() : double
  + perimetre() : double
  + translater(dx : double, dy : double) : void
}

class Carre {
  + Carre(couleur : String, x : double, y : double, cote : double)
}

class Dessin {
  - titre : String
  + Dessin(titre : String)
  + ajouter(f : Forme) : void
  + aireTotale() : double
  + translaterTout(dx : double, dy : double) : void
  + afficher() : void
}

Forme <|-- Cercle
Forme <|-- Rectangle
Rectangle <|-- Carre

Cercle *-- "1" Point : centre
Rectangle *-- "1" Point : coinHautGauche
Dessin *-- "*" Forme : contient
@enduml
```

Travail demandé

- decrire() est concrète dans Forme et utilise aire() et perimetre() (polymorphisme : elle appelle la bonne version selon l'objet réel).
- Carre ne redéfinit rien : il réutilise tout de Rectangle via le constructeur parent.
- aireTotale() et translaterTout() parcourent la liste sans jamais tester le type des formes (pas de instanceof / isinstance).
- Bonus : ajouter une classe Triangle composée de 3 Point sans modifier Dessin. Que montre ce bonus ?