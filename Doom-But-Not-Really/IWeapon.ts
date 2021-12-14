import { IAmmo } from "./IAmmo";

export interface IWeapon {
    name: string;
    minimumDamage: number;
    maximumDamage: number;
    ammo: IAmmo;

    fire(): void;
    checkCanFire(): boolean;
}
