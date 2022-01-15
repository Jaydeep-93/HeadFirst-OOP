import { Builder } from "./Builder";
import { Guitar } from "./Guitar";
import { GuitarSpec } from "./GuitarSpec";
import { Inventory } from "./Inventory";
import { Type } from "./Type";
import { Wood } from "./Wood";

const initializeInvenory = (inventory: Inventory) => {
    inventory.addGuitar("11277", 3999.95, new GuitarSpec(Builder.COLLINGS, "CJ", Type.ACOUSTIC,  Wood.INDIAN_ROSEWOOD, Wood.SITKA, 6));
    inventory.addGuitar("V95693", 1499.95, new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC,  Wood.ALDER, Wood.ALDER, 12));
    inventory.addGuitar("V9512", 1549.95, new GuitarSpec(Builder.FENDER, "Stratocastor", Type.ELECTRIC,  Wood.ALDER, Wood.ALDER, 6));
    inventory.addGuitar("122784", 5495.95, new GuitarSpec(Builder.MARTIN, "D-18", Type.ACOUSTIC,  Wood.MAHOGANY, Wood.ADIRONDACK, 6));
    inventory.addGuitar("76531", 6295.95, new GuitarSpec(Builder.MARTIN, "OM-28", Type.ACOUSTIC,  Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK, 6));
    inventory.addGuitar("70108276", 2295.95, new GuitarSpec(Builder.GIBSON, "Les Paul", Type.ELECTRIC,  Wood.MAHOGANY, Wood.MAHOGANY, 6));
    inventory.addGuitar("82765501", 1890.95, new GuitarSpec(Builder.GIBSON, "SG '61 Reissue", Type.ELECTRIC,  Wood.MAHOGANY, Wood.MAHOGANY, 6));
    inventory.addGuitar("77023", 6275.95, new GuitarSpec(Builder.MARTIN, "D-28", Type.ACOUSTIC,   Wood.BRAZILIAN_ROSEWOOD, Wood.ADIRONDACK, 6));
    inventory.addGuitar("1092", 12995.95, new GuitarSpec(Builder.OLSON, "SJ", Type.ACOUSTIC,  Wood.INDIAN_ROSEWOOD, Wood.CEDAR, 12));
    inventory.addGuitar("566-62", 8999.95, new GuitarSpec(Builder.RYAN, "Cathedral", Type.ACOUSTIC,  Wood.COCOBOLO, Wood.CEDAR, 12));
    inventory.addGuitar("6 29584", 2100.95, new GuitarSpec(Builder.PRS, "Dave Navarro Signature", Type.ELECTRIC,  Wood.MAHOGANY, Wood.MAPLE, 6));
}

let inventory = new Inventory();
initializeInvenory(inventory); 
let whatErinLikes = new GuitarSpec( Builder.FENDER, "Stratocastor", Type.ELECTRIC,  Wood.ALDER, Wood.ALDER );

let guitars: Array<Guitar> = inventory.search(whatErinLikes); 
if (guitars.length > 0) {
    for (const guitar of guitars) {
        console.log(`You might like this guitar , `);
        console.log(`serial no  :   ${guitar.serialNumber}`);
        console.log(`Price      :   ${guitar.price}`);
        console.log(`buidler    :   ${guitar.guitarSpec.builder}`);
        console.log(`model      :   ${guitar.guitarSpec.model}`);
        console.log(`type       :   ${guitar.guitarSpec.type}`);
        console.log(`backWood   :   ${guitar.guitarSpec.backWood}`);
        console.log(`topWood    :   ${guitar.guitarSpec.topWood}`);
        console.log(`Strings    :   ${guitar.guitarSpec.noOfStrings}`);
        console.log('-------------------------------------------');
    }
}
else {
    console.log('Sorry No Guitar for You....');
}

