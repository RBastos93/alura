class NegotiationController {

    private _inputDate: JQuery;
    private _inputAmount: JQuery;
    private _inputValue: JQuery;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');
    private _messageView = new MessageView('#messageView');

    constructor() {
        this._inputDate = $('#date');
        this._inputAmount = $('#amount');
        this._inputValue = $('#value');
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        const negotiation = new Negotiation(
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val()));

        event.preventDefault();

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negotiation added successfully');
    }
}