import { Negotiation } from './index';

export class Negotiations {

    private _negotiations: Array<Negotiation> | Negotiation[] = [];

    add(negotiation: Negotiation): void {
        this._negotiations.push(negotiation);
    }

    getArray(): Negotiation[] {
        return [].concat(this._negotiations);
    }
}