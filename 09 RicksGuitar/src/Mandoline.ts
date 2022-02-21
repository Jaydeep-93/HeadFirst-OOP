import { Instrument } from "./Instrument";
import { MandolinSpec } from "./MandolinSpec";

export class Mandoline extends Instrument {

    constructor(serialNumber: string, price: number, mandolinespec: MandolinSpec) {
        super(serialNumber, price, mandolinespec); 
    }

    public getSpec(): MandolinSpec {
         return this.instrumentSpec as MandolinSpec;
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
        console.log(`Style    :   ${this.getSpec().style.toString()}`);
        console.log('-------------------------------------------');
    }

}