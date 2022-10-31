const input = document.querySelector('#name-input');
const span = document.querySelector('#name-output');

input.addEventListener('input', (event) => {
    if (!event.currentTarget.value) {
        span.textContent = 'Anonymous'
        return;
    }
    span.textContent = event.currentTarget.value;
})