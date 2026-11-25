import { Forme } from "./Forme.js";

export class Triangle extends Forme {

    constructor(
        private _coteA: number,
        private _coteB: number,
        private _coteC: number
    ) { super(Triangle.name) }

    calculerPerimetre(): number {
        return Math.round((this._coteA + this._coteB + this._coteC) * 100) / 100
    }

    calculerAire(): number {
        const demiPerimetre = (this._coteA + this._coteB + this._coteC) / 2
        return Math.round(Math.sqrt(demiPerimetre * 
            (demiPerimetre - this._coteA) *
            (demiPerimetre - this._coteB) *
            (demiPerimetre - this._coteC)
        ) * 100) / 100
    }

}