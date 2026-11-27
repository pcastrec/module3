// Les produits
abstract class Bouton   { abstract afficher(): void }
abstract class Texte    { abstract afficher(): void }

// Produits Concrets
class BoutonNoir extends Bouton {
    afficher(): void { console.log("Je suis un bouton noir") }
}
class TexteNoir extends Texte {
    afficher(): void { console.log("Je suis un texte en noir") }
}
class BoutonBlanc extends Bouton {
    afficher(): void { console.log("Je suis un bouton blanc") }
}
class TexteBlanc extends Texte {
    afficher(): void { console.log("Je suis un texte en blanc") }
}

// Fabrique abstraite
interface Theme {
    creerBouton(): Bouton
    creerTexte(): Texte
}
// Fabriques Concretes
class ThemeClaire implements Theme {
    creerBouton():  Bouton { return new BoutonNoir() }
    creerTexte():   Texte { return new TexteNoir() }
}
class ThemeSombre implements Theme {
    creerBouton():  Bouton { return new BoutonBlanc() }
    creerTexte():   Texte { return new TexteBlanc() }
}

function construirePage(theme: Theme) {
    theme.creerBouton().afficher()
    theme.creerTexte().afficher()
}

construirePage(new ThemeSombre())