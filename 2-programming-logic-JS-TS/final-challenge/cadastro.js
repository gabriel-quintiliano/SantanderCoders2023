const RegisteredItemsWrapper = document.querySelector("#registered-items-wrapper");
// const formElems = [document.querySelector("#prod-code"),
//                    document.querySelector("#prod-name"),
//                    document.querySelector("#prod-qty"),
//                    document.querySelector("#prod-un-price")]
const prodCode = document.querySelector("#prod-code");
const prodName = document.querySelector("#prod-name");
const prodQty = document.querySelector("#prod-qty");
const prodUnPrice = document.querySelector("#prod-un-price");

const prodInfoForm = document.querySelector("#prod-info-form")

prodInfoForm.addEventListener("submit", (e) => {

    e.preventDefault();
    const newItem = parseFormInfo();
    createNewItemRegister(newItem);
})

function parseFormInfo() {

    let newItemObject = {prodCode: prodCode.value,
                         prodName: prodName.value,
                         prodQty: prodQty.value,
                         prodUnPrice: prodUnPrice.value,
                         total: parseInt(prodUnPrice.value) * parseInt(prodQty.value)};

    return newItemObject;
}

function createNewItemRegister(newItemObject) {

    const newTableRow = document.createElement("tr")
    newTableRow.setAttribute("class", "registered-item")

    let newTd;

    for (let [ key, value ] of Object.entries(newItemObject)) {

        newTd = document.createElement("td");
        newTd.innerText = value;

        newTableRow.appendChild(newTd);
        // console.log(`key = ${key}: ${value}`)
    }

    RegisteredItemsWrapper.appendChild(newTableRow)
}