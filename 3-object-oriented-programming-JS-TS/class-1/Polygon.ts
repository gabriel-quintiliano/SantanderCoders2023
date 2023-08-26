interface IRegularPolygonHeir {
    getArea(): number;
    getPerimeter(): number;
}

class Polygon {

    name: string;
    sides: number;
    area?: number;
    perimeter?: number;
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
        this.area = area;
        this.perimeter = perimeter;
        this.isConcave = isConcave;
        this.isConvex = isConvex;
        this.isRegular = isRegular;
        this.isEquiangular = isEquiangular;
        this.isEquilateral = isEquilateral;
        this.isCyclic = isCyclic;
        this.isSimple = isSimple;
        this.isComplex = isComplex;
        this.classifications = [];

        for (let [ key, value ] of Object.entries(this)) {
            if (typeof value == "boolean") {
                if (value) {
                    this.classifications.push(key.replace("is","").toLowerCase())
                }
            }
        }

        this.strRepr = `${name} (${sides} sides) which is ${this.classifications.join(", ")}`
    }
    
    toString(): string {
        return this.strRepr;
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

    constructor(name: string, sides: number) {
        super(name, sides, true, false, true, true, true, true, true, false);
        this.intAngle = RegularPolygon.getIntAngle(sides);
        this.extAngle = RegularPolygon.getExtAngle(sides);
        this.intAngleSum = RegularPolygon.getIntAngleSum(sides);
    }

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

console.log(`this is a ${mySquare}`);
console.log(`${myRegularPentagon.name} has ${myRegularPentagon.sides} with internal angles of ${myRegularPentagon.intAngle} and external angles of ${myRegularPentagon.extAngle}`);
console.log(`A 21-sided regular polygon has internal angles of ${RegularPolygon.getIntAngle(21)} degrees`)