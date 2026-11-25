type PaymentResult = {
    message: string
    success: boolean
    transactionId: string
}

export interface IPaymentStrategy {
    name: string
    pay(amount: number): Promise<PaymentResult>
}

export class CardPayment implements IPaymentStrategy {

    name: string = 'Card'

    constructor(
        private _cardNumber: string,
        private _expiration_date: Date,
        private _cvv: string
    ) {
        if(this._cardNumber.length !== 16) {
            throw new Error('Numero de carte invalide')
        }
        if(this._expiration_date > new Date()) {
            throw new Error('Carte expirée')
        }
        if(!this._cvv.match(/^\d{3}$/)) {
            throw new Error('Numero de carte invalide')
        }
    }

    async pay(amount: number): Promise<PaymentResult> {
        return {
            message: `Paiement de ${amount}€: ****${this._cardNumber.slice(-4)}`,
            success: true,
            transactionId: crypto.randomUUID()
        }
    }

}