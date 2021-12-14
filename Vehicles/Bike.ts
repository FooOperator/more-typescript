import { IVehicle } from "./IVehicle";


export class Bike implements IVehicle {
    model: string;
    manufacturer: string;
    color: string;
    topSpeed: number;
    amountOfWheels: 2;

}
