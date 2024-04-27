'use strict'
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const loginButton = document.getElementById('login-button');


loginButton.addEventListener('click', () => {
    
    const email = emailInput.value;
    const password = passwordInput.value;


    if (email.trim() === '' || password.trim() === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

   
    if (email === 'vitoria@gmail.com' && password === '1234') {
        alert('Login bem sucedido!');
        window.location.href = 'home.html';
    } else {
        alert('LOGIN ou SENHA inválidas. Por favor, tente novamente.');
    }
});

passwordInput.addEventListener('input', () => {
    passwordInput.setAttribute('type', 'password');
});
