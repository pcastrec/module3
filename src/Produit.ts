export interface Categorie {
    id: number;
    libelle: string;
}

export class Produit {

    constructor(public nom: string, private prix: number) {
        if(prix < 0) {
            throw new Error("Le prix ne peut pas etre negatif")
        }
    }

    /**
     * @param tva: number
     * @returns number
     */
    getPrixTTC(tva: number = 20): number {
        return this.prix * (1 + tva/100)
    }
}