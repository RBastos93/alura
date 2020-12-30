import { NegotiationsView, MessageView } from './../views/index';
import { Negotiations, Negotiation } from './../models/index';
import { domInject } from '../helpers/decorators/index';

export class NegotiationController {

    @domInject('#date')
    private _inputDate: JQuery;
    @domInject('#amount')
    private _inputAmount: JQuery;
    @domInject('#value')
    private _inputValue: JQuery;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');
    private _messageView = new MessageView('#messageView');

    constructor() {
        this._negotiationsView.update(this._negotiations);
    }

    add(event: Event) {
        let date: Date = new Date(this._inputDate.val().replace(/-/g, ','));

        event.preventDefault();

        if (!this._itsBusinessDay(date)) {
            this._messageView.update('only business days trading, please!');
            return;
        }

        const negotiation = new Negotiation(
            date,
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val()));

        this._negotiations.add(negotiation);

        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negotiation added successfully');
    }

    private _itsBusinessDay(date: Date): boolean {
        return date.getDay() !== DayWeek.sunday && date.getDay() !== DayWeek.saturday;
    }
}

enum DayWeek {
    sunday,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
    saturday
}
