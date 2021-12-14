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
exports.Rectangle = void 0;
var IrregularPolygon_1 = require("./IrregularPolygon");
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(side1, side2) {
        var _this = _super.call(this) || this;
        _this.area = function () {
            return _this.sideLength.width * _this.sideLength.length;
        };
        if (side1 === side2) {
            throw new Error('A rectangle of equal sides is a square!');
        }
        else if (side1 < 0 || side2 < 0) {
            throw new Error('A side can not be negative');
        }
        _this.sides = 4;
        if (side1 > side2) {
            _this.sideLength = {
                'length': side1,
                'width': side2
            };
        }
        else {
            _this.sideLength = {
                'length': side2,
                'width': side1
            };
        }
        return _this;
    }
    return Rectangle;
}(IrregularPolygon_1.IrregularPolygon));
exports.Rectangle = Rectangle;
