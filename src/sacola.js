import { utilities } from "./utilities.js";

const sacola = document.getElementById('filtro-back');
const iconeSacola = document.getElementById('sacola');
const checkCloseSacola = document.getElementById('checkbox-sacola')
const iconeSacolaMobile = document.getElementById('sacola-mobile');
const botaoFlutuante = document.getElementById('botao-flutuante')
const areaProdutosSacola = document.getElementById('produtos-adicionados');
const notificacaoSacola = document.querySelector('#notificacoes-sacola')
const notificacaoSacolaMobile = document.querySelector('#notificacoes-sacola-mobile')
const somatoria = document.getElementById('titulo-rodape-sacola');
const valorFaltante = document.getElementById('valor-faltante-frete');
const infoProgresso = document.getElementsByClassName('info-progresso-frete')[0];
const barraProgresso = document.getElementById('progresso-frete-gratis');


sacola.style.display = 'none';
checkCloseSacola.style.display = 'none';
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

export default function atualizaSacola() {
    areaProdutosSacola.innerHTML = '';

    utilities.listaProdutos('bag')
        .then(produtosSac => {
            produtosSac.forEach(produto => {
                let desconto = produto.discount > 1 ? produto.discount / 100 : produto.discount;
                let novoProduto = document.createElement('li');
                novoProduto.classList.add('produto-adicionando-sacola');
                novoProduto.innerHTML = `
                    <img class="imagem-produto-sacola" src="${produto.image}" alt="mascara">
                    <div class="conteiner-produto-adicionanado">
                        <div class="titulo-produto-sacola">
                            <p class="nome-produto-sacola">${produto.name}</p>
                            <button class="icone-lixeira-sacola" data-id="${produto._id}"></button>
                        </div>
                        <div class="quantidade-valor-produto">
                            <select class="quantidade-produto" name="select">
                                <option value="1" selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                            <p class="precos-produto"><span class="preco_desconto_aplicado">${produto.price}</span><strong>R$ ${(produto.price - (desconto * produto.price)).toFixed(2)}</strong></p>
                        </div>
                    </div>
                `;


                areaProdutosSacola.appendChild(novoProduto);


                setTimeout(() => {
                    novoProduto.classList.add('slide-in');
                }, 10);
            });
            utilities.atualizacaoNotificacoes('bag', notificacaoSacola, notificacaoSacolaMobile)
            

            const soma = produtosSac.reduce((acc, valor) => {
                let desconto = valor.discount > 1 ? valor.discount / 100 : valor.discount;

                return (acc + (valor.price - (valor.price * desconto)))
            }, 0)

            somatoria.innerHTML = `R$ ${soma.toFixed(2)}`

            if (soma > 260) {
                barraProgresso.style.width = "100%";
                infoProgresso.innerHTML = `Você ganhou <strong>FRETE
                GRÁTIS!!!</strong>`
            } else if (soma > 0 && soma < 260) {
                let percentualProgresso = (soma * 100) / 260;
                barraProgresso.style.width = `${percentualProgresso}%`;

                valorFaltante.innerHTML = `R$ ${(260 - soma).toFixed(2)}`;
            } else {
                barraProgresso.style.width = `${0}`;
            }


            document.querySelectorAll('.icone-lixeira-sacola').forEach((botao) => {
                botao.addEventListener('click', (event) => {
                        const id = event.target.getAttribute('data-id');
                        utilities.deletarProduto('bag', id);
                        event.target.closest('li').remove();
                        utilities.atualizacaoNotificacoes('bag', notificacaoSacola, notificacaoSacolaMobile)
                });
            })
        })
        .catch(error => {
            console.error('Erro ao atualizar sacola:', error);
        });


}



document.addEventListener('DOMContentLoaded', () => {
    atualizaSacola()
    utilities.atualizacaoNotificacoes('bag', notificacaoSacola, notificacaoSacolaMobile)
});

