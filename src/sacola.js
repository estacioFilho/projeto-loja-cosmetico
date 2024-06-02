export default function visibilidadeSacola() {
    const sacola = document.getElementById('filtro-back');
    sacola.style.display = 'none';
    const iconeSacola = document.getElementById('sacola');
    const checkCloseSacola = document.getElementById('checkbox-sacola')
    const iconeSacolaMobile = document.getElementById('sacola-mobile');
    checkCloseSacola.style.display = 'none';
    const botaoFlutuante = document.getElementById('botao-flutuante')


    iconeSacolaMobile.addEventListener('click', () => {
        sacola.style.display = 'block'
        botaoFlutuante.style.display = 'none';
    })
    iconeSacola.addEventListener('click', () => {
        sacola.style.display = 'block'
        botaoFlutuante.style.display = 'none';
    })

    checkCloseSacola.addEventListener('change', () => {
        sacola.style.display = 'block' ? sacola.style.display = 'none' : '';
    })

}
visibilidadeSacola();

const areaProdutosSacola = document.getElementById('produtos-adicionados');
const proddutosSacolaImprotados = JSON.parse(localStorage.getItem("sacolaCompras"))
const notificacaoMobile = document.getElementById('notificacoes-sacola-mobile')
const notificacao = document.getElementById('notificacoes-sacola')
console.log(proddutosSacolaImprotados);
let count = 0;
document.addEventListener('DOMContentLoaded', () => {
    proddutosSacolaImprotados.forEach((produto) => {
        count++;
        let desconto = produto.desconto > 1 ? produto.desconto / 100 : produto.desconto

        areaProdutosSacola.innerHTML += `
            <li class="produto-adicionando-sacola">
                <img class="imagem-produto-sacola" src="${produto.imagem}" alt="mascara">
                <div class="conteiner-produto-adicionanado">
                    <div class="titulo-produto-sacola">
                        <p class="nome-produto-sacola">${produto.nome}</p>
                        <div class="icone-lixeira-sacola"></div>
                    </div>
                    <div class="quatidade-valor-produto">
                        <select class="quatidade-produto" name="select">
                            <option value="1" selected>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>
                        <p class="precos-produto"><span class="preco_desconto_aplicado">${produto.preco}</span><strong>R$ ${(produto.preco - (desconto * produto.preco)).toFixed(2)}</strong></p>
                    </div>
                </div>
            </li>
            
            `

    })
    notificacaoMobile.textContent = count;
    notificacao.textContent = count;
    const somatoria = document.getElementById('titulo-rodape-sacola');
    const soma = proddutosSacolaImprotados.reduce((acc, valor) => {
        let desconto = valor.desconto > 1 ? valor.desconto / 100 : valor.desconto;

        return (acc + (valor.preco - (valor.preco * desconto)))
    }, 0)
    somatoria.innerHTML = `R$ ${soma.toFixed(2)}`
    const valorFaltante = document.getElementById('valor-faltante-frete');
    const infoProgresso = document.getElementsByClassName('info-progresso-frete')[0];
    const barraProgresso = document.getElementById('progresso-frete-gratis')

    if (soma > 260) {
        barraProgresso.style.width = "100%";
        infoProgresso.innerHTML = `Você ganhou <strong>FRETE
            GRÁTIS!!!</strong>`
    } else {
        let percentualProgresso = (soma * 100) / 260;
        barraProgresso.style.width = `${percentualProgresso}%`;

        valorFaltante.innerHTML = `R$ ${260 - soma.toFixed(2)}`;
    }
})

