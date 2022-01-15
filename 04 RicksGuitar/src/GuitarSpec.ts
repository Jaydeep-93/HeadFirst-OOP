class GuitarSpec {
    private _builder: string;
    private _model: string
    private _type: string;
    private _backWood: string;
    private _topWood: string;
    private _noOfStrings: number; 

    constructor(buidler: string, model: string, type: string,  backwood: string, topwood: string, noOfStrings: number = 4 ) {
        this._builder = buidler; 
        this._model = model; 
        this._type = type; 
        this._backWood = backwood; 
        this._topWood = topwood; 
        this._noOfStrings = noOfStrings ;
    }
    
    get builder() {
        return this._builder;
    }

    get model() {
        return this._model;
    }

    get type() {
        return this._type;
    }

    get backWood() {
        return this._backWood;
    }

    get topWood() {
        return this._topWood;
    }

    get noOfStrings() {
        return this._noOfStrings;
    }

    isEqual(guitarSpec: GuitarSpec) : boolean {
        if (
            guitarSpec.builder === this.builder &&
            guitarSpec.model.toLowerCase() === this.model.toLowerCase() &&
            guitarSpec.type === this.type &&
            guitarSpec.backWood === this.backWood &&
            guitarSpec.topWood === this.topWood  
            // guitarSpec.noOfStrings === this.noOfStrings
        )
            return true;
        else
            return false; 
    }
}

export { GuitarSpec }