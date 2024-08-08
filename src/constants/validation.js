const Validation = {
    surname: {
        msg: 'Surname is Required',
        pattern: '[A-Za-z]{2,}',
    },
    firstname: {
        msg: 'First Name is Required',
        pattern: '[A-Za-z]{2,}',
    },
    lastname: {
        msg: 'Last Name is Required',
        pattern: '[A-Za-z]{2,}',
    },
    email: {
        msg: 'Enter valid Email Id',
        // pattern: '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$',
        pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$',
    },
    password: {
        msg: 'Min 8 Characters with a mix of Letters, Numbers & Symbols',
        pattern: '^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$',
    },
    confirmPassword: {
        msg: 'Password does not match',
        pattern: '',
    },
    phone: {
        msg: 'Enter a valid Phone Number',
        pattern: '[0-9]{10}',
    },
    otp: {
        msg: 'Enter a valid OTP',
        pattern: '[0-9]{6}',
    },
    country: {
        msg: 'Country is Required',
        pattern: '[A-Za-z]{2,}',
    },
    state: {
        msg: 'State is Required',
        pattern: '[A-Za-z]{2,}',
    },
    city: {
        msg: 'City is Required',
        pattern: '[A-Za-z]{2,}',
    },
    dob: {
        msg: 'Valid Date of Birth is Required',
        pattern: 'd{4}-d{1,2}-d{1,2}',
    },
    address: {
        msg: 'Address is Required',
        pattern: '.+',
    },
    salon_type: {
        msg: 'Address is Required',
        pattern: '.+',
    },
    postcode: {
        msg: 'Postcode should be 6 digit',
        pattern: '[0-9]{6}',
    },
    cardholder: {
        msg: 'Card Holder Name is Required',
        pattern: '^[a-zA-Z]{1,}( [a-zA-Z]+)*$',
    },
    cardnumber: {
        msg: 'Enter 16 Digit Card Number',
        pattern: '[0-9]{16}',
    },
    cardexpiry: {
        msg: 'Valid Expiry Date Required',
        pattern: '\w{1,2}\/\w{2,4}',
    },
    expirydate: {
        msg: 'Valid Expiry Date Required',
        pattern: 'd{4}-d{1,2}-d{1,2}',
    },
    cvv: {
        msg: 'Enter 3 Digit CVV',
        pattern: '[0-9]{3,}',
    },
    title: {
        msg: 'Title is Required',
        pattern: '.+',
    },
    amount: {
        msg: 'Enter valid Amount',
        pattern: '[0-9]+([.,][0-9]+)?',
    },
    servicename: {
        msg: 'Service Name is Required',
        pattern: '^[a-zA-Z]{1,}( [a-zA-Z]+)*$',
    },
    price: {
        msg: 'Enter valid Price',
        pattern: '[0-9]+([.,][0-9]+)?',
    },
    saleprice: {
        msg: 'Enter valid Sale Price',
        pattern: '[0-9]+([.,][0-9]+)?',
    },
    product_name: {
        msg: 'Product Name is Required',
        pattern: '^[a-zA-Z]{1,}( [a-zA-Z]+)*$',
    },
    supplier_name: {
        msg: 'Supplier Name is Required',
        pattern: '^[a-zA-Z]{1,}( [a-zA-Z]+)*$',
    },
    contact_person: {
        msg: 'Contact Person is Required',
        pattern: '^[a-zA-Z]{1,}( [a-zA-Z]+)*$',
    },
    unit_price: {
        msg: 'Unit Price is Required',
        pattern: '[0-9]+([.,][0-9]+)?',
    },
    quantity: {
        msg: 'Quantity is Required',
        pattern: '[0-9]{1,}',
    },
    description: {
        msg: 'Description is Required',
        pattern: '^[a-zA-Z]{1,}',
    },
};

export default Validation;
