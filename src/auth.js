import { utilities } from "./utilities.js";

const senha = document.getElementById('form-input-senha-cadastro');
const nome = document.getElementById('form-input-nome-cadastro');
const email = document.getElementById('form-input-email-cadastro');
const senhaLogin = document.getElementById('form-input-senha');
const emailLogin = document.getElementById('form-input-email');
const formCadastro = document.getElementById('formulario-cadastro');
const formLogin = document.getElementById('formulario-login');

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    const user = {
        name: nome.value,
        email: email.value,
        password: senha.value
    };

    utilities.cadastrarUsuario('register', user)
        .then((response) => {
            alert(response.message);
        })
        .catch((error) => {
            console.error('Erro ao cadastrar usuário:', error);
        });
});

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const userLogin = {
        email: emailLogin.value,
        password: senhaLogin.value
    }

    utilities.login('login', userLogin)
        .then((response) => {
            localStorage.setItem("token-acesso", response.token)
            console.log(response.token);
        })
        .catch((error) => {
            console.error('Erro ao fazer login:', error)
        })
    const token = localStorage.getItem("token-acesso")
    utilities.autenticacao('api/protected', token)
        .then((response) => {
            location.href = '../pages/boasvindas.html';
            alert(response.message)
            })
        .catch((error) => console.error('Erro na autenticação:', error))

})