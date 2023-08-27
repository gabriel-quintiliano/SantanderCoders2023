function getArea(sides: number, sideLen: number): number{
    // Area = (Perimeter * apothem) / 2
    // Area = (sideLen*sides * apothem) / 2
    
    let apothem: number = getApothem(sides, sideLen);
    let polArea: number = (sideLen * sides * apothem) / 2

    // returns the area with up to 3 decimal digits
    return Number(polArea.toFixed(3))
}

function getApothem(sides: number, sideLen: number): number{
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


console.log(`Area of a 4-sided polygon with side 2 is: ${getArea(4,2)}`)
console.log(`Area of a 4-sided polygon with side 3 is: ${getArea(4,3)}`)
console.log(`Area of a 4-sided polygon with side 4 is: ${getArea(4,4)}`)
console.log(`Area of a 5-sided polygon with side 4 is: ${getArea(5,4)}`)
console.log(`Area of a 6-sided polygon with side 10 is: ${getArea(6,10)}`)