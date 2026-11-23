import { describe, it, expect } from "vitest"
import { Produit } from "../src/Produit.js"

describe("Produit", () => {
    
    it("should calculate TTC price", () => {
        // Arrange
        const produit = new Produit("Papier", 1)
        // Act

        // Assert
        expect(produit.getPrixTTC()).toBe(1.20)
    })

    it("should not create a product with negative price", () =>{
        expect(() => new Produit("Pierre", -5)).toThrow("Le prix ne peut pas etre negatif")
    })

})