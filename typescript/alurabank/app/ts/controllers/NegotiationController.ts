import { NegotiationsView, MessageView } from './../views/index';
import { Negotiations, Negotiation } from './../models/index';
import { domInject, throttle } from '../helpers/decorators/index';
import { NegotiationService } from '../services/index';
import { prints } from './../helpers/Utils';

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
    add(): void {
        let date: Date = new Date(this._inputDate.val().replace(/-/g, ','));

        if (!this._itsBusinessDay(date)) {
            return this._messageView.update('only business days trading, please!');
        }

        const negotiation = new Negotiation(
            date,
            parseInt(this._inputAmount.val()),
            parseFloat(this._inputValue.val())
        );

        this._negotiations.add(negotiation);
        prints(negotiation, this._negotiations);
        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negotiation added successfully');
    }

    private _itsBusinessDay(date: Date): boolean {
        return date.getDay() !== DayWeek.sunday && date.getDay() !== DayWeek.saturday;
    }

    @throttle(500)
    async importData(): Promise<void> {
        try {
            const data = await this._negotiationService
                .getNegotiations(res => {
                    if (res.ok) return res;

                    throw new Error(res.statusText);
                });

            const getNegotiations = this._negotiations.getArray();

            data.filter(negotiation => !getNegotiations.some(item => negotiation.isEquals(item)))
                .forEach(negotiation => this._negotiations.add(negotiation));

            this._negotiationsView.update(this._negotiations);
        } catch (error) {
            this._messageView.update(error.message);
        }
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
