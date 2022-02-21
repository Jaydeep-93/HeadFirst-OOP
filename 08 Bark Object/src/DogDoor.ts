import { Bark } from './Bark'
export class DogDoor {

    private open: boolean;
    private _allowedBard: Bark | null ; 

    public constructor() {
        this.open = false;
        this._allowedBard = null; 
    }
    
    public set allowedBark(bark : Bark){
        this._allowedBard = bark;
    }

    public get allowedbark() : Bark | null{
        return this._allowedBard; 
    }    

    public openDoor(): void {
        console.log("OPening Dog door .... ");
        this.open = true;
        setTimeout(() => {
            this.close(); 
            console.log(`Door is open : ${this.isOpen()}`);
        }, 3000); 

    }

    public close(): void {
        console.log("closing dog door ....");
        this.open = false;
    }

    public isOpen(): boolean {
        return this.open;
    }
}
