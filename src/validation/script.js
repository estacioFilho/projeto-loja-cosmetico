import { utilities } from "../utilities.js";
const camposObrigatorios = document.querySelectorAll("[required]");
const senha = document.getElementById('form-input-senha-cadastro');
const confiSenha = document.getElementById('form-input-senha-cadastro-confirm');
const senhaLogin = document.getElementById('form-input-senha')
const visibLogin = document.getElementById('show-password-login')
const visibCadastroConfi = document.getElementById('show-password-cad-confi')
const visibCadastro = document.getElementById('show-password-cad')
const msgErroSenha = document.getElementById('mensagem-senha');
const msgErroSenhaConf = document.getElementById('msgErroSenhaConf');
const checkTermos = document.getElementById('checkbox-termos');
const formLogin = document.getElementById('formulario-login');

const botaoCadastro = document.getElementById('botao-submit-cadastrar');
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
camposObrigatorios.forEach((campo) => campo.addEventListener('blur', () => verificaCampo(campo)));
camposObrigatorios.forEach((campo) => campo.addEventListener('invalid', event => event.preventDefault()));

const tiposErros = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        typeMismatch: "Senhas diferente.",
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    tiposErros.forEach(erro => {
        if (campo.validity[erro]){
            mensagem = mensagens[campo.name][erro];
        }})

    const mensagemErro = campo.parentNode.querySelector('.mensagem-erro');
    const validadorInput = campo.checkValidity();
    if (!validadorInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
    senha.addEventListener('blur', () => validarRequisitosSenha(senha));
    confiSenha.addEventListener('blur', () => validarSeSenhaConferem());
}

function validarRequisitosSenha(campo) {
    if (!regex.test(campo.value)) {
        msgErroSenha.textContent = 'Requisitos: mínimo 8 caracteres, incluindo letras minúsculas, letras maiúsculas, números e caracteres especiais.';
    } else {
        msgErroSenha.textContent = '';
    }
}
function validarSeSenhaConferem() {
    if (senha.value === confiSenha.value) {
        msgErroSenhaConf.textContent = " ";
    } else {
        msgErroSenhaConf.textContent = mensagens.senha.typeMismatch
    }
}

const toggleVisibility = (inputs) => {
    inputs.forEach(input => {
        input.type = input.type === "password" ? "text" : "password";
    });
};

visibLogin.addEventListener('click', () => toggleVisibility([senhaLogin]));
visibCadastro.addEventListener('click', () => toggleVisibility([senha, confiSenha]));
visibCadastroConfi.addEventListener('click', () => toggleVisibility([senha, confiSenha]));


