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
exports.RegularPentagon = void 0;
var RegularPolygon_1 = require("./RegularPolygon");
var RegularPentagon = /** @class */ (function (_super) {
    __extends(RegularPentagon, _super);
    function RegularPentagon(sideLength) {
        var _this = _super.call(this) || this;
        _this.area = function () {
            return 1 / 4 * (Math.sqrt(_this.sides * (_this.sides + 2 * Math.sqrt(_this.sides)))) * Math.pow(_this.sideLength, 2);
        };
        _this.sides = 5;
        _this.sideLength = sideLength;
        return _this;
    }
    return RegularPentagon;
}(RegularPolygon_1.RegularPolygon));
exports.RegularPentagon = RegularPentagon;
