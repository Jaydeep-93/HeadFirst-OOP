import { DogDoor } from "./DogDoor";
import { Remote } from './Remote';

const door: DogDoor = new DogDoor(); 
const remote: Remote = new Remote(door);

console.log('Fido barks to go outside ...');
remote.pressButton(); 
console.log('Fodo gone outisde...'); 
console.log('Fido all done ...');

setTimeout(() => {
    console.log('Fido back inside ...');
    remote.pressButton();
}, 3000);

console.log("...but he's stuck outside!");
console.log("\nFido starts barking...");
console.log("...so Gina grabs the remote control.");
remote.pressButton();
console.log("\nFido's back inside...");
