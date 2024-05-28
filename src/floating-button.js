const btnNotificaco = document.getElementById('botao-flutuante-notificacao')
btnNotificaco.innerHTML = Math.round(Math.random() * 10);

const botaoFlutuante = document.getElementById('botao-flutuante');
const msg = document.querySelector('.botao-flutuante-msg'); 

botaoFlutuante.addEventListener('mousemove', function () {
    msg.classList.add('btn_floating_active');
});
botaoFlutuante.addEventListener('mouseout', function () {
    msg.classList.remove('btn_floating_active');
});
