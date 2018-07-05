export class Fraction {
    constructor(numerator = 1, denominator = 1) {
        this._numerator = numerator;
        this._denominator = denominator;
    }
    plus(outra) {
        if (outra.denominator === this.denominator) {
            return `${this.numerator + outra.numerator}/${this.denominator}`;
        } else {
            return mmc(outra.denominator, this.denominator);
        }
    }
    multiply(outra) {
        const parte1 = this.numerator * outra.numerator;
        const parte2 = this.denominator * outra.denominator;
        return `${parte1}/${parte2}`;
    }
    divide(outra) {
        const parte1 = this.numerator * outra.denominator;
        const parte2 = this.denominator * outra.numerator;
        return `${parte1}/${parte2}`;
    }
    reduce(fracao) {
        if (this.canReduce === true) {
            const simpli = mdc(this.numerator, this.denominator);
            this._numerator = this._numerator / simpli;
            this._denominator = this._denominator / simpli;
        } else {
            return;
        }
    }
    greaterThan(outra) {
        const parte1 = this.numerator / this.denominator;
        const parte2 = outra.numerator / outra.denominator;
        if (parte1 > parte2) {
            return true;
        } else {
            return false;
        }
    }
    lessThan(outra) {
        const parte1 = this.numerator / this.denominator;
        const parte2 = outra.numerator / outra.denominator;
        if (parte1 < parte2) {
            return true;
        } else {
            return false;
        }
    }
    equals(outra) {
        const parte1 = this.numerator / this.denominator;
        const parte2 = outra.numerator / outra.denominator;
        if (parte1 === parte2) {
            return true;
        } else {
            return false;
        }
    }
    toString() {
        return `${this.numerator}/${this.denominator}`;
    }
    get numerator() {
        return this._numerator;
    }
    get denominator() {
        return this._denominator;
    }
    get canReduce() {
        const numero = mdc(this._numerator, this._denominator);
        if (numero === 1) {
            return false;
        } else {
            return true;
        }
    }
}
let resto = 0;
function mdc(numerator, denominator) {
    while (denominator !== 0) {
        resto = numerator % denominator;
        numerator = denominator;
        denominator = resto;
    }
    return numerator;
}
function mmc(num, num1) {
    let denominator1 = num;
    let denominator2 = num1;
    let r = 1;
    for (; r !== 0;) {
        r = denominator1 % denominator2;
        denominator1 = denominator2;
        denominator2 = r;
    }
    return (num * num1) / denominator1;
}
