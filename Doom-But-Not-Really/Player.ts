import { IPlayer } from "./IPlayer";
import { Weapon } from "./Weapon";

export class Player implements IPlayer {
    name: string;
    totalHealth: number;
    currentHealth: number;
    speed: number;
    inventory: {
        [slot: string]: Weapon
    }

    constructor(data: IPlayer){
        this.name = data.name
        this.totalHealth = data.totalHealth
        this.currentHealth = this.totalHealth
        this.speed = data.speed
        this.inventory = data.inventory
    }
}