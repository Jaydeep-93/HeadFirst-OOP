import { Guitar } from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";
import { Instrument } from "./Instrument";
import { InstrumentSpec } from "./InstrumentSpec";
import { MandolinSpec } from "./MandolinSpec";
import { Mandoline } from './Mandoline';

export class Inventory {
    inventory: Array<Instrument>;

    constructor() { 
        this.inventory = new Array<Instrument>();
    } 

    public addInstrument(
        serialNumber: string, price: number, instrumentSpec: InstrumentSpec
    ): void {
        let instrument = null; 
        if (instrumentSpec instanceof GuitarSpec)
            instrument = new Guitar(serialNumber, price, instrumentSpec as GuitarSpec);
        else if (instrumentSpec instanceof MandolinSpec)
            instrument = new Mandoline(serialNumber, price, instrumentSpec as MandolinSpec);
        
        if (instrument)
            this.inventory.push(instrument); 
    }

    getinstrument(serialNumber: string): Instrument | null {
        for (let instrument of this.inventory) {
            if (instrument.serialNumber === serialNumber)
                return instrument; 
        }
        return null;
    }
    
    public search(instrumentSpec: InstrumentSpec): Array<Instrument> {
        let instrList: Array<Instrument> = []; 
        this.inventory.forEach((instrument) => {
            if (instrument.getSpec().matches(instrumentSpec))
                instrList.push(instrument)    
        })
        return instrList; 
    }

}

