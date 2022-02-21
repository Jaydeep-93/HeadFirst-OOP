import { DogDoor } from "./DogDoor";

export class Remote {
    private door: DogDoor

    constructor(door: DogDoor) {
        this.door = door; 
    }

    pressButton = (): void => {
        console.log('pressing remote control button ...');
        if (this.door.isOpen()) {
            this.door.close(); 
        }
        else {
            this.door.openDoor(); 
            setTimeout(() => {
                this.door.close(); 
                console.log(`Door is open : ${this.door.isOpen()}`);
            }, 5000); 
        }
        console.log(`status Door is open : ${this.door.isOpen()}`);
    }
}