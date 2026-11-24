// POO: Programmation Orienté Objet
// OOP: Object Oriented Programmation

class Client {

    constructor(
        private _numero: number,
        private _prenom: string,
        private _nom: string
    ) {}

    get numero(): number    { return this._numero }
    get prenom(): string    { return this._prenom }
    get nom(): string       { return this._nom }
}

class CompteBancaire {

    constructor(
        private _titulaire: Client,
        private _devise: string,
        protected _solde: number
    ) {}

    // Accessible par .titulaire grace au getter suivant
    get titulaire(): Client         { return this._titulaire }
    set titulaire(client: Client)   { this._titulaire = client }

    get devise(): string            { return this._devise }
    get solde(): number             { return this._solde }

    retrait(m: number): number {
        this._solde = this._solde - m
        // this._solde -= m
        return m
    }

}

class CompteEpargne extends CompteBancaire {

    constructor(client: Client, devise: string, solde: number, private _taux: number) {
        super(client, devise, solde)
    }

    ajouterInteret() {
        this._solde += this._solde * this._taux
    }
}

// Evolution des besoins
/**
 * Un compte bancaire est soit un compte epargne soit un compte courant
 * Un compte courant se caracterise par le numero de la carte bancaire qui lui
 * est associé, ainsi que par un decouvert maximal autorisé.
 * Tout retrait qui ferait passer le nouveau solde en dessous du decouvert max est interdit
 * et non effectué
 * On ne peut retirer en une seule fois plus de la moitié du solde d'un compte epargne
 */
class CompteCourant {
    
}

const c = new Client(1, "Pierre", "Castrec")
const b = new CompteBancaire(
    c,                                      // Le client
    "$",                                    // La devise
    1000                                    // Le solde
)
const e = new CompteEpargne(c, "£", 200, 1.3)
e.retrait(100)
b.titulaire.nom

// Encapsulation: niveaux de visibilités [public, protected, private]
// Heritage: CompteEpargne extends CompteBancaire
// Polymorphisme: const comptes: CompteBancaire[] = [b, e]

const comptes: CompteBancaire[] = [b, e]

comptes.forEach(c => console.log(c.titulaire.nom))