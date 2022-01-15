import { GuitarSpec } from "./GuitarSpec";

class Guitar {
    private _serialNumber: string; 
    private _price: number;
    private _guitarSpec: GuitarSpec;

    constructor(serialNumber: string, price: number, guitarspec: GuitarSpec) {
        this._guitarSpec = guitarspec;  
        this._serialNumber = serialNumber;
        this._price = price;
    }

    get serialNumber() {
        return this._serialNumber;
    }

    get price() {
        return this._price;
    }

    get guitarSpec() {
        return this._guitarSpec; 
    }

}

export { Guitar }
