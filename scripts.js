const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

})

function checkInputs() {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    checkEmpty(firstNameValue, firstName, 'First name cannot be empty');
    checkEmpty(lastNameValue, lastName, 'Last name cannot be empty');
    checkEmpty(emailValue, email, 'Email cannot be empty');
    checkEmpty(passwordValue, password, 'Password cannot be empty');
}

function checkEmpty (value, input, message) {
    if (value === '') {
        //show error
        //add error class
        setErrorFor(input, message);
    }
    else {
        //add success class
        setSuccessFor(input);
    }
}

function setErrorFor (input, message) {
    const formControl = input.parentElement;
    const text = formControl.querySelector('p');
    text.innerText = message;
    formControl.className = 'input error';
}

function setSuccessFor (input) {
    const formControl = input.parentElement;
    formControl.className = 'input';
}