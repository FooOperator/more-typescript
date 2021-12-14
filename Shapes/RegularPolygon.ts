import { IPolygon } from "./IPolygon";


export class RegularPolygon implements IPolygon {
    sides: number;
    sideLength: number;
    area: () => number;
}


