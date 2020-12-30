import { Negotiation, MyObject } from './index';

export class Negotiations implements MyObject<Negotiations> {

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

    isEquals(negotiations: Negotiations): boolean {
        return JSON.stringify(this._negotiations) === JSON.stringify(negotiations.getArray());
    }
}