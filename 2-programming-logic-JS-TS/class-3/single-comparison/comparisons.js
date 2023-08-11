const operand1 = document.getElementById("operand1");
const operand2 = document.getElementById("operand2");
const operator = document.getElementById("operator");
const evalBtn = document.getElementById("eval-btn");
const result = document.getElementById("result");

evalBtn.addEventListener("click", () => {
    let expression = `${operand1.value} ${operator.value} ${operand2.value}`;

    result.value = eval(expression);

    if (result.value === "true") {
        result.style.backgroundColor = "#77E361";
        result.style.color = "rgb(84, 84, 84)"
    } else {
        result.style.backgroundColor = "#DB4F4F"
        result.style.color = "#E8E8E8"
    }
})