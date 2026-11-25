export abstract class Forme {

    constructor(private _name: string) {}

    abstract calculerPerimetre(): number
    abstract calculerAire(): number
}

/**
 * Une interface definit ce qu'un objet sait faire
 * pas ce qu'il est
 */
export interface Deplacable {
    x: number
    y: number

    deplacer(dx: number, dy: number): void
}