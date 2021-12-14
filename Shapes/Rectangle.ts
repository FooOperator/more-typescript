import { IrregularPolygon } from './IrregularPolygon'

export class Rectangle extends IrregularPolygon {
    constructor(side1, side2: number){
        
        super()
        if (side1 === side2) {
            throw new Error('A rectangle of equal sides is a square!')
        } else if (side1 < 0 || side2 < 0) {
            throw new Error('A side can not be negative')
        }
        this.sides = 4

        if (side1 > side2) {
            this.sideLength = {
                'length': side1,
                'width': side2
            }
        } else {
            this.sideLength = {
                'length': side2,
                'width': side1
            }
        }

        
    }
    
    area = () => {
        return this.sideLength.width * this.sideLength.length
    }
}