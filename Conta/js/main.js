class Conta{
	constructor(agencia, numero, saldo = 500){
		if(saldo >= 500){
				this._agencia = agencia;
				this._numero = numero;
				this._saldo = saldo;
				this.sacar = function(variavel){
						if((variavel>=5) && (variavel<=saldo)){
							this._saldo = this.saldo-variavel;
							return true;
						}
						else{
							return false;
						}
					}
					this.depositarEmDinheiro = function(variavel){
						if(variavel<=1000){
							this._saldo=this.saldo+variavel;
							return true;
						}
						else{
							return false;
						}
					}
					this.depositarEmCheque=function(variavel){
						if(variavel<=10000){
							this._saldo=this.saldo+variavel;
							return true;
						}
						else{
							return false;
						}
					}
			}
			else{
				throw e="saldo inicial invalido";
			}
	}
	toString() {
		return `ag ${this.agencia} cc ${this.numero} saldo ${this.saldo}.00`;
    }
    get agencia(){
      return this._agencia;
    }
    get numero(){
        return this._numero;
    }
    get saldo(){
        return this._saldo;
    }
}