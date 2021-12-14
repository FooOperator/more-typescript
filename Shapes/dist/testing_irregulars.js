"use strict";
exports.__esModule = true;
var Rectangle_1 = require("./Rectangle");
var rect = new Rectangle_1.Rectangle(10, 3);
var rectFail = new Rectangle_1.Rectangle(-1, 1);
var rect_area = rect.area;
console.log(rect_area());
