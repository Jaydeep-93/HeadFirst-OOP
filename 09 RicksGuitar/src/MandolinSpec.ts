import { Builder } from "./Builder";
import { InstrumentSpec } from "./InstrumentSpec";
import { Style } from "./Style";
import { Type } from "./Type";
import { Wood } from "./Wood";

export class MandolinSpec extends InstrumentSpec {
    private _style: Style;

    constructor(
        buidler: Builder, model: string,
        type: Type, backwood: Wood,
        topwood: Wood, style: Style)
    {
        super(model, buidler, type, backwood, topwood); 
        this._style = style;  
    }

    public get style(): Style {
        return this._style;
    }

    public set style(style: Style
    ) {
        this._style = style;
    }

    public matches(mandolinSpec: MandolinSpec) : boolean {
        return (
            mandolinSpec.builder === this.builder &&
            mandolinSpec.model.toLowerCase() === this.model.toLowerCase() &&
            mandolinSpec.type === this.type &&
            mandolinSpec.backWood === this.backWood &&
            mandolinSpec.topWood === this.topWood &&
            mandolinSpec.style == this.style
        )
    }
}