class Polygon {

    name: string;
    sides: number;
    isConcave: boolean;
    isConvex: boolean;
    isEquiangular: boolean;
    isEquilateral: boolean;
    isRegular: boolean;
    isCiclic: boolean;
        
    constructor(name: string, sides: number, isConcave: boolean, isConvex: boolean, isEquiangular: boolean, isEquilateral: boolean, isRegular: boolean, isCiclic: boolean) {
        this.name = name;
        this.sides = sides;
        this.isConcave = isConcave;
        this.isConvex = isConvex;
        this.isEquiangular = isEquiangular;
        this.isEquilateral = isEquilateral;
        this.isRegular = isRegular;
        this.isCiclic = isCiclic;
    }
    
    
    toString(): string {
        return `This is a ${this.name} hence it has ${this.sides}`;
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

    toString() {
        return `This is a ${this.name} hence it has ${this.sides} with internal angles of ${this.intAngle} degrees and external angles of ${this.extAngle}`;
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


// const meuQuadrado = new Square();
// console.log(meuQuadrado)
// console.log(String(meuQuadrado))
console.log(String(new Square()))
console.log(String(new RegularPentagon()))
console.log(String(new RegularTriangle()))