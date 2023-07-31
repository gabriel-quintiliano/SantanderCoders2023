const noClientsReplacementForTable = document.querySelector('#noClientsReplacementForTable')
let lastClickedElement = null;


// Add um event listener no documento para que sempre tenhamos a info de qual foi o último elemento clicado
// para que se necessária alguma ação imediata, esta seja aplicada em lastClickedElement
document.addEventListener('click', (event) => {
    lastClickedElement = event.target;
});


// Função para remover o cadastro de clientes e caso não houver mais nenhum, esconder a tabela, substituindo esta
// pela mensagem de que não há clientes cadastrados
function removeCurTableRow() {

    let htmlElem = lastClickedElement;
    // debugger;
    console.log('antes do loop', htmlElem);
    while (htmlElem.nodeName !== "TR") {
        console.log('dentro do loop', htmlElem);
        if ((htmlElem = htmlElem.parentNode) === null) {
            return;
        }
    }
        
    // Neste momento htmlElem = <tr>...</tr>
    let tmp = htmlElem;
    htmlElem = htmlElem.parentNode
    
    tmp.remove();
    
    while (htmlElem.nodeName !== "TABLE") {
        console.log('dentro do outro loop', htmlElem);
        if ((htmlElem = htmlElem.parentNode) === null) {
            return;
        }
    }

    let tbodies = htmlElem.tBodies;
    // Agora htmlElem = <table>...</table>
    for (tbody of tbodies) {
        if (tbody.childElementCount > 0) {
            return;
        }
    }

    htmlElem.classList.add('hidden');
    noClientsReplacementForTable.classList.remove('hidden');
}