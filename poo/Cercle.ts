import { Forme, type Deplacable } from "./Forme.js";

export class Cercle extends Forme implements Deplacable {

    constructor(private _rayon: number, public x: number, public y: number) {
        super(Cercle.name)
    }
    
    deplacer(dx: number, dy: number): void {
        throw new Error("Method not implemented.");
    }

    set rayon(r: number) { this._rayon = r }
    get rayon(): number { return this._rayon }

    calculerPerimetre(): number {
        return Math.round((2 * Math.PI * this._rayon) * 100) / 100
    }

    calculerAire(): number {
        return Math.round(Math.PI * Math.pow(this._rayon, 2) * 100) / 100
    }
}