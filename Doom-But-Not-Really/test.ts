import { IPlayer } from "./IPlayer";
import { Player } from "./Player";
import { Weapon } from "./Weapon";


const data_doomGuy : IPlayer = {
    name: "Doom Guy",
    totalHealth: 100,
    currentHealth: 0,
    speed: 22,
    inventory: {
        'slot1': new Weapon,
        'slot2': new Weapon,
        'slot3': new Weapon,
        'slot4': new Weapon,
        'slot5': new Weapon,
        'slot6': new Weapon,
    },
}

var doomGuy = new Player(data_doomGuy)

console.log(doomGuy.currentHealth)