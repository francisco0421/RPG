import { Character } from "./character";

export class Archer extends Character {
    private readonly RANGE: number = 10

    constructor(name: string){
        super(name)
        this.range = this.RANGE
    }
}