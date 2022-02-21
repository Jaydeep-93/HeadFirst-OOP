import { Builder } from "./Builder";
import { InstrumentSpec } from "./InstrumentSpec";
import { Type } from "./Type";
import { Wood } from "./Wood";

export class GuitarSpec extends InstrumentSpec{
    private _noOfStrings: number; 

    constructor(
        buidler: Builder, model: string,
        type: Type, backwood: Wood,
        topwood: Wood, noOfStrings: number = 4)
    {
        super(model, buidler, type, backwood, topwood); 
        this._noOfStrings = noOfStrings; 
    }
    get noOfStrings() {
        return this._noOfStrings;
    }

    set noOfStrings(num: number) {
        this._noOfStrings = num; 
    }

    public matches(guitarSpec: GuitarSpec) : boolean {
        return (
            guitarSpec.builder === this.builder &&
            guitarSpec.model.toLowerCase() === this.model.toLowerCase() &&
            guitarSpec.type === this.type &&
            guitarSpec.backWood === this.backWood &&
            guitarSpec.topWood === this.topWood  && 
            guitarSpec.noOfStrings === this.noOfStrings
        )
    }

    
}

