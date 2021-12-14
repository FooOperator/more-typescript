import { Rectangle } from "./Rectangle";

const rect = new Rectangle(10, 3)
const rectFail = new Rectangle(-1, 1)
const rect_area = rect.area

console.log(rect_area())