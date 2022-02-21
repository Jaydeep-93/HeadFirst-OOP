export class DogDoor {

    private open: boolean;

    public constructor() {
        this.open = false;
    }

    public openDoor(): void {
        console.log("The dog door opens.");
        this.open = true;
    }

    public close(): void {
        console.log("The dog door closes.");
        this.open = false;
    }

    public isOpen(): boolean {
        return this.open;
    }
}
