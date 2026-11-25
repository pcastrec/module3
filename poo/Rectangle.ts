import { Forme } from "./Forme.js"

export class Rectangle extends Forme {

    constructor(private _largeur: number, private _longueur: number) {
        super(Rectangle.name)
        if(this._largeur < 0 || this._longueur < 0) {
            throw new Error("Impossible avec des valeurs negatives")
        }
    }

    get largeur(): number   { return this._largeur }
    get longueur(): number  { return this._longueur }

    calculerPerimetre(): number {
        return Math.round((2 * (this._largeur + this._longueur)) * 100) / 100
    }
    
    calculerAire(): number {
        return Math.round((this._longueur * this._largeur) * 100) / 100
    }
}