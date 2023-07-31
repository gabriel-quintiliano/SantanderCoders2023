// O código abaixo é uma adaptação dos exemplos do Bootstrap disponíveis em:
// https://getbootstrap.com/docs/5.3/forms/validation/
// https://getbootstrap.com/docs/5.3/components/modal/

'use strict'

const successModalHTMLElem = document.getElementById('data-saved-successfully')
const successModalObject = new bootstrap.Modal(successModalHTMLElem)

// Fetch all the forms we want to apply custom Bootstrap validation styles to
const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
// Array.from(forms).forEach(form => {
    forms.forEach(form => {
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
})
