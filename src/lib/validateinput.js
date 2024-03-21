const validateInput = async (form) => {
    const formElements = form.elements;
    let invalidInputs = [];
    for (let i = 0; i < formElements.length; i++) {
        if (formElements[i].hasAttribute('pattern')) {
            let pattern = new RegExp(formElements[i].getAttribute('pattern'));
            if (!pattern.test(formElements[i].value)) {
                invalidInputs.push(formElements[i]);
            }
            // elementwithpattern.push(formElements[i]);
        }
    }
    return invalidInputs;
}

export default validateInput
