interface IRegularPolygonHeir {
    getArea(): number;
    getPerimeter(): number;
}

interface teste {
    area: number;
}

class Polygon {
    name: string;
    sides: number;
    // area: number | Function | undefined;
    perimeter: number | Function | undefined;
    isConcave: boolean;
    isConvex: boolean;
    isRegular: boolean;
    isEquiangular: boolean;
    isEquilateral: boolean;
    isCyclic: boolean;
    isSimple: boolean;
    isComplex: boolean;
    classifications: Array<string>;

    private strRepr: string;
        
    constructor(name: string, sides: number, isConcave: boolean, isConvex: boolean, isRegular: boolean, isEquiangular: boolean, isEquilateral: boolean, isCyclic: boolean, isSimple: boolean, isComplex: boolean, perimeter?: number, area?: number) {
        this.name = name;
        this.sides = sides;
        // this.area = area;
        this.perimeter = perimeter;
        this.isConcave = isConcave;
        this.isConvex = isConvex;
        this.isRegular = isRegular;
        this.isEquiangular = isEquiangular;
        this.isEquilateral = isEquilateral;
        this.isCyclic = isCyclic;
        this.isSimple = isSimple;
        this.isComplex = isComplex;
        this.classifications = this.setClassifications(this);

        this.strRepr = `${name} (${sides} sides) which is ${this.classifications.join(", ")}`
    }
    
    toString(): string {
        return this.strRepr;
    }

    private setClassifications(instObj: Polygon): Array<string> {
        const classifications: Array<string> = [];

        for (let [ key, value ] of Object.entries(instObj)) {
            if (typeof value == "boolean") {
                if (value) {
                    classifications.push(key.replace("is","").toLowerCase());
                }
            }
        }

        return classifications;
    }
}

class IrregularPolygon extends Polygon {
    intAngles: Array<number>;

    constructor(name: string, sides: number, intAngles: Array<number>, isConcave: boolean, isConvex: boolean, isEquiangular: boolean, isEquilateral: boolean, isSimple: boolean, isComplex: boolean) {
        super(name, sides, isConcave, isConvex, false, isEquiangular, isEquilateral, false, isSimple, isComplex);
        this.intAngles = intAngles;
    }

}

class RegularPolygon extends Polygon {
    intAngle: number;
    extAngle: number;
    intAngleSum: number;
    extAngleSum: number = 360;
    area: number;

    constructor(name: string, sides: number) {
        super(name, sides, true, false, true, true, true, true, true, false);
        this.intAngle = RegularPolygon.getIntAngle(sides);
        this.extAngle = RegularPolygon.getExtAngle(sides);
        this.intAngleSum = RegularPolygon.getIntAngleSum(sides);

        Object.defineProperties(this, {
            area: {get: this.getInstanceArea(this.sides, 10)}
        })
    }

    private getInstanceArea(sides: number, sideLen: number): number {

    }

    // get area(): number {
    //     return this.sides * this.sides;
    // }

    // set area(value: number) {
    //     this.area = value;
    // }

    static getIntAngle(sides: number): number {
        const result: number = 180 - 360 / sides;
        return Number(result.toFixed(2))
    }

    static getExtAngle(sides: number): number {
        const result: number = 360 / sides;
        return Number(result.toFixed(2))
    }

    static getIntAngleSum(sides: number): number {
        const result: number = 180 * sides - 360;
        return Number(result.toFixed(2))
    }

    static getArea(sides: number, sideLen: number): number{
        // Area = (Perimeter * apothem) / 2
        // Area = (sideLen*sides * apothem) / 2
        
        let apothem: number = RegularPolygon.getApothem(sides, sideLen);
        let polArea: number = (sideLen * sides * apothem) / 2
    
        // returns the area with up to 3 decimal digits
        return Number(polArea.toFixed(3))
    }
    
    static getApothem(sides: number, sideLen: number): number{
        // Apothem is the perpendicular segment between any side of a regular polygon and the center
        // of the circle that circumscribes that polygon. Regular polygons can be sectioned into
        // identical triangles with the following characteristics:
        //  -  Base length = polygon's side length
        //  -  Isosceles, with base angles = half the polygon's internal angle
        //  -  The isosceles sides = radius of the circle that circumscribes that polygon
        //  -  Heigh = the polygon's apothem
        // Thus, we can get the apothem calculating this triangles height
        //         .    
        //        /|\          ap = apothem = triangle height
        // c.rad / | \          x = polygon's internal angle / 2
        //      /ap|  \ c.rad --> = circumcircle radius
        //     /x__|__x\
        //      sideLen
        //
        // Now, as we only have the base and one angle of the isosceles triangle, what we can do is
        // to look at the rectangular triangle formed by 'c. rad', 'ap' and 'sideLen / 2' and this way
        // get the length of 'ap' through the tangent of 'x' as 'tg = opposite cath. / adjacent cath'
        // so...
        // tg x = ap / (sideLen / 2)
        // tg (pol's int. angle / 2) = ap / (sideLen / 2)
        // tg ((pol's int angle sum / sides) / 2) = ap / (sideLen / 2)
        // tg ((((sides - 2) * 180) / sides) / 2) = ap / (sideLen / 2)
        // ap = (tg ((((sides - 2) * 180) / sides) / 2)) * (sideLen / 2)
    
        let x: number = (((sides - 2) * 180) / sides) / 2;
        let xInRad: number = (x * Math.PI) / 180; // converted angle x to radians as it's the format of Math.tan()
        let tanX: number = Math.tan(xInRad);
        let apothem: number = tanX * (sideLen / 2);
    
        return apothem;
    }
}

class Square extends RegularPolygon {
    constructor() {
        super("square", 4)
    }
}

class RegularTriangle extends RegularPolygon {
    constructor() {
        super("Triangle", 3)
    }
}

class RegularPentagon extends RegularPolygon {
    constructor() {
        super("Pentagon", 5)
    }
}

const mySquare = new Square();
const myRegularTriangle = new RegularTriangle();
const myRegularPentagon = new RegularPentagon();

console.log(mySquare)
console.log(`this is a ${mySquare}`);
console.log(`${myRegularPentagon.name} has ${myRegularPentagon.sides} with internal angles of ${myRegularPentagon.intAngle} and external angles of ${myRegularPentagon.extAngle}`);
console.log(`A 21-sided regular polygon has internal angles of ${RegularPolygon.getIntAngle(21)} degrees`)

// console.log(`Area of a 4-sided polygon with side 2 is: ${RegularPolygon.getArea(4,2)}`)
// console.log(`Area of a 4-sided polygon with side 3 is: ${RegularPolygon.getArea(4,3)}`)
// console.log(`Area of a 4-sided polygon with side 4 is: ${RegularPolygon.getArea(4,4)}`)
// console.log(`Area of a 5-sided polygon with side 4 is: ${RegularPolygon.getArea(5,4)}`)
// console.log(`Area of a 6-sided polygon with side 10 is: ${RegularPolygon.getArea(6,10)}`)
