
const menu = document.getElementById('filtro-back-menu');
const iconeMenu = document.getElementById('checkbox-menu');
const checkCloseMenu = document.getElementById('checkbox-fechar-menu');
const botaoFlutuante = document.getElementById('botao-flutuante');
const sacola = document.getElementById('filtro-back');



menu.style.display = 'none';
checkCloseMenu.style.display = 'none';

iconeMenu.addEventListener('click', () => {
    menu.style.display = 'block'
})

checkCloseMenu.addEventListener('change', () => {
    menu.style.display = 'block' ? menu.style.display = 'none' : '';
})




