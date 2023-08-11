const comparisonsWrapper = document.getElementById("comparisons-wrapper");
const operand1Collection = comparisonsWrapper.getElementsByClassName("operand1");
const operand2Collection = comparisonsWrapper.getElementsByClassName("operand2");
const operatorCollection = comparisonsWrapper.getElementsByClassName("operator");
const resultCollection = comparisonsWrapper.getElementsByClassName("result");

comparisonsWrapper.addEventListener("change", e => {
    const elemClicked = e.target;

    if (elemClicked.className.includes("operand1")) {
        spreadValue(elemClicked.value, operand1Collection);
    } else if (elemClicked.className.includes("operand2")) {
        spreadValue(elemClicked.value, operand2Collection);
    }
})

comparisonsWrapper.addEventListener("click", e => {
    const listenerOwner = e.currentTarget;
    const elemClicked = e.target;

    // Somente se o elemento clicado foi o botão de avaliação é que iremos avaliar a expressão
    if (elemClicked.className.includes("eval-button")) {

        const zippedValues = zip(operand1Collection, operand2Collection, operatorCollection, resultCollection);
        let expression = "";

        for (let [operand1, operand2, operator, result] of zippedValues) {
            expression = `${operand1.value} ${operator.value} ${operand2.value}`;
            result.value = eval(expression);
            
            // Estilização do resultado de acordo com o valor obtido
            if (result.value === "true") {
                result.style.backgroundColor = "#77E361";
                result.style.color = "rgb(84, 84, 84)"
            } else {
                result.style.backgroundColor = "#DB4F4F"
                result.style.color = "#E8E8E8"
            }
        }
    }
})

function spreadValue(valueToSpread, htmlElemsCollection) {
    for (elem of htmlElemsCollection) {
        elem.value = valueToSpread;
    }
}

// O chat GPT me ajudou com essa função pois eu questionei de havia no JavaSript uma função
// equivalente a função nativa zip() de python.
function zip(...arrays) {
    const length = Math.min(...arrays.map(arr => arr.length));
    const result = [];
  
    for (let i = 0; i < length; i++) {
      result.push(arrays.map(arr => arr[i]));
    }
  
    return result;
}