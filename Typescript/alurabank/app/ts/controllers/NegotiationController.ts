class NegotiationController {

    private _inputDate: HTMLInputElement;
    private _inputAmount: HTMLInputElement;
    private _inputValue: HTMLInputElement;

    constructor() {
        this._inputDate = <HTMLInputElement>document.querySelector('#date');
        this._inputAmount = <HTMLInputElement>document.querySelector('#amount');
        this._inputValue = <HTMLInputElement>document.querySelector('#value');
    }

    add(event: Event) {
        const negotiation = new Negotiation(
            new Date(this._inputDate.value.replace(/-/g, ',')),
            parseInt(this._inputAmount.value),
            parseFloat(this._inputValue.value));

        console.log(negotiation.amount + 20);
        event.preventDefault();
    }
}