import type { IFormater } from "./Format.js"
import type { IOrderer } from "./Order.js"

export class House {

    constructor(private orderer: IOrderer, private formater: IFormater) {
        this.data = formater.format(this.data)
        this.data = orderer.order(this.data)
    }

    data: string[] = [
        "the horse and the hound and the horn that belong to",
        "the farmer sowing is corn that kept",
        "the rooster that crowed in the morn that woke",
        "the priest all shaven and shore but married",
        "the man all tattered torn that kissed",
        "the maiden all forlorn that milked",
        "the cow with crumpled horn that tossed",
        "the dog that worried",
        "the cat that killed",
        "the rat that ate",
        "the malt that lay in",
        "the house that jack built"
    ]

    /**
     * Renvoie les n dernieres lignes
     * avec un saut de ligne ('\n') et une tabulation ('\t')
     * @param n nombre de la ligne
     */
    phrases(n: number): string {
        return this.data.slice(-n).join('\n\t')
    }

    /**
     * La premiere phrase doit commencer par "This is " puis faire appel a phrases
     * et finir par '.\n'
     * @param n nombre de ligne
     */
    line(n: number): string {
        return `This is ${this.phrases(n)}.\n`
    }
}