export type StatutCommande = "BROUILLON" | "VALIDEE" | "ANNULEE";

const PLAFOND_ANNULATION = 1000;
const PLAFOND_REMISE = 30;

export interface LigneCommande {
    produit: string;
    quantite: number;
    prixUnitaire: number;
}

export class Commande {

    private statut: StatutCommande = "BROUILLON";
    private lignes: LigneCommande[] = [];
    private remise: number = 0;

    ajouterLigne(ligne: LigneCommande): void {
        if (this.statut !== "BROUILLON") {
            throw new Error("Impossible de modifier une commande non brouillon")
        }
        if (ligne.quantite <= 0) {
            throw new Error("La quantité doit etre positive")
        }
        this.lignes.push(ligne);
    }

    valider(): void {
        if (this.lignes.length === 0) {
            throw new Error("Une commande vide ne peut pas être validée")
        }
        this.statut = "VALIDEE";
    }

    /**
     * Annule la commande.
     * @throws si la commande est deja annulee
     * @throws si la commande est validee et son total depasse le plafond
     */
    annuler(): void {
        if (this.statut === "ANNULEE") {
            throw new Error("Cette commande est déjà annulée")
        }
        if (this.total() > PLAFOND_ANNULATION && this.statut === "VALIDEE") {
            throw new Error("Vous ne pouvez annulée une commande supérieur a 1000€")
        }
        this.statut = "ANNULEE";
    }

    /**
     * Applique une remis en pourcentage sur la commande
     * @param taux : pourcentage remise
     * @throws si la commande n'est pas un brouillon
     * @throws si le taux n'est pas compris entre 0 et PLAFOND_REMISE
     */
    appliquerRemise(taux: number): void {
        if(this.statut !== "BROUILLON") {
            throw new Error("Impossible d'appliquer une remise sur une commande non brouillon")
        }
        if(!Number.isFinite(taux) || taux < 0 || taux > PLAFOND_REMISE) {
            throw new Error(`La remise doit etre comprise entre 0 et ${PLAFOND_REMISE}`)
        }
        this.remise = taux
    }

    total(): number {
        const price = this.lignes.reduce(
            (acc, ligne) => acc + ligne.quantite * ligne.prixUnitaire, 0
        )
        return price * (1 - this.remise/100)
    }

    getStatut(): StatutCommande {
        return this.statut
    }
}