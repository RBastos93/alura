import { MyObject } from "./index";

export class Negotiation implements MyObject<Negotiation> {

    constructor(readonly date: Date, readonly amount: number, readonly value: number) { }

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

    isEquals(negotiation: Negotiation): boolean {
        return this.date.getDate() === negotiation.date.getDate()
            && this.date.getMonth() === negotiation.date.getMonth()
            && this.date.getFullYear() === negotiation.date.getFullYear();
    }
}