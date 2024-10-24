import { Room } from './Room';

export class LivingRoom extends Room {
    private tv: boolean;

    constructor(floor: number, area: number, tv: boolean) {
        super(floor, area);
        this.tv = tv;
    }

    public display(): string {
        return `${super.display()}\ntv: ${this.tv}`;
    }
}