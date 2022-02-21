import { DogDoor } from './DogDoor'
import { Bark } from './Bark';

export class BarkRecognizer {
  private door: DogDoor;

  public constructor(door: DogDoor) {
    this.door = door;
  }

  public recognize(bark: Bark) {

    console.log('BarkRecognizer herad sound of ', bark.getSound());
    if (!this.door.allowedBark && this.door.allowedbark?.equals(bark)) {
      console.log("opening dog door ");
      this.door.openDoor();
    }
    else {
      console.log('bark is not recognizable ');    
    }
  }    
}
