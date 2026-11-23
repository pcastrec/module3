import { Commande } from "./Commande.js";
import { Produit } from "./Produit.js";

// Instanciation a partir du modele
const c = new Commande()
c.ajouterLigne({ produit: "Papier", quantite: 3, prixUnitaire: 0.99 })
console.log(c.getStatut())
c.annuler()
console.log(c.getStatut())

const p = new Produit("Papier", 0.99)
console.log(p.getPrixTTC(25));

try {
    
} catch (error) {
    
}