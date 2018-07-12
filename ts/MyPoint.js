"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import Point from './Point'
const Point = require('./Point');
class MyPoint extends Point {
    constructor(name, x, y) {
        super(x, y);
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.default = MyPoint;
