import { DogDoor } from './DogDoor'
export class BarkRecognizer {

    private door: DogDoor;
  
    public constructor(door: DogDoor) {
      this.door = door;
    }
  
    public recognize(bark: string) {
      console.log("BarkRecognizer: Heard a '" + bark + "'");
      this.door.openDoor();
    }
  }
  