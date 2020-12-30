import { Printable, Comparable } from "./index";

export interface MyObject<T> extends Printable, Comparable<T> {}