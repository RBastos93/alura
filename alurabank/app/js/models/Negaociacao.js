class Negociacao {

    constructor(data, quantidade, valor) {
        if (!data) {
            throw new Error('Data deve ser preenchida!');
        }

        if (!quantidade) {
            throw new Error('Quantidade deve ser preenchida!');
        }

        if (!valor) {
            throw new Error('Valor deve ser preenchida!');
        }

        this._data = data;
        this._quantidade = quantidade;
        this._valor = valor;
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}