class RoundHole {
    constructor(private _radius: number) { }
    get radius(): number { return this._radius }
    fits(peg: RoundPiece): boolean {
        return this.radius >= peg.radius
    }
}

class RoundPiece {
    constructor(private _radius: number) { }
    get radius(): number { return this._radius }
}

class SquarePiece {
    constructor(private _width: number) { }
    get width(): number { return this._width }
}

class SquarePieceAdapter extends RoundPiece {
    constructor(private _square: SquarePiece) {
        super(_square.width)
    }
    get width(): number {
        return this._square.width * Math.sqrt(2) / 2
    }
}

const hole = new RoundHole(5)
const ball = new RoundPiece(5)
console.log(hole.fits(ball))

const lego = new SquarePiece(2)
const duplo = new SquarePiece(10)
// hole.fits(lego) PAS LE DROIT

const legoAdapte = new SquarePieceAdapter(lego)
const duploAdapte = new SquarePieceAdapter(duplo)
console.log(hole.fits(legoAdapte)) // legoAdapte herite de RoundPiece
console.log(hole.fits(duploAdapte)) // duploAdapte herite de RoundPiece