import { describe, expect, it } from "vitest";
import { Montant } from "../src/Montant.js";

describe("Montant", () => {

    describe("création", () => {
        it("crée un montant à partir d'euros", () => {
            const m = Montant.deEuros(10)
            expect(m.getValue()).toBe(1000)
        });
        it("crée un montant à partir de centimes", () => {
            const m = Montant.deCentimes(1000)
            expect(m.getValue()).toBe(1000)
        });
        it("arrondit 0.1 + 0.2 à 30 centimes", () => {
            const m = Montant.deEuros(0.1 + 0.2)
            expect(m.getValue()).toBe(30)
        });
        it("refuse un montant négatif", () => {
            expect(() => Montant.deEuros(-1))
            .toThrow("Montant invalide")
            expect(() => Montant.deCentimes(-1))
            .toThrow("Montant invalide")
        });
        // Number.isFinite
        it("refuse NaN", () => {
            expect(() => Montant.deEuros(NaN))
            .toThrow("Montant invalide")
            expect(() => Montant.deCentimes(NaN))
            .toThrow("Montant invalide")
        });
        // Number.isSafeInteger
        it("refuse des centimes non entiers", () => {
            expect(() => Montant.deCentimes(3.99))
            .toThrow("Montant invalide")
        });
    });

    describe("opérations", () => {
        it.todo("additionne deux montants");
        it.todo("ne modifie pas le montant d'origine (immuabilité)");
        it.todo("multiplie par une quantité");
        it.todo("applique une remise de 10 % sur 200 €");
        it.todo("arrondit la remise au centime (ex. 33 % de 0,99 €)");
    });

    describe("comparaison", () => {
        it.todo("deux montants de mêmes centimes sont égaux");
        it.todo("deux montants différents ne sont pas égaux");
    });
});