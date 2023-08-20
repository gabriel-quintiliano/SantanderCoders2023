let num = 50;

while (num > 0) {
    document.write(num, " ")
    num--;
}

document.write("<br /> <br />")

num = 100;

while (num <= 200) {
    document.write(num % 2 == 0 ? num : " - ");
    num++;
}

document.write("<br /> <br />")

num = 99;

num = num % 2 == 0 ? num - 1 : num;

while (num >= 1) {
    document.write(num % 2 == 0 ? " - " : num);
    num--;
}

document.write("<br /> <br />")

for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 10; col++) {
        document.write("*")
    }
    document.write("<br />")
}

document.write("<br /> <br />") // + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + -

function makeLeftPiramid(height) {
    
    for (let row = 0; row < height; row++) {
        
        for (let i = 0; i < row + 1; i++) {
            document.write("*")
        }
        document.write("<br />")
    }
    
}

makeLeftPiramid(4)
document.write("<br />") // + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - 

function makeRightPiramid(height) {

    document.write("<pre>") // otherwise all the consecutive blankspaces wouldn't show
    
    for (let row = 0; row < height; row++) {
        
        let filledSpaces = row + 1;
        let blankSpaces = height - filledSpaces;
        
        for (let i = 0; i < blankSpaces; i++) {
            document.write(" ")
        }
        
        for (let i = 0; i < filledSpaces; i++) {
            document.write("*")
        }
        
        document.write("<br />")
        
    }
    
    document.write("</pre>") // just the closure of the <pre> tag
}

makeRightPiramid(4)
document.write("<br />") // + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - 

function makeFullPiramid(height) {

    document.write("<pre>") // otherwise all the consecutive blankspaces wouldn't show
    
    for (let row = 0; row < height; row++) {
        // debugger;
        let filledSpaces = row + 1;
        let blankSpaces = height - filledSpaces;
        
        for (let i = 0; i < blankSpaces; i++) {
            document.write(" ")
        }
        
        for (let i = 0; i < filledSpaces*2; i++) {
            document.write("*")
        }
        
        document.write("<br />")
        
    }
    
    document.write("</pre>") // just the closure of the <pre> tag
}

makeFullPiramid(6)
document.write("<br />") // + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - 


function makeSeparatedPiramids(height, spaceBetween) {

    document.write("<pre>") // otherwise all the consecutive blankspaces wouldn't show
    
    for (let row = 0; row < height; row++) {
        // debugger;
        let filledSpaces = row + 1;
        let blankSpaces = height - filledSpaces;
        
        for (let i = 0; i < blankSpaces; i++) {
            document.write(" ")
        }
        
        for (let i = 0; i < filledSpaces; i++) {
            document.write("*")
        }

        for (let i = 0; i < spaceBetween; i++) {
            document.write(" ")
        }

        for (let i = 0; i < filledSpaces; i++) {
            document.write("*")
        }
        
        document.write("<br />")
        
    }
    
    document.write("</pre>") // just the closure of the <pre> tag
}

makeSeparatedPiramids(6, 2)
document.write("<br />") // + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + -

function makeInvetedPiramid(height) {

    let maxChars = height*2-1
    let fills = maxChars - 2
    let blanks = 0

    document.write("<pre>")

    for (let row=0; row < height-1; row++, fills -=2, blanks ++) {

        for (let i = 0; i < blanks; i++) {
            document.write(" ")
        }

        document.write("*")

        for (let i = 0; i < fills; i++) {
            document.write("=")
        }

        document.write("*<br />")
    }
    
    for (let i = 0; i < blanks; i++) {
        document.write(" ")
    }

    document.write("*")
    document.write("</ pre>")
}

makeInvetedPiramid(5)
document.write("<br />") // + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + - + -

function makeInvetedPiramidV2(height) {
    let maxChars = height*2-1
    let fills = maxChars - 2
    let blanks = 0

    // &nbsp é a character entity para espaço " "
    for (let row=0; row < height-1; row++, fills -=2, blanks ++) {
        document.write("&nbsp".repeat(blanks), "*", "=".repeat(fills), "*<br />")
    }
    
    document.write("&nbsp".repeat(blanks), "*") 
}

makeInvetedPiramidV2(7)