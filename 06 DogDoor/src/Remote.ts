import { DogDoor } from "./DogDoor";

export class Remote {
    door: DogDoor

    constructor(door: DogDoor) {
        this.door = door; 
    }

    pressButton = (): void => {
        console.log('pressing remote control button ...');
        if (this.door.isOpen) {
            this.door.close(); 
        }
        else {
            this.door.open(); 
            setTimeout(() => {
                this.door.close(); 
                console.log(`Door is open : ${this.door.isOpen}`);
            }, 3000); 
        }
        console.log(`Door is open : ${this.door.isOpen}`);
    }
}