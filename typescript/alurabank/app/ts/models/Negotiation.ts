import { Printable } from "./index";

export class Negotiation extends Printable {

    constructor(readonly date: Date, readonly amount: number, readonly value: number) {

        super();
    }

    get volume(): number {
        return this.amount * this.value;
    }

    forText(): void {
        console.log(`
            Date: ${this.date},
            Amount: ${this.amount},
            Value: ${this.value},
            Volume: ${this.volume}
        `);
    }
}