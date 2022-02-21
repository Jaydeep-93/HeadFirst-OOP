import { InstrumentSpec } from "./InstrumentSpec";

export abstract class Instrument {
    private _serialNumber: string; 
    private _price: number; 
    private _instrumentSpec: InstrumentSpec; 

    public constructor(
        serialNumber: string,
        price: number,
        instrumentSpec: InstrumentSpec 
    ) {
        this._serialNumber = serialNumber; 
        this._price = price; 
        this._instrumentSpec = instrumentSpec; 
    }

    public get serialNumber() : string {
        return this._serialNumber; 
    }

    public get price(): number {
        return this._price; 
    }

    public set serialNumber(serialNumber: string) {
        this._serialNumber = serialNumber; 
    }

    public set price(price: number) {
        this._price = price; 
    }
    public get instrumentSpec(): InstrumentSpec {
        return this._instrumentSpec;
    }

    public set instrumentSpec(instrumentSpec: InstrumentSpec) {
        this._instrumentSpec = instrumentSpec;
    }


    // abstract method for getting instrument specs
    public abstract getSpec(): InstrumentSpec;  

    // toString() for printing info
    public abstract toString(): void; 
    
}