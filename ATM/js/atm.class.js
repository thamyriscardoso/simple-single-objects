export class ATM {
    constructor(numeroSerie) {
        this._numeroSerie = numeroSerie;
        this.comp1 = 0; // notas de 5
        this.comp2 = 0; // notas de 10
        this.comp3 = 0; // notas de 20
        this.comp4 = 0; // notas de 50
        this.comp5 = 0; // notas de 100
        this.valor = 0;
    }
    abastecer(quantidade, valorab) {
        if ((valorab === 5)&&((this.comp1+quantidade)<=100)) {
            this.comp1 += quantidade;
            this.valor = this.comp1 * 5 + this.comp2 * 10 +
            this.comp3 * 20 + this.comp4 * 50 + this.comp5 * 100;
        } else {
            if (valorab === 10&&((this.comp2+quantidade)<=100)) {
                this.comp2 += quantidade;
                this.valor = this.comp1 * 5 + this.comp2 * 10 +
                this.comp3 * 20 + this.comp4 * 50 + this.comp5 * 100;
            } else {
                if (valorab === 20&&((this.comp3+quantidade)<=100)) {
                    this.comp3 += quantidade;
                    this.valor = this.comp1 * 5 + this.comp2 * 10 +
                    this.comp3 * 20 + this.comp4 * 50 + this.comp5 * 100;
                } else {
                    if (valorab === 50&&((this.comp4+quantidade)<=100)) {
                        this.comp4 += quantidade;
                        this.valor = this.comp1 * 5 + this.comp2 * 10 +
                        this.comp3 * 20 + this.comp4 * 50 + this.comp5 * 100;
                    } else {
                        if ((valorab === 100)&&((this.comp5+quantidade)<=100)) {
                            this.comp5 += quantidade;
                            this.valor = this.comp1 * 5 + this.comp2 * 10 +
                           this.comp3 * 20 + this.comp4 * 50 + this.comp5 * 100;
                        } else {
                            return 0;
                        }
                    }
                }
            }
        }
    }
    cedulas(valorced) {
        if (valorced === 5) {
            return this.comp1;
        }
        if (valorced === 10) {
            return this.comp2;
        }
        if (valorced === 20) {
            return this.comp3;
        }
        if (valorced === 50) {
            return this.comp4;
        }
        if (valorced === 100) {
            return this.comp5;
        } else {
            return 0;
        }
    }
    retirar(valorsaque) {
        let notas100 = 0;
        if (this.comp5>0) {
            notas100 = Math.floor(valorsaque/100);
            if (notas100<=this.comp5) {
                valorsaque = valorsaque - notas100*100;
            } else {
                if (this.comp5*100<valorsaque) {
                    valorsaque = valorsaque - this.comp5*100;
                    notas100 = this.comp5;
                }
            }
        }
        let notas50 = 0;
        if (this.comp4>0) {
            notas50 = Math.floor(valorsaque/50);
            if (notas50<=this.comp4) {
                valorsaque = valorsaque - notas50*50;
            } else {
                if (this.comp4*50<valorsaque) {
                    valorsaque = valorsaque - this.comp4*50;
                    notas50 = this.comp4;
                }
            }
        }
        let notas20 = 0;
        if (this.comp3>0) {
            notas20 = Math.floor(valorsaque/20);
            if (notas20<=this.comp3) {
                valorsaque = valorsaque - notas20*20;
            } else {
                if (this.comp3*20<valorsaque) {
                    valorsaque = valorsaque - this.comp3*20;
                    notas20 = this.comp3;
                }
            }
        }
        let notas10 = 0;
        if (this.comp2>0) {
            notas10 = Math.floor(valorsaque/10);
            if (notas10<=this.comp2) {
                valorsaque = valorsaque - notas10*10;
            } else {
                if (this.comp2*10<valorsaque) {
                    valorsaque = valorsaque - this.comp2*10;
                    notas10 = this.comp2;
                }
            }
        }
        let notas5 = 0;
        if (this.comp1>0) {
            notas5 = Math.floor(valorsaque/5);
            if (notas5<=this.comp1) {
                valorsaque = valorsaque - notas5*5;
            } else {
                if (this.comp1*5<valorsaque) {
                    valorsaque = valorsaque - this.comp1*5;
                    notas5 = this.comp1;
                }
            }
        }
        if (valorsaque === 0) {
            this.comp1 -= notas5;
            this.comp2 -= notas10;
            this.comp3 -= notas20;
            this.comp4 -= notas50;
            this.comp5 -= notas100;
            this.valor = (this.comp1 * 5 + this.comp2 * 10 +
                this.comp3 * 20 + this.comp4 * 50 + this.comp5 * 100);
        }
    }
    get numeroSerie() {
        return this._numeroSerie;
    }
}
