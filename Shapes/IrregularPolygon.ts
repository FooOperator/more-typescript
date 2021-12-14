import { IPolygon } from "./IPolygon";

export class IrregularPolygon implements IPolygon {
    sides: number;
    sideLength: {
        [key: string]: number   
    }
    
    area: () => number;
}
