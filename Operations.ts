export class Operations {

    private a: number;
    private b: number;

    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }


    public add(): number {
        return this.a + this.b;
    }
    private sub(num: number, num2: number): number {
        return num - num2;
    }
    private mul(num: number, num2: number): number {
        return num * num2;
    }
    private div(num: number, num2: number): number {
        return num / num2;
    }
    private greaterThan(num: number, num2: number): boolean {
        return num > num2;
    }
    private greaterOrEqual(num: number, num2: number): boolean {
        return num >= num2;
    }
    private lowerThan(num: number, num2: number): boolean {
        return num < num2;
    }
    private lowerOrEqual(num: number, num2: number): boolean {
        return num <= num2;
    }
}