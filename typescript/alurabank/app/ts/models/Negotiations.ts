import { Negotiation, Printable } from './index';

export class Negotiations implements Printable {

    private _negotiations: Array<Negotiation> | Negotiation[] = [];

    add(negotiation: Negotiation): void {
        this._negotiations.push(negotiation);
    }

    getArray(): Negotiation[] {
        return ([] as Negotiation[]).concat(this._negotiations);
    }

    forText(): void {
        console.log(JSON.stringify(this._negotiations))
    }
}