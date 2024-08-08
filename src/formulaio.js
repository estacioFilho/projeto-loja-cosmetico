
const botaoUsuario = document.getElementById('botao-icone-usuario');
const fundo = document.getElementById('filtro-back-form');
const checkbox = document.getElementById('checkbox-form-fechar')
const botaoUsuarioMobile = document.getElementById('form-botao-login');
const titulo = document.getElementsByClassName('form-titulo')[0];
const botaoCadastrar = document.getElementById('botao-cadastrar')
const formularioLogin = document.getElementById('formulario-login');
const formularioCadastro = document.getElementById('formulario-cadastro');

fundo.style.display = 'none';
checkbox.style.display = 'none';

const disponibilizarElementos = () => {
    fundo.style.display = 'block';
    fundo.style.display = 'flex';
    fundo.style.justifyContent = 'center';
    fundo.style.alignItems = 'center';
    formularioCadastro.style.display = 'none';
    formularioLogin.style.display = 'block';
    titulo.textContent = 'Login';
}

botaoUsuario.addEventListener('click', () => {
    disponibilizarElementos();
});
botaoUsuarioMobile.addEventListener('click', () => {
    disponibilizarElementos();
});

botaoCadastrar.addEventListener('click', () => {
    titulo.textContent = 'Cadastro';
    formularioLogin.style.display = 'none';
    formularioCadastro.style.display = 'block';
})
checkbox.addEventListener('change', () => {
    fundo.style.display = 'block' ? fundo.style.display = 'none' : "";
})
