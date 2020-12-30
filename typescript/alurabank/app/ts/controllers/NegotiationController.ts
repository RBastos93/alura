import { NegotiationsView, MessageView } from './../views/index';
import { Negotiations, Negotiation } from './../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { HandlerFunction, NegotiationService } from '../services/index';

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
    private _negotiationService = new NegotiationService();

    constructor() {
        this._negotiationsView.update(this._negotiations);
    }

    @throttle(500)
    add() {
        let date: Date = new Date(this._inputDate.val().replace(/-/g, ','));

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

    @throttle(500)
    importData() {
        const isOk: HandlerFunction = (res: Response) => {
            if (res.ok) return res;

            throw new Error(res.statusText);
        }

        this._negotiationService
            .getNegotiations(isOk)
            .then(data => {
                data.forEach(negotiation => this._negotiations.add(negotiation));

                this._negotiationsView.update(this._negotiations);
            })
            .catch(error => console.log(error.message));
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
