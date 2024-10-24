import { Room } from './Room';

export class Bedroom extends Room {
    private bedNumber: number;

    constructor(floor: number, area: number, bedNumber: number) {
        super(floor, area);
        this.bedNumber = bedNumber;
    }

    public display(): string {
        return `${super.display()}\nbed number: ${this.bedNumber}`;
    }
}