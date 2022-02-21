import { DogDoor } from "./DogDoor";
import { BarkRecognizer } from './BarkRecognizer';

const door: DogDoor = new DogDoor(); 
const recognizer: BarkRecognizer = new BarkRecognizer(door);

// console.log('Fido barks to go outside ...');
// recognizer.recognize("Woof"); 
// console.log('Fodo gone outisde...'); 

// setTimeout(() => {
//     console.log('Fido all done ...');
// }, 4000);

// setTimeout(() => {
//     console.log("...but he's stuck outside!");
//     console.log("\nFido starts barking...");
//     // simulate hardware for recognisze barking 
//     recognizer.recognize("Woof");
//     console.log("\nFido's back inside...");

// }, 5000);
function delay(time: number) {
    return new Promise(resolve => setTimeout( resolve , time))
}

(async () => {
    console.log('Fido barks to go outside ...');
    recognizer.recognize("Woof"); 
    console.log('Fodo gone outisde...'); 

    await delay(4000)
    console.log('Fido all done ...');

    await delay(100) ;
    console.log("...but he's stuck outside!");
    console.log("\nFido starts barking...");
    // simulate hardware for recognisze barking 
    recognizer.recognize("Woof");
    console.log("\nFido's back inside...");
    
})() 