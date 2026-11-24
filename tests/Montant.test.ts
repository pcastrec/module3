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
    });

    describe("refuse un montant invalide", () => {
        it.each([-1, NaN, Infinity])("deEuros(%s)", (valeur) => {
            expect(() => Montant.deEuros(valeur)).toThrow("Montant invalide")
        })

        it.each([-1, NaN, Infinity, 3.99])("deCentimes(%s)", (valeur) => {
            expect(() => Montant.deCentimes(valeur)).toThrow("Montant invalide")
        })
    })

    describe("opérations", () => {
        it("additionne deux montants", () => {
            const m1 = Montant.deEuros(10)
            const m2 = Montant.deEuros(10)
            const m3 = m1.additionner(m2)
            expect(m3).toBeInstanceOf(Montant)
            expect(m3.getValue()).toBe(2000)
        });

        it("ne modifie pas le montant d'origine (immuabilité)", () => {
            const m1 = Montant.deEuros(10)
            const m2 = Montant.deEuros(10)
            const m3 = m1.additionner(m2)
            expect(m1.getValue()).toBe(1000)
        });

        it("multiplie par une quantité", () => {
            const m = Montant.deEuros(10)
            expect(m.multiplier(2).getValue()).toBe(2000)
        });

        it("applique une remise de 10 % sur 200 €", () => {
            const m = Montant.deEuros(200)
            expect(m.appliquerRemise(10).getValue()).toBe(18000)
        });

        it("arrondit la remise au centime (ex. 33 % de 0,99 €)", () => {
            const m = Montant.deEuros(0.99)
            expect(m.appliquerRemise(33).getValue()).toBe(66)
        });
    });

    describe("comparaison", () => {
        it.todo("deux montants de mêmes centimes sont égaux");
        it.todo("deux montants différents ne sont pas égaux");
    });
});