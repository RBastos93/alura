class NegotiationController {
    constructor() {
        this._inputDate = document.querySelector('#date');
        this._inputAmount = document.querySelector('#amount');
        this._inputValue = document.querySelector('#value');
    }
    add(event) {
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        console.log(negotiation.amount + 20);
        event.preventDefault();
    }
}
