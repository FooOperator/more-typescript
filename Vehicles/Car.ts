import { IVehicle } from "./IVehicle";

export class Car implements IVehicle {
    model: string;
    manufacturer: string;
    color: string;
    topSpeed: number;
    amountOfWheels: 2;

}

