"use strict";
exports.__esModule = true;
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(data) {
        this.name = data.name;
        this.totalHealth = data.totalHealth;
        this.currentHealth = this.totalHealth;
        this.speed = data.speed;
        this.inventory = data.inventory;
    }
    return Player;
}());
exports.Player = Player;
