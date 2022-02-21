export class Bark {
    private sound: string; 

    public constructor(sound: string) {
        this.sound = sound; 
    }

    public getSound() {
        return this.sound; 
    }

    public equals(bark: Bark): boolean {
        if (bark instanceof Bark) {
            const barkSound = bark.getSound(); 
            if (barkSound === this.sound) {
                return true;
            }
        }
        return false; 
    }

}