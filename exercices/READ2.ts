class Conducteur {
    constructor(
        private nom: string,
        private numeroPermis: string
    ) { }
}

class Moteur {
    private enMarche: boolean = false
    constructor(private puissance: number) { }
    demarrer(): void { this.enMarche = true }
    estEnMarche(): boolean { return this.enMarche }
}

class Roue {
    private pression: number = 0
    gonfler(valeur: number): void { this.pression = valeur }
}

class Voiture {
    private _conducteur: Conducteur | null = null
    private _roues: [Roue, Roue, Roue, Roue]
    private _moteur: Moteur
    constructor(
        private immatriculation: string,
        puissance: number
    ) {
        this._moteur = new Moteur(puissance)
        this._roues = [new Roue(), new Roue(), new Roue(), new Roue()]
    }
    demarrer(): string {
        if(this._conducteur) {
            return "Vroom"
        } else {
            throw new Error("Pas censé demarrer sans conducteur")
        }
    }
    set conducteur(c: Conducteur) { this._conducteur = c }
    afficher(): string { return `${this.immatriculation}` }
}