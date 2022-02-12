export class DogDoor {
    isOpen: boolean; 
    
    constructor() {
        this.isOpen = false; 
    }

    open = (): void => {
        this.isOpen = true;  
    }

    close = (): void => {
        this.isOpen = false; 
    }
}