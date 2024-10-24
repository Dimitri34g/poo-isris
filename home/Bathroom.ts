import { Room } from './Room';

export class Bathroom extends Room {
    private hasWC: boolean;

    constructor(floor: number, area: number, hasWC: boolean) {
        super(floor, area);
        this.hasWC = hasWC;
    }

    public display(): string {
        return `${super.display()}\nhasWC: ${this.hasWC}`;
    }
}