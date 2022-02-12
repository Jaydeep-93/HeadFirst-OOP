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
}, 10000);




