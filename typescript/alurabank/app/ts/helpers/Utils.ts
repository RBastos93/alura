import { Printable } from "../models/index";

export function prints(...objects: Printable[]) {
    objects.forEach(object => object.forText());
}