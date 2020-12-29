class Negotiations {
    constructor() {
        this._negotiations = [];
    }
    add(negotiation) {
        this._negotiations.push(negotiation);
    }
    getArray() {
        return [].concat(this._negotiations);
    }
}
