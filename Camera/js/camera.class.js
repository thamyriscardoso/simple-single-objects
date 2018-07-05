export class Camera {
    constructor(marca, modelo) {
        this.albumFotos = 0;
        this.albumVideos = 0;
        this.albumExcluidos = 0;
        this.flash = false;
        this._marca = marca;
        this._modelo = modelo;
    }
    get modelo() {
        return this._modelo;
    }
    get marca() {
        return this._marca;
    }
    novaFoto() {
        this.albumFotos++;
    }
    novoVideo() {
        this.albumVideos++;
    }
    sequenciaDeFotos(numero) {
        if (numero <= 100) {
            this.albumFotos += numero;
        } else {
            if (numero > 100) {
                throw new Error('Você ultrapassou o limite de fotos, ' +
                    'a operação foi cancelada.');
            }
        }
    }
    ligaDesligaFlash() {
        if (this.flash === false) {
            this.flash = true;
            return ('Flash ligado');
        } else {
            this.flash = false;
            return ('Flash desligado');
        }
    }
    excluirFotos(numero) {
        if (numero <= this.albumFotos) {
            this.albumFotos -= numero;
            this.albumExcluidos += numero;
        } else {
            if (this.albumFotos === 1) {
                throw new Error('Você tem apenas 1 foto para excluir.');
            } else {
                throw new Error('Você tem apenas"+this.albumFotos+' +
                  'fotos para excluir');
            }
        }
    }
    excluirVideos(numero) {
        if (numero <= this.albumVideos) {
            this.albumVideos -= numero;
            this.albumExcluidos +=numero;
        } else {
            if (this.albumVideos===1) {
                throw new Error('Você tem apenas 1 vídeo para excluir.');
            } else {
                throw new Error('Você tem apenas+ this.albumVideos+' +
                  'vídeos para excluir.');
            }
        }
    }
    fotos() {
        return this.albumFotos;
    }
    videos() {
        return this.albumVideos;
    }
    excluidos() {
        return this.albumExcluidos;
    }
}
