import { Negotiation } from "../models/index";

export function prints(...negotiations: Negotiation[]) {
    negotiations.forEach(negotiation => negotiation.forText());
}