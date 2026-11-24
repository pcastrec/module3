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

    getValue() { return this.value }
}