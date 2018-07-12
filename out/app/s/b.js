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
Object.defineProperty(exports, "__esModule", { value: true });
var c_1 = require("../v/c");
var Ser = /** @class */ (function (_super) {
    __extends(Ser, _super);
    function Ser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ser.prototype.mul = function () {
        console.log('abc');
    };
    return Ser;
}(c_1.Base));
exports.Ser = Ser;
