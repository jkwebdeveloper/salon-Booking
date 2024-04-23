const validateInput = async (form) => {
    const formElements = form.elements;
    let invalidInputs = [];
    let password = form.querySelector('#password');
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].hasAttribute('pattern')) {
            let pattern = new RegExp(formElements[i].getAttribute('pattern'));
            if (formElements[i].name != 'expried_on' && !pattern.test(formElements[i].value)) {
                invalidInputs.push(formElements[i]);
            }
        } else if (formElements[i].type == 'checkbox' && formElements[i].required && formElements[i].checked === false) {
            invalidInputs.push(formElements[i]);
        } else if (formElements[i].type == 'date' && formElements[i].required && formElements[i].value === '') {
            invalidInputs.push(formElements[i]);
        }
        if (formElements[i].name === 'cpassword' && formElements[i].value !== password.value) {
            invalidInputs.push(formElements[i]);
        }
    }
    return invalidInputs;
}

export default validateInput
