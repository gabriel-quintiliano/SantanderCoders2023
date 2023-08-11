// O código abaixo é uma adaptação dos exemplos do Bootstrap disponíveis em:
// https://getbootstrap.com/docs/5.3/forms/validation/
// https://getbootstrap.com/docs/5.3/components/modal/

'use strict'

const successModalHTMLElem = document.getElementById('data-saved-successfully')
const successModalObject = new bootstrap.Modal(successModalHTMLElem)

// Pega o formulário que precisa de validação
const form = document.querySelector('.needs-validation')

// Pega o botão cancelar (type="reset") de dentro do mesmo form
const resetButton = form.querySelector("button[type='reset']")
// Ao ser clicado, este vai além de resetar os valores, resetar a validação do bootstrap
resetButton.addEventListener("click", () => form.classList.remove('was-validated'))

// Para o modal do bootstrap não sumir imediatamente (visto o recarregamento da página depois do submit)
// eu fiz com que o submit ocorre na verdade ao clicar no botão que fecha o modal (eu suspeito muito que
// existem jeitos muito melhores de se fazer isso)
form.addEventListener('submit', event => {
    event.preventDefault();

    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add('was-validated')
    } else {
        successModalObject.show()
        const closebutton = successModalHTMLElem.querySelector(".btn-close")

        closebutton.addEventListener("click", () => {form.submit()})
    }
}, false)

