/** @format */

let form = document.getElementById('form'),
    button = document.getElementById('button'),
    nameInput = document.getElementById('name'),
    emailInput = document.getElementById('email'),
    textareaInput = document.getElementById('textarea'),
    invalid = document.querySelector('.invalid');

form.addEventListener('submit', function (event) {
    event.preventDefault();
});

// --- button ---
button.addEventListener('click', function () {
    if (
        nameInput.classList.contains('fail') ||
        emailInput.classList.contains('fail') ||
        textareaInput.classList.contains('fail')
    ) {
        alert('Form is not valid');
    } else if (
        nameInput.classList.contains('success') &&
        emailInput.classList.contains('success') &&
        textareaInput.classList.contains('success')
    ) {
        alert('thank you');
        nameInput.value = '';
        emailInput.value = '';
        textareaInput.value = '';
        nameInput.classList = 'col-12';
        emailInput.classList = 'col-12';
        textareaInput.classList = 'col-12';
    } else if (
        textareaInput.value.length === 0 &&
        emailInput.value.length === 0 &&
        nameInput.value.length === 0
    ) {
        alert('form is empty');
    }
});

nameInput.addEventListener('input', function (event) {
    if (nameInput.value.length < 5 && nameInput.value.length > 0) {
        nameInput.classList.add('fail');
        nameInput.classList.remove('success');
    } else if (nameInput.value.length >= 5) {
        nameInput.classList.add('success');
        nameInput.classList.remove('fail');
    } else {
        nameInput.classList = 'col-12';
    }
});

emailInput.addEventListener('input', function (event) {
    if (!isEmail(emailInput.value)) {
        emailInput.classList.add('fail');
        emailInput.classList.remove('success');
        invalid.style.opacity = '1';
    } else if (isEmail(emailInput.value)) {
        emailInput.classList.add('success');
        emailInput.classList.remove('fail');
        invalid.style.opacity = '0';
    }
    if (emailInput.value.length === 0) {
        emailInput.classList = 'col-12';
        invalid.style.opacity = '0';
    }
});

textareaInput.addEventListener('input', function (event) {
    if (textareaInput.value.length < 5 && textareaInput.value.length > 0) {
        textareaInput.classList.add('fail');
        textareaInput.classList.remove('success');
    } else if (textareaInput.value.length >= 5) {
        textareaInput.classList.add('success');
        textareaInput.classList.remove('fail');
    } else {
        textareaInput.classList = 'col-12';
    }
});

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
