import { House } from "./House.js";

export class EchoHouse extends House {

    constructor() {
        super()
        this.data = this.data.map(l => `${l} ${l}`)
    }
}