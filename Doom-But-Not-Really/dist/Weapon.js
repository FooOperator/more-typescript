"use strict";
exports.__esModule = true;
exports.Weapon = void 0;
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    Weapon.prototype.fire = function () {
        if (!this.checkCanFire()) {
            console.log('Not enough ammo');
            return;
        }
        this.ammo.spendAmmo();
    };
    Weapon.prototype.checkCanFire = function () {
        return this.ammo.currentAmmoAmount > 0;
    };
    return Weapon;
}());
exports.Weapon = Weapon;
