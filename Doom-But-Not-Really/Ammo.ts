import { AmmoType } from "./AmmoType";

class Ammo implements IAmmo {
    ammoType: AmmoType;
    ammoAmount: number;
    currentAmmoAmount: number;

    spendAmmo(): void {
        this.currentAmmoAmount--;
    }

}
