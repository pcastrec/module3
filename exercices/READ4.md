```
@startuml
title Exercice 4 - Entreprise

interface Payable {
  + calculerPaie() : double
}

abstract class Employe {
  # nom : String
  # matricule : String
  + Employe(nom : String, matricule : String)
  + {abstract} calculerPaie() : double
  + toString() : String
}

class Salarie {
  - salaireMensuel : double
  + calculerPaie() : double
}

class Horaire {
  - tauxHoraire : double
  - heures : double
  + calculerPaie() : double
}

class Manager {
  - prime : double
  + calculerPaie() : double
  + ajouterSubordonne(e : Employe) : void
}

class Facture {
  - fournisseur : String
  - montant : double
  + calculerPaie() : double
}

class Entreprise {
  - nom : String
  + creerDepartement(nom : String) : Departement
  + masseSalariale() : double
  + totalAPayer(elements : List<Payable>) : double
}

class Departement {
  - nom : String
  + embaucher(e : Employe) : void
  + coutDepartement() : double
}

Payable <|.. Employe
Payable <|.. Facture
Employe <|-- Salarie
Employe <|-- Horaire
Salarie <|-- Manager

Entreprise *-- "1..*" Departement
Departement o-- "*" Employe
Manager o-- "*" Employe : encadre >
@enduml
```

Travail demandé

- Horaire : heures au-delà de 35 payées à 125 %. Manager : salaire mensuel + prime, en appelant la version du parent.
- Les départements ne peuvent être créés que par creerDepartement() (composition).
- totalAPayer() reçoit un mélange d'employés et de factures : montrer qu'une interface permet le polymorphisme entre classes sans lien d'héritage.
- Question : pourquoi Departement → Employe est une agrégation et pas une composition ? Qu'arrive-t-il à un employé qui change de département ?