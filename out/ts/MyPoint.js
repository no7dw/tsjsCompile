"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __importDefault(require("./Point"));
var MyPoint = /** @class */ (function (_super) {
    __extends(MyPoint, _super);
    function MyPoint(name, x, y) {
        var _this = _super.call(this, x, y) || this;
        _this.name = name;
        return _this;
    }
    MyPoint.prototype.getName = function () {
        return this.name;
    };
    return MyPoint;
}(Point_1.default));
