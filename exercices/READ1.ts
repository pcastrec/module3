abstract class Animal {
    constructor(protected _nom: string, protected _age: number) { }
    get nom(): string { return this._nom }

    abstract crier(): string
    seDeplacer(): string { return "Marche" }
    toString(): string { return `Je m'appele ${this._nom}, je ${this.crier()} en ${this.seDeplacer()}` }
}

class Chien extends Animal {
    constructor(nom: string, age: number, private race: string) {
        super(nom, age)
    }
    crier(): string { return "Waaf" }
    rapporterBalle(): string { return "waaf une balle" }
}

class Chat extends Animal {
    constructor(nom: string, age: number, private estInterieur: boolean) {
        super(nom, age)
    }
    crier(): string { return "Miaou" }
}

class Oiseau extends Animal {
    constructor(nom: string, age: number, envergure: number) {
        super(nom, age)
    }
    crier(): string { return "Piou" }
    seDeplacer(): string { return "Vole" }
}

const animaux: Animal[] = [
    new Chien("Robert", 56, "Golden"),
    new Chat("Felix", 13, false),
    new Oiseau("Coco", 32, 12)
]

animaux.forEach(a => {
    console.log(a.toString());
    if(a instanceof Chien) {
        console.log(a.rapporterBalle())
    }
})