import { beforeEach, describe, expect, it } from "vitest";
import { Commande } from "../src/Commande.js";

let commande: Commande

describe("Command.ajouterLigne", () => {

    beforeEach(() => {
        commande = new Commande()
    })

    it("should add a line", () => {
        commande.ajouterLigne({ produit: "Ciseaux", prixUnitaire: 1.50, quantite: 1 })
        expect(commande.total()).toBe(1.50)
    })

    it("should refuse null quantity", () => {
        expect(() => commande.ajouterLigne(
            { produit: "Papier", quantite: 0, prixUnitaire: 0.99 }
        )).toThrow("La quantité doit etre positive")
    })

    it("should refuse negative quantity", () => {
        expect(() => commande.ajouterLigne(
            { produit: "Papier", quantite: -3, prixUnitaire: 0.99 }
        )).toThrow("La quantité doit etre positive")
    })

    it("should not add lines when statut is not 'BROUILLON'", () => {
        commande.annuler()
        expect(() => commande.ajouterLigne(
            { produit: 'Papier', quantite: 1, prixUnitaire: 0.99 }
        )).toThrow("Impossible de modifier une commande non brouillon")
    })
})

describe("Commande.valider", () => {

    beforeEach(() => {
        commande = new Commande()
    })

    it("should pass to valid with one line", () => {
        commande.ajouterLigne({ produit: "Papier", quantite: 1, prixUnitaire: 0.99 })
        commande.valider()
        expect(commande.getStatut()).toBe("VALIDEE")
    })

    it("should refuse empty command", () => {
        expect(() => commande.valider()).toThrow("Une commande vide ne peut pas être validée")
    })
})

describe("Commande.annuler", () => {

    beforeEach(() => {
        commande = new Commande()
    })

    it("should cancel command", () => {
        commande.annuler()
        expect(commande.getStatut()).toBe("ANNULEE")
    })

    it("should refuse to cancel a command already cancel", () => {
        commande.annuler()
        expect(() => commande.annuler()).toThrow("Cette commande est déjà annulée")
    })

    it("should cancel a command VALIDEE with less than 1000€", () => {
        commande.ajouterLigne({ produit: "Lave-Vaiselle", quantite: 1, prixUnitaire: 599 })
        commande.valider()
        commande.annuler()
        expect(commande.getStatut()).toBe("ANNULEE")
    })

    it("should cancel a command VALIDEE with 1000€", () => {
        commande.ajouterLigne({ produit: "Lave-Vaiselle", quantite: 1, prixUnitaire: 1000 })
        commande.valider()
        commande.annuler()
        expect(commande.getStatut()).toBe("ANNULEE")
    })

    it("should not cancel a command VALIDEE with more than 1000€", () => {
        commande.ajouterLigne({ produit: "Lave-Vaiselle", quantite: 1, prixUnitaire: 1001 })
        commande.valider()
        expect(commande.getStatut()).toBe("VALIDEE")
        expect(() => commande.annuler()).toThrow("Vous ne pouvez annulée une commande supérieur a 1000€")
        expect(commande.getStatut()).toBe("VALIDEE")
    })
})

describe("Commande.appliquerRemise", () => {

    beforeEach(() => {
        commande = new Commande()
        commande.ajouterLigne({ produit: "Radiateur", "quantite": 1, prixUnitaire: 200 })
    })

    it("Réduit le total de 10% (200€ => 180€)",() => {
        commande.appliquerRemise(10)
        expect(commande.total()).toBe(180)
    })

    it("Accepte une remise de 0% (cas limite)",() => {
        commande.appliquerRemise(0)
        expect(commande.total()).toBe(200)
    })

    it("Accepte une remise de 30% (cas limite)", () => {
        commande.appliquerRemise(30)
        expect(commande.total()).toBe(140)
    })

    it("Refuse une remise de 30.1%", () => {
        expect(() => commande.appliquerRemise(30.1))
        .toThrow("La remise doit etre comprise entre 0 et 30")
    })

    it("Refuse une remise negative", () => {
        expect(() => commande.appliquerRemise(-1))
        .toThrow("La remise doit etre comprise entre 0 et 30")
    })

    it("Refuse une remise sur une commande VALIDEE", () => {
        commande.valider()
        expect(() => commande.appliquerRemise(10))
        .toThrow("Impossible d'appliquer une remise sur une commande non brouillon")
    })

    it("Remplace la remise précédente au lieu d'ajouter", () => {
        commande.appliquerRemise(20)
        commande.appliquerRemise(10)
        expect(commande.total()).toBe(180)
    })

    it("Valeur absurbe", () => {
        expect(() => commande.appliquerRemise(NaN))
        .toThrow("La remise doit etre comprise entre 0 et 30")
    })
})