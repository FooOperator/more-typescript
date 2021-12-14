import { RegularPolygon } from "./RegularPolygon";

export class RegularPentagon extends RegularPolygon {
    constructor(sideLength : number){
        super()
        this.sides = 5
        this.sideLength = sideLength
    }

    area = () => {
        return 1/4 * (Math.sqrt(this.sides * (this.sides + 2 * Math.sqrt(this.sides)))) * this.sideLength ** 2
    }
}
