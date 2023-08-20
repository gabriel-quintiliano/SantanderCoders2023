const prodInfoForm = document.querySelector("#prod-info-form");
const itemsTableTbody = document.querySelector("#registered-items-wrapper");


prodInfoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let item = parseItemInfo(prodInfoForm);

    const newTr = document.createElement("tr");
    newTr.setAttribute("class", "registered-item");
    
    let newTd;

    for (let [ key, value ] of Object.entries(item)) {
        
        newTd = document.createElement("td");
        newTd.setAttribute("class", key);
        newTd.textContent = value;

        newTr.appendChild(newTd);
    }

    itemsTableTbody.appendChild(newTr);

})


function parseItemInfo(form) {

    let itemObject = {}

    for (let formInput of form) {
        if (formInput.tagName != "INPUT") {
            continue;
        }

        key = formInput.id.replace("-input", "");

        itemObject[key] = formInput.type == "number" ? parseInt(formInput.value) : formInput.value;
        formInput.value = ""; // limpa o valor para um futuro input
    }

    itemObject["prod-total"] = (itemObject["prod-un-price"] * itemObject["prod-qty"]).toFixed(2);    
    itemObject["prod-un-price"] = itemObject["prod-un-price"].toFixed(2);

    return itemObject;
}