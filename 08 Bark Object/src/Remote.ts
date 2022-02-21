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
        }
        console.log(`status Door is open : ${this.door.isOpen()}`);
    }
}