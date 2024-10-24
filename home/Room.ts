
export class Room {
    private floor: number;
    private area: number;

    constructor(floor: number, area: number) {
        this.floor = floor;
        this.area = area;
    }

    public display(): string {
        return `${this.floor}:\naffected to:${this.area}`;
    }
}