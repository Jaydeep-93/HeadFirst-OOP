import { Builder } from './Builder';
import { Type } from './Type';
import { Wood } from './Wood'

export abstract class InstrumentSpec {
    private _model: string ;
    private _builder: string;
    private _type: string;
    private _backWood: string;
    private _topWood: string;


    public constructor(
        model: string,
        builder: Builder, type: Type,
        backWodd: Wood, topWood: Wood
    ) {
        this._model = model; 
        this._builder = builder;
        this._type = type;
        this._backWood = backWodd;
        this._topWood = topWood;
    }

    public get model(): string {
        return this._model;
    }

    public set model(model: string
    ) {
        this._model = model;
    }

    public get builder(): string {
        return this._builder;
    }

    public set builder(builder: string
    ) {
        this._builder = builder;
    }

    public get type(): string {
        return this._type;
    }

    public set type(type: string
    ) {
        this._type = type;
    }

    public get backWood(): string {
        return this._backWood;
    }

    public set backWood(backWood: string
    ) {
        this._backWood = backWood;
    }

    public get topWood(): string {
        return this._topWood;
    }

    public set topWood(topWood: string) {
        this._topWood = topWood;
    }

    // check for equality of instrument 
    public abstract matches(instrumentSpec: InstrumentSpec): boolean;

}