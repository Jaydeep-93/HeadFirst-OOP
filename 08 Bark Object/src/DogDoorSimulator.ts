import { DogDoor } from "./DogDoor";
import { BarkRecognizer } from './BarkRecognizer';
import { Bark } from "./Bark";

const door: DogDoor = new DogDoor(); 
door.allowedBark = new Bark('Rowlf'); 
const recognizer: BarkRecognizer = new BarkRecognizer(door);

function delay(time: number) {
    return new Promise(resolve => setTimeout( resolve , time))
}

(async () => {
    console.log('Bruce start barking ...');
    recognizer.recognize(new Bark('Rowlf')); 
    console.log('Bruce gone outisde...'); 

    await delay(4000)
    console.log('Bruce all done ...');

    await delay(100) ;
    console.log("...but he's stuck outside!");
    console.log("\nBruce starts barking...");
    // simulate hardware for recognisze barking 
    recognizer.recognize(new Bark('Yip'));

    console.log('simulate barking again');
    recognizer.recognize(new Bark('Rowlf'))
    console.log("\nFido's back inside...");
    
})() 