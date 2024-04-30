'use strict'

const button = document.getElementById('login-button')

const validarLogin = async () => {
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const urlLogin = 'https://back-login.vercel.app/usuarios'
    const listUsers = await fetch(urlLogin)
    const objUsers = await listUsers.json()

    if (!email || !password) {
        alert('Por favor, preencha todos os campos!')
    } else {
        let validaUser = false

        objUsers.forEach(user => {
            if (user.email === email && user.senha === password) {
                validaUser = true
                window.location.href = 'home.html'
            }
        });

        if (!validaUser) {
            alert('Login ou senha inválidos!!')
        }
    }
};

button.addEventListener('click', () => {
    validarLogin()
});
