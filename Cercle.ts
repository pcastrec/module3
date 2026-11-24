class Cercle {

    constructor(private _rayon: number) {}

    set rayon(r: number) { this._rayon = r }
    get rayon(): number { return this._rayon }

    calculerPerimetre(): number {
        return 2 * Math.PI * this._rayon;
    }
}

// Parenthese
let x = 5
let y = 3

y = x
x = 10

console.log(x) // 10
console.log(y) // 5
//

let cercle1 = new Cercle(3)
let cercle2 = new Cercle(3)

console.log(cercle1 === cercle2) // false

cercle2 = cercle1 // @ddr1 = @ddr2
cercle1.rayon = 10

console.log(cercle1.rayon) // 10
console.log(cercle2.rayon) // 10

console.log(cercle1 === cercle2) // true

let json1 = {
    'nom': 'pierre',
    'adresse': {
        'rue': 'chateau',
        'ville': 'dinard'
    }
}

let json2 = json1
json2.adresse.rue = 'chateau hubert'
console.log(json1)