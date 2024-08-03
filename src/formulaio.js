const botaoUsuario = document.getElementById('botao-icone-usuario');
const fundo = document.getElementById('filtro-back-form');
const checkbox = document.getElementById('checkbox-form-fechar');
const botaoUsuarioMobile = document.getElementById('form-botao-login');
const botaoFlutuante = document.getElementById('botao-flutuante')

fundo.style.display = 'none';
checkbox.style.display = 'none'; 

botaoUsuario.addEventListener('click', () => {
    botaoFlutuante.style.display = 'none';
    fundo.style.display = 'block';
    fundo.style.display = 'flex';
    fundo.style.justifyContent = 'center';
    fundo.style.alignItems = 'center';
});
botaoUsuarioMobile.addEventListener('click', () => {
    botaoFlutuante.style.display = 'none';
    fundo.style.display = 'block';
    fundo.style.display = 'flex';
    fundo.style.justifyContent = 'center';
    fundo.style.alignItems = 'center';
});

checkbox.addEventListener('change', ()=>{
    fundo.style.display = 'block'? fundo.style.display = 'none': "";
})