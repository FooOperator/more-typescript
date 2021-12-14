import { RegularPolygon } from "./RegularPolygon";



export class EquilateralTriangle extends RegularPolygon {
    constructor(sideLength: number) {
        super();
        this.sides = 3
        this.sideLength = sideLength;
    }

    area = () => {
        return (Math.sqrt(this.sides) / 4) * (this.sideLength) ** 2
    }
}
