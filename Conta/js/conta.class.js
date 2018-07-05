export class Conta {
    constructor(agencia, numero, saldo = 500) {
        if (saldo >= 500) {
            this._agencia = agencia;
            this._numero = numero;
            this._saldo = saldo;
        } else {
            throw new Error('saldo inicial invalido');
        }
    }
    sacar(variavel) {
        if ((variavel>=5) && (variavel<=this._saldo)) {
            this._saldo = this.saldo-variavel;
            return true;
        } else {
            return false;
        }
    }
    depositarEmDinheiro(variavel) {
        if (variavel<=1000) {
            this._saldo=this.saldo+variavel;
            return true;
        } else {
            return false;
        }
    }
    depositarEmCheque(variavel) {
        if (variavel<=10000) {
            this._saldo=this.saldo+variavel;
            return true;
        } else {
            return false;
        }
    }
    toString() {
        return `ag ${this.agencia} cc ${this.numero} saldo ${this.saldo}.00`;
    }
    get agencia() {
        return this._agencia;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
}
