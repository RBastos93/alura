class NegotiationController {
    constructor() {
        this._negotiations = new Negotiations();
        this._negotiationsView = new NegotiationsView('#negotiationsView');
        this._inputDate = document.querySelector('#date');
        this._inputAmount = document.querySelector('#amount');
        this._inputValue = document.querySelector('#value');
        this._negotiationsView.update(this._negotiations);
    }
    add(event) {
        const negotiation = new Negotiation(new Date(this._inputDate.value.replace(/-/g, ',')), parseInt(this._inputAmount.value), parseFloat(this._inputValue.value));
        event.preventDefault();
        this._negotiations.add(negotiation);
        this._negotiationsView.update(this._negotiations);
    }
}
