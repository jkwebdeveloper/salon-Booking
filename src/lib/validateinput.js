const validateInput = async (form) => {
    const formElements = Array.from(form.elements);
    const invalidInputs = [];

    const passwordInput = form.querySelector('#password');

    formElements.forEach(element => {
        try {
            if (element.hasAttribute('pattern')) {
                const pattern = new RegExp(element.getAttribute('pattern'));
                if (!pattern.test(element.value) || element.validity.valueMissing || element.validity.patternMismatch) {
                    invalidInputs.push(element);
                }
            } else if (element.required && element.value === '') {
                invalidInputs.push(element);
            } else if (element.type === 'checkbox' && element.required && !element.checked) {
                invalidInputs.push(element);
            } else if (element.type === 'date' && element.required && !element.value) {
                invalidInputs.push(element);
            }

            if (element.id === 'cpassword' && element.value !== passwordInput.value) {
                invalidInputs.push(element);
                element.addEventListener('input', () => {
                    passwordInput.classList.remove('border-red-500', 'text-red-500', 'invalid');
                });
            }

            if (element.name === 'password') {
                element.addEventListener('input', () => {
                    const confirmPasswordInput = form.querySelector('#cpassword');
                    if (confirmPasswordInput) {
                        confirmPasswordInput.classList.remove('border-red-500', 'text-red-500', 'invalid');
                    }
                });
            }
        } catch (error) {
            // Handle errors here (e.g., log to console, display error message)
            console.error('Validation error:', error);
        }
    });

    return invalidInputs;
};

export default validateInput;
