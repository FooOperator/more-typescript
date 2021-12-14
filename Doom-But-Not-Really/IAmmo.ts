import { AmmoType } from "./AmmoType";


export interface IAmmo {
    ammoType: AmmoType;
    ammoAmount: number;
    currentAmmoAmount: number;

    spendAmmo(): void;
}
