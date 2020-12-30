import { showRuntime } from '../helpers/decorators/index';
import { Negotiation } from './index';

export class Negotiations {

    private _negotiations: Array<Negotiation> | Negotiation[] = [];

    add(negotiation: Negotiation): void {
        this._negotiations.push(negotiation);
    }

    @showRuntime()
    getArray(): Negotiation[] {
        return ([] as Negotiation[]).concat(this._negotiations);
    }
}