import { Guitar } from "./Guitar"
import { GuitarSpec } from "./GuitarSpec";

class Inventory {
    guitars: Array<Guitar>;

    constructor() { 
        this.guitars = new Array<Guitar>();
    } 

    addGuitar(
        serialNumber: string, price: number, guitarSpec: GuitarSpec
    ): void {
        let guitar: Guitar = new Guitar(serialNumber,price, guitarSpec); 
        this.guitars.push(guitar); 
    }

    getGuitar(serialNumber: string): Guitar | null {
        for (let guitar of this.guitars) {
            if (guitar.serialNumber === serialNumber)
                return guitar; 
        }
        return null;
    }

    search(searchGuitar: GuitarSpec): Array<Guitar> {
        let guitars: Array<Guitar> = [] ; 
        
        for (let ele of this.guitars) {
            if ( ele.guitarSpec.isEqual(searchGuitar) )
                guitars.push(ele);     
        }
        return guitars;
    }
}

export { Inventory }