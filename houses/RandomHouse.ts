import { House } from "./House.js";

export class RandomHouse extends House {

    constructor() {
        super()
        this.data = this.data.sort(() => Math.random() - 0.5)
    }
}