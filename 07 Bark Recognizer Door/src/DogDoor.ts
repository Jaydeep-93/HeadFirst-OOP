export class DogDoor {

    private open: boolean;

    public constructor() {
        this.open = false;
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
