import { Rectangle } from "./Rectangle.js"

export class Carre extends Rectangle {

    constructor(cote: number) {
        super(cote, cote)
    }
}