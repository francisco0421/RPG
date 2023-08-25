import { Guild } from "./guild"

export class Character {
    private readonly MAX_HEALTH = 1000
    private readonly MIN_LEVEL = 1
    protected readonly MIN_RANGE = 0  

    protected health: number = this.MAX_HEALTH
    protected level: number = this.MIN_LEVEL
    protected range: number = this.MIN_RANGE
    protected name: string
    protected guilds: Array<Guild> = []

    constructor(name: string) {
        this.name = name
    }

    hurt(target: Character, damage: number, distance: number) {
        if (!this.isAlly(target) && distance <= this.range) {
            target.health -= damage
            if (this.level >= target.level + 5) {
                target.health -= damage * 1.5
            } else if (target.level <= target.level + 5) {
                target.health -= damage * .5
            } else {
                target.health -= damage
            }
            if (target.health < 0) target.health = 0
        } else {
            console.log("Can't hurt!")
        }
    }

    healCharacter(target: Character, heal: number) {
        if (this.isAlly(target) && target.isAlive()) {
            target.health += heal
            if (target.health > 1000) target.health = 1000
        } else {
            console.log("Can't heal!")
        }
    }

    joinGuild(guild: Guild){
        this.guilds.push(guild)
    }

    leaveGuild(guild: Guild){
        for (let index = 0; index < this.guilds.length; index++) {
            if(this.guilds[index].equals(guild)){
                this.guilds.splice(index, 1)
            }          
        }
    }

    isAlly(character: Character): boolean {
        for (let i = 0; i < this.guilds.length; i++) {
            for (let x = 0; x < character.guilds.length; x++) {
                if(this.guilds[i].equals(character.guilds[x])){
                    return true
                }
            }
        }
        return false
    }

    levelUp(level: number) {
        this.level += level
    }

    isAlive(): boolean {
        return this.health > 0
    }

    getHealth(): number {
        return this.level
    }

    getLevel(): number {
        return this.level
    }

    getName(): string {
        return this.name
    }

    getRange(): number {
        return this.range
    }

    equals(character: Character) {
        return character != undefined
            && this.name === character.getName()
            && this.level === character.getLevel()
    }

    print(): void {
        console.log("Character: " + this.getName + " {")
        console.log("Health: " + this.getHealth())
        console.log("Level: " + this.getLevel())
        console.log("Range: " + this.getRange())
        console.log("Alive: " + this.isAlive())
        console.log("}")
        console.log("Guilds: [")
        for (let index = 0; index < this.guilds.length; index++) {
            console.log(this.guilds[index].getName())
        }
        console.log("]")
        console.log("}")
    }
}