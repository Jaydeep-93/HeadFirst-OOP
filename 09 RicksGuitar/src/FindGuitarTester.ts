import { GuitarSpec } from "./GuitarSpec";
import { Instrument } from "./Instrument";
import { Inventory } from "./Inventory";
import { Type } from "./Type";
import { Wood } from "./Wood";
import { Builder } from './Builder';
import { MandolinSpec } from './MandolinSpec';
import { Style } from "./Style";

const initializeInvenory = (inventory: Inventory) => {
    inventory.addInstrument("11277", 3999.95, new GuitarSpec(Builder.COLLINGS, "CJ", Type.ACOUSTIC,  Wood.INDIAN_ROSEWOOD, Wood.SITKA, 6));
    inventory.addInstrument("V95693", 1499.95, new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC,  Wood.ALDER, Wood.ALDER, 12));
    inventory.addInstrument("V9512", 1549.95, new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC,  Wood.ALDER, Wood.ALDER, 6));
    inventory.addInstrument("122784", 5495.95, new GuitarSpec(Builder.MARTIN, "D-18", Type.ACOUSTIC,  Wood.MAHOGANY, Wood.ADIRONDACK, 6));
    inventory.addInstrument("76531", 6295.95, new GuitarSpec(Builder.MARTIN, "OM-28", Type.ACOUSTIC,  Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK, 6));
    inventory.addInstrument("70108276", 2295.95, new GuitarSpec(Builder.GIBSON, "Les Paul", Type.ELECTRIC,  Wood.MAHOGANY, Wood.MAHOGANY, 6));
    inventory.addInstrument("82765501", 1890.95, new GuitarSpec(Builder.GIBSON, "SG '61 Reissue", Type.ELECTRIC,  Wood.MAHOGANY, Wood.MAHOGANY, 6));
    inventory.addInstrument("77023", 6275.95, new GuitarSpec(Builder.MARTIN, "D-28", Type.ACOUSTIC,   Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK, 6));
    inventory.addInstrument("1092", 12995.95, new GuitarSpec(Builder.OLSON, "SJ", Type.ACOUSTIC,  Wood.INDIAN_ROSEWOOD, Wood.CEDAR, 12));
    inventory.addInstrument("566-62", 8999.95, new GuitarSpec(Builder.RYAN, "Cathedral", Type.ACOUSTIC,  Wood.COCOBOLO, Wood.CEDAR, 12));
    inventory.addInstrument("6 29584", 2100.95, new GuitarSpec(Builder.PRS, "Dave Navarro Signature", Type.ELECTRIC,  Wood.MAHOGANY, Wood.MAPLE, 6));
    inventory.addInstrument("4566" , 2500, new MandolinSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, Style.A))
}

let inventory = new Inventory();
initializeInvenory(inventory); 
let whatErinLikes = new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER);
let whatRinaLikes = new MandolinSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC, Wood.ALDER, Wood.ALDER, Style.A)

let instruments: Array<Instrument> = inventory.search(whatRinaLikes); 
if (instruments.length > 0) {
    for (const instrument of instruments) {
        instrument.toString()
    }
}
else {
    console.log('Sorry No Guitar for You....');
}

