export class PersonModel {
    public name: string = "default";
    public amount: number = 0;
    public difference: number = 0;
    public share: number = 0;

    constructor(n: string, a: number) {
        this.name = n;
        this.amount = a;
    }
}