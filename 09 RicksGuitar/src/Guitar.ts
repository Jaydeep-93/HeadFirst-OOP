import { GuitarSpec } from "./GuitarSpec";
import { Instrument } from "./Instrument";

export class Guitar  extends Instrument{

    constructor(serialNumber: string, price: number, guitarspec: GuitarSpec) {
        super(serialNumber, price, guitarspec); 
    }

    public getSpec(): GuitarSpec {
        return this.instrumentSpec as GuitarSpec; 
    }

    public toString(): void {
        console.log(`You might like this guitar , `);
        console.log(`serial no  :   ${this.serialNumber}`);
        console.log(`Price      :   ${this.price}`);
        console.log(`buidler    :   ${this.getSpec().builder}`);
        console.log(`model      :   ${this.getSpec().model}`);
        console.log(`type       :   ${this.getSpec().type}`);
        console.log(`backWood   :   ${this.getSpec().backWood}`);
        console.log(`topWood    :   ${this.getSpec().topWood}`);
        console.log(`Strings    :   ${this.getSpec().noOfStrings}`);
        console.log('-------------------------------------------');
    }
}

