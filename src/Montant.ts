export class Montant {

    private constructor(private value: number) {}

    static deEuros(euros: number): Montant {
        if(!Number.isFinite(euros) || euros < 0) {
            throw new Error("Montant invalide")
        }
        return new Montant(Math.round(euros * 100))
    }

    static deCentimes(cents: number): Montant {
        if(!Number.isFinite(cents) || !Number.isSafeInteger(cents) || cents < 0) {
            throw new Error("Montant invalide")
        }
        return new Montant(cents)
    }

    additionner(m: Montant): Montant {
        return new Montant(this.value + m.value)
    }

    multiplier(quantite: number): Montant {
        return new Montant(this.value * quantite)
    }

    appliquerRemise(pourcentage: number): Montant {
        return new Montant(Math.round((this.value * (100 - pourcentage)) / 100))
    }

    getValue() { return this.value }
}