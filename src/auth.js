import { utilities } from "./utilities.js";

const senha = document.getElementById('form-input-senha-cadastro');
const senhaConf = document.getElementById('form-input-senha-cadastro-confirm')
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
            formCadastro.reset();
            formCadastro.style.display = 'none';
            formLogin.style.display = 'block';
        })
        .catch((error) => {
            alert(error)
        });
});

// formLogin.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const userLogin = {
//         email: emailLogin.value,
//         password: senhaLogin.value
//     }
//     console.log(userLogin)
//     utilities.login('login', userLogin)
//         .then((response) => {
//             console.log(response.token)
//             localStorage.setItem("token-acesso", response.token)
//             formLogin.reset();
//             alert(response.message);
//         })
//         .catch((error) => {
//             console.error('Falha no login. ' + error)
//         })

//     const token = localStorage.getItem("token-acesso")

//     console.log(token)

//     utilities.autenticacao('api/protected', token)
//         .then((response) => {
//             location.href = '../pages/boasvindas.html';
//             alert(response.message)
//         })
//         .catch((error) => console.error('Erro na autenticação:', error))

// })
formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    const userLogin = {
        email: emailLogin.value,
        password: senhaLogin.value
    };

    // Função de login
    utilities.login('login', userLogin)
        .then((response) => {
            if (response.token) {
                // Armazena o token no localStorage
                localStorage.setItem("token-acesso", response.token);
                alert(response.message);
                let token = localStorage.getItem('token-acesso')
                console.log(token)
                // Executa a autenticação usando o token armazenado
                utilities.autenticacao('api/protected', token)
                    .then((response) => {
                        location.href = '../pages/boasvindas.html';
                        alert(response.message);
                    })
                    .catch((error) => console.error('Erro na autenticação:', error));
            } else {
                console.error('Falha no login: token não recebido');
                alert('Falha no login');
            }
        })
        .catch((error) => {
            console.error('Falha no login:', error);
            alert('Falha no login. ' + error);
        })
        .finally(() => {
            formLogin.reset();
        });
});