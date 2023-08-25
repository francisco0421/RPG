export class Guild {
    protected name: string

    constructor(name: string){
        this.name = name
    }

    getName(): string {
        return this.name
    }

    equals(guild: Guild){
        return guild != undefined
        && guild.getName() === this.name
    }
}