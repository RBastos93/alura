class NegotiationController {

    private _inputDate: HTMLInputElement;
    private _inputAmount: HTMLInputElement;
    private _inputValue: HTMLInputElement;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#date');
        this._inputAmount = <HTMLInputElement>document.querySelector('#amount');
        this._inputValue = <HTMLInputElement>document.querySelector('#value');
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputAmount.value),
            parseFloat(this._inputValue.value));

        event.preventDefault();

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);
    }
}