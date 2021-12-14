"use strict";
exports.__esModule = true;
var EquilateralTriangle_1 = require("./EquilateralTriangle");
var RegularPentagon_1 = require("./RegularPentagon");
var et = new EquilateralTriangle_1.EquilateralTriangle(7);
var et_area = et.area;
var rp = new RegularPentagon_1.RegularPentagon(3);
var rp_area = rp.area;
console.log(et_area().toFixed(2));
console.log(rp_area().toFixed(2));