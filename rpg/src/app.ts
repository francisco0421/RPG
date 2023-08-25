import { Archer } from "./archer"
import { Character } from "./character"
import { Guild } from "./guild"
import { Warrior } from "./warrior"

console.log("mais uma coisa")

let frederik: Character = new Warrior("Frederik")
let amon: Character = new Archer("Amon")
let test: Guild = new Guild("Test")
let test2: Guild = new Guild("Test2")


frederik.print()
amon.print()

frederik.levelUp(6)

frederik.hurt(amon, 500, 2)
amon.print()

frederik.healCharacter(amon, 400)
amon.print()

amon.healCharacter(amon, 600)
amon.print()

frederik.hurt(amon, 1000, 2)

amon.hurt(frederik, 1000, 10)

frederik.print()

//The app.ts commands must be changed accordingly
//Thing file must be done as well