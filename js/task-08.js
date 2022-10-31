const form = document.querySelector('.login-form');
const inputs = document.querySelectorAll('.login-form input');

const onFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = event.currentTarget.elements;
    const formData = {
        email: email.value,
        password: password.value
    }

    inputs.forEach(input => {
        if (!input.value) {
            alert('Будь-ласка, заповніть всі поля');
        }
    })

    console.log(formData);
    event.currentTarget.reset();
};

form.addEventListener('submit', onFormSubmit);
