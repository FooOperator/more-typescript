import { IAmmo } from "./IAmmo";
import { IWeapon } from "./IWeapon";


export class Weapon implements IWeapon {
    name: string;
    minimumDamage: number;
    maximumDamage: number;
    ammo: IAmmo;

    fire(): void {
        if (!this.checkCanFire()) {
            console.log('Not enough ammo');
            return;
        }

        this.ammo.spendAmmo();
    }
    checkCanFire(): boolean {
        return this.ammo.currentAmmoAmount > 0;
    }

}
