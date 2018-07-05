export class Ventilator {
    constructor(watts, brand, minRPM, maxRPM) {
        this.watts = watts;
        this.brand = brand;
        this.minRPM = minRPM;
        this.maxRPM = maxRPM;
        this._on = false;
        this._off = true;
        this._velocity = 0;
        this.rpm = 0;
    }
    speedUp() {
        if ((this._on === false) && (this._off === true)) {
            this._on = true;
            this._off = false;
            this._velocity = this._velocity + 1;
            this.rpm = this.minRPM;
            return;
        } if (this.on === true && this.off === false && this._velocity === 1) {
            this._on = true;
            this._off = false;
            this._velocity = this.velocity +1;
            this.rpm = (this.minRPM + this.maxRPM)/2;
            return;
        } if (this.on === true && this.off === false && this._velocity === 2) {
            this._on = true;
            this._off = false;
            this._velocity+=1;
            this.rpm = this.maxRPM;
            return;
        } if (this.on === true && this.off === false && this._velocity === 3) {
            this._on = true;
            this._off = false;
            this._velocity = this._velocity;
            this.rpm = this.maxRPM;
            return;
        }
    }
    slowDown() {
        if (this._on === false && this._off === true) {
            this._on = false;
            this._off = true;
            this._velocity = 0;
            this.rpm = 0;
            return;
        }
        if (this._on === true && this._off === false && this._velocity === 1) {
            this._on = false;
            this._off = true;
            this._velocity = this._velocity -1;
            this.rpm = 0;
            return;
        }
        if (this._on === true && this._off === false && this._velocity === 2) {
            this._on = true;
            this._off = false;
            this._velocity = this.velocity -1;
            this.rpm = this.minRPM;
            return;
        }
        if (this._on === true && this._off === false && this._velocity === 3) {
            this._on = true;
            this._off = false;
            this._velocity = this.velocity -1;
            this.rpm = (this.minRPM + this.maxRPM)/2;
            return;
        }
    }
    turnOff() {
        this._on = false;
        this._off = true;
        this._velocity = 0;
        this.rpm = 0;
    }
    get on() {
        return this._on;
    }
    get off() {
        return this._off;
    }
    get velocity() {
        return this._velocity;
    }
}
