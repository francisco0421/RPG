import { Character } from "./character";

export class Warrior extends Character {
    private readonly RANGE: number = 2

    constructor(name: string){
        super(name)
        this.range = this.RANGE
    }
}