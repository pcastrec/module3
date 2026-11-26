interface Boisson {
    description(): string
    price(): number
}

class Cafe implements Boisson {
    description(): string { return 'Café' }
    price(): number { return 30 }
}

class Chocolat implements Boisson {
    description(): string { return 'Chocolat' }
    price(): number { return 20 }
}

class BoissonDecorator implements Boisson {
    constructor(protected boisson: Boisson) { }
    description(): string { return this.boisson.description() }
    price(): number { return this.boisson.price() }
}

class Lait extends BoissonDecorator {
    description(): string { return this.boisson.description() + " au Lait" }
    price(): number { return this.boisson.price() + 10 }
}

class Sucre extends BoissonDecorator {
    description(): string { return this.boisson.description() + " au Sucre" }
    price(): number { return this.boisson.price() + 10 }
}

const boisson = new Lait(new Sucre(new Cafe()))
console.log(boisson.description())
console.log(boisson.price())

const cafeLait = new Lait(new Cafe())
console.log(cafeLait.description())
console.log(cafeLait.price())

console.log(new Lait(new Chocolat()).description())