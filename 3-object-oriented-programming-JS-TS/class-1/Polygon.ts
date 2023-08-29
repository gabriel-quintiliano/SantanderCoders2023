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
