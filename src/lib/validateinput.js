const validateInput = async (form) => {
    const formElements = form.elements;
    let invalidInputs = [];
    let password = form.querySelector('#password');
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].hasAttribute('pattern')) {
            let pattern = new RegExp(formElements[i].getAttribute('pattern'));
            // !pattern.test(formElements[i].value) || 
            if (!pattern.test(formElements[i].value) || (formElements[i]?.validity?.valueMissing || formElements[i]?.validity?.patternMismatch)) {
                invalidInputs.push(formElements[i]);
            }
        } else if (formElements[i].type == 'checkbox' && formElements[i].required && formElements[i].checked === false) {
            invalidInputs.push(formElements[i]);
        } else if (formElements[i].type == 'date' && formElements[i].required && formElements[i].value === '') {
            invalidInputs.push(formElements[i]);
        }
        if (formElements[i].id === 'cpassword' && formElements[i].value !== password.value) {
            invalidInputs.push(formElements[i]);
            formElements[i].addEventListener("input", () => {
                password.classList.remove("border-red-500", "text-red-500", 'invalid');
            });
        }
        if (formElements[i].name === 'password') {
            formElements[i].addEventListener("input", () => {
                const cpassword = form.querySelector('#cpassword');
                cpassword && cpassword.classList.remove("border-red-500", "text-red-500", 'invalid');
            });
        }
    }
    return invalidInputs;
}

export default validateInput
