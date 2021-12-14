"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.EquilateralTriangle = void 0;
var RegularPolygon_1 = require("./RegularPolygon");
var EquilateralTriangle = /** @class */ (function (_super) {
    __extends(EquilateralTriangle, _super);
    function EquilateralTriangle(sideLength) {
        var _this = _super.call(this) || this;
        _this.area = function () {
            return (Math.sqrt(_this.sides) / 4) * Math.pow((_this.sideLength), 2);
        };
        _this.sides = 3;
        _this.sideLength = sideLength;
        return _this;
    }
    return EquilateralTriangle;
}(RegularPolygon_1.RegularPolygon));
exports.EquilateralTriangle = EquilateralTriangle;
