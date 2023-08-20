const RegisteredItemsWrapper = document.querySelector("#registered-items-wrapper");
const formElems = {prodCode: document.querySelector("#prod-code-input"),
                   prodName: document.querySelector("#prod-name-input"),
                   prodQty: document.querySelector("#prod-qty-input"),
                   prodUnPrice: document.querySelector("#prod-un-price-input")}
// const prodCode = document.querySelector("#prod-code");
// const prodName = document.querySelector("#prod-name");
// const prodQty = document.querySelector("#prod-qty");
// const prodUnPrice = document.querySelector("#prod-un-price");

const prodInfoForm = document.querySelector("#prod-info-form")

prodInfoForm.addEventListener("submit", (e) => {

    createNewItemRegister(formElems);
})

function createNewItemRegister(newItemObject) {

    const newTableRow = document.createElement("tr")
    newTableRow.setAttribute("class", "registered-item")

    let newTd;

    for (let [ key, itemInput ] of Object.entries(newItemObject)) {

        newTd = document.createElement("td");
        newTd.textContent = itemInput.value;
        newTd.setAttribute("class", key.replace("-input", ""));
        
        newTableRow.appendChild(newTd);
        // console.log(`key = ${key}: ${value}`)
    }
    
    newTd = document.createElement("td");
    newTd.textContent = parseInt(formElems.prodUnPrice.value) * parseInt(formElems.prodQty.value);
    newTd.setAttribute("class", "prod-total");
    newTableRow.appendChild(newTd);

    for (let itemInput of Object.entries(formElems)) {
        itemInput.value = "";
    }

    RegisteredItemsWrapper.appendChild(newTableRow)
}