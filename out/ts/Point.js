"use strict";
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.toString = function () {
        return "x:" + this.x + "y:" + this.y;
    };
    return Point;
}());
module.export = Point;
