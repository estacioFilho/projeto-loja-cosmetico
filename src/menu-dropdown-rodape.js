document.addEventListener('DOMContentLoaded', function () {
    const checkbox1 = document.getElementById('checkbox01');
    const checkbox2 = document.getElementById('checkbox02');
    const checkbox3 = document.getElementById('checkbox03');
    const rodape1 = document.getElementById('rodape01');
    const rodape2 = document.getElementById('rodape02');
    const rodape3 = document.getElementById('rodape03');

    checkbox1.addEventListener('change', function () {
        rodape1.style.display = checkbox1.checked ? 'block' : 'none';
    });

    checkbox2.addEventListener('change', function () {
        rodape2.style.display = checkbox2.checked ? 'block' : 'none';
    });

    checkbox3.addEventListener('change', function () {
        rodape3.style.display = checkbox3.checked ? 'block' : 'none';
    });
});
