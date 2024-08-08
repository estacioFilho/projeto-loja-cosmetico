import { utilities } from "./utilities.js";

const sacola = document.getElementById('filtro-back');
const iconeSacola = document.getElementById('sacola');
const checkCloseSacola = document.getElementById('checkbox-sacola')
const iconeSacolaMobile = document.getElementById('sacola-mobile');
const notificacaoSacola = document.querySelector('#notificacoes-sacola')
const notificacaoSacolaMobile = document.querySelector('#notificacoes-sacola-mobile')


sacola.style.display = 'none';
checkCloseSacola.style.display = 'none';
iconeSacolaMobile.addEventListener('click', () => {
    sacola.style.display = 'block'
})
iconeSacola.addEventListener('click', () => {
    sacola.style.display = 'block'
})

checkCloseSacola.addEventListener('change', () => {
    sacola.style.display = 'block' ? sacola.style.display = 'none' : '';
})

export default function atualizaSacola() {
    const areaProdutosSacola = document.getElementById('produtos-adicionados');
    areaProdutosSacola.innerHTML = '';
    utilities.listaProdutosLocalStorage('bag').forEach(produto => {

        let desconto = produto.discout > 1 ? produto.discout / 100 : produto.discout;
        let novoProduto = document.createElement('li');
        novoProduto.classList.add('produto-adicionando-sacola');
        novoProduto.innerHTML = `
                    <img class="imagem-produto-sacola" src="${produto.image}" alt="mascara">
                    <div class="conteiner-produto-adicionanado">
                        <div class="titulo-produto-sacola">
                            <p class="nome-produto-sacola">${produto.name}</p>
                            <button class="icone-lixeira-sacola" data-id="${produto.id}"></button>
                        </div>
                        <div class="quantidade-valor-produto">
                            <div class="quantity-control">
                                <button class="decrease" data-id="${produto.id}">-</button>
                                <span class="quantity" data-quatity>${produto.quantity}</span>
                                <button class="increase" data-id="${produto.id}">+</button>
                            </div>
                            <p class="precos-produto"><span class="preco_desconto_aplicado">${produto.price}</span><strong>R$ ${(produto.price - (desconto * produto.price)).toFixed(2)}</strong></p>
                        </div>
                    </div>
                `;

        areaProdutosSacola.appendChild(novoProduto);

        setTimeout(() => {
            novoProduto.classList.add('slide-in');
        }, 10);
    });



    const btnIncrementar = document.querySelectorAll('.increase');
    const btnDecrementar = document.querySelectorAll('.decrease');
    utilities.atualizaQuantidade(btnIncrementar, btnDecrementar);
    utilities.valorTotalFrete();
    utilities.atualizaNotificacao('bag', notificacaoSacola, notificacaoSacolaMobile)



    utilities.valorTotalFrete
    utilities.deletarProdutoLocalStorageInterface('bag', notificacaoSacola, notificacaoSacolaMobile);

}

document.addEventListener('DOMContentLoaded', () => {
    atualizaSacola()
    utilities.valorTotalFrete();
    utilities.atualizaNotificacao('bag', notificacaoSacola, notificacaoSacolaMobile)
});


