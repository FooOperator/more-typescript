import { EquilateralTriangle } from "./EquilateralTriangle";
import { RegularPentagon } from "./RegularPentagon";

const et = new EquilateralTriangle(7)
const et_area = et.area

const rp = new RegularPentagon(3)
const rp_area = rp.area

console.log(et_area().toFixed(2))
console.log(rp_area().toFixed(2))