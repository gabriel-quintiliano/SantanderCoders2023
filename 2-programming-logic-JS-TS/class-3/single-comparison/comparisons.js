const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const operator = document.getElementById("operator");
const evalBtn = document.getElementById("eval-btn");
const result = document.getElementById("result");

evalBtn.addEventListener("click", () => {
    let expression = `${operand1.value} ${operator.value} ${operand2.value}`;
    let booleanResult = eval(expression);

    result.value = booleanResult;

    if (booleanResult) {
        result.style.backgroundColor = "#77E361"; // light green
        result.style.color = "rgb(84, 84, 84)"; // greyish

        return;
    }

    result.style.backgroundColor = "#DB4F4F" // light red
    result.style.color = "#E8E8E8" // greyish-white  
})