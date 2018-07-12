//import Point from './Point'
const Point = require('./Point')

export class MyPoint extends Point {
    private name: string;

    constructor(name: string, x?: number, y?: number) {
        super(x, y);
        this.name = name;
    }

    public getName() {
        return this.name;
    }

    //public add(other: Point): Point {
    //    return new Point(this.x + other.x, this.y + other.y);
    //}
}
