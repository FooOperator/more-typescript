import { ICharacter } from "./ICharacter";
import { Weapon } from "./Weapon";


export interface IPlayer extends ICharacter {
    inventory: {
        [slot: string]: Weapon
    }
}
