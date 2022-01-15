import { Guitar } from "./Guitar"

class Inventory {
    guitars: Array<Guitar>;

    constructor() { 
        this.guitars = new Array<Guitar>();
    } 

    addGuitar(
        serialNumber: string, price: number,
        builer: string, model: string, type: string,
        backWood: string, topWood: string
    ): void {
        let guitar: Guitar = new Guitar(serialNumber, price, builer, model, type, backWood, topWood); 
        this.guitars.push(guitar); 
    }

    getGuitar(serialNumber: string): Guitar | null {
        for (let guitar of this.guitars) {
            if (guitar.serialNumber === serialNumber)
                return guitar; 
        }
        return null;
    }

    search(searchGuitar: Guitar): Guitar | null {
        let guitar: Guitar | null = null; 
        for (let ele of this.guitars) {
            if (
                ele.builder === searchGuitar.builder &&
                ele.model === searchGuitar.model &&
                ele.type === searchGuitar.type &&
                ele.backWood === searchGuitar.backWood &&
                ele.topWood === searchGuitar.topWood
            )
                guitar = ele;     
        }
        return guitar;
    }
}

export { Inventory }