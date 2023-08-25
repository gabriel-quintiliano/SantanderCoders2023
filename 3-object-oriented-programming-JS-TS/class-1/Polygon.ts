class Polygon {

    name: string;
    sides: number;
    isConcave: boolean;
    isConvex: boolean;
    isRegular: boolean;
    isEquiangular: boolean;
    isEquilateral: boolean;
    isCiclic: boolean;
    caracteristics: Array<string>;

    private strRepr: string;
        
    constructor(name: string, sides: number, isConcave: boolean, isConvex: boolean, isRegular: boolean, isEquiangular: boolean, isEquilateral: boolean, isCiclic: boolean) {
        this.name = name;
        this.sides = sides;
        this.isConcave = isConcave;
        this.isConvex = isConvex;
        this.isRegular = isRegular;
        this.isEquiangular = isEquiangular;
        this.isEquilateral = isEquilateral;
        this.isCiclic = isCiclic;
        this.caracteristics = [];

        for (let [ key, value ] of Object.entries(this)) {
            if (typeof value == "boolean") {
                if (value) {
                    this.caracteristics.push(key.replace("is","").toLowerCase())
                }
            }
        }

        this.strRepr = `${name} (${sides} sides) which is ${this.caracteristics.join(", ")}`
    }
    
    
    toString(): string {
        return this.strRepr;
    }
}

class IrregularPolygon extends Polygon {

    angles: Array<number>;

    constructor(name: string, sides: number, angles: Array<number>, isConcave: boolean, isConvex: boolean, isEquiangular: boolean, isEquilateral: boolean) {
        super(name, sides, isConcave, isConvex, false, isEquiangular, isEquilateral, false);
        this.angles = angles;
    }

}

class RegularPolygon extends Polygon {

    intAngle: number;
    extAngle: number;
    intAngleSum: number;
    extAngleSum: number = 360;

    constructor(name: string, sides: number) {
        super(name, sides, true, false, true, true, true, true);
        this.intAngle = RegularPolygon.getIntAngle(sides);
        this.extAngle = RegularPolygon.getExtAngle(sides);
        this.intAngleSum = RegularPolygon.getIntAngleSum(sides);
    }

    static getIntAngle(sides: number): number {
        return 180 - 360 / sides
    }

    static getExtAngle(sides: number): number {
        return 360 / sides;
    }

    static getIntAngleSum(sides: number): number {
        return 180 * sides - 360
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

const meuQuadrado = new Square();
console.log(meuQuadrado)
console.log(String(meuQuadrado))
console.log(String(new Square()))
console.log(String(new RegularPentagon()))
console.log(String(new RegularTriangle()))
