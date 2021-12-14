"use strict";
exports.__esModule = true;
var Player_1 = require("./Player");
var Weapon_1 = require("./Weapon");
var data_doomGuy = {
    name: "Doom Guy",
    totalHealth: 100,
    currentHealth: 0,
    speed: 22,
    inventory: {
        'slot1': new Weapon_1.Weapon,
        'slot2': new Weapon_1.Weapon,
        'slot3': new Weapon_1.Weapon,
        'slot4': new Weapon_1.Weapon,
        'slot5': new Weapon_1.Weapon,
        'slot6': new Weapon_1.Weapon
    }
};
var doomGuy = new Player_1.Player(data_doomGuy);
console.log(doomGuy.currentHealth);
