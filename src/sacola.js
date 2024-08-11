import { utilities } from "./utilities.js";

const sacola = document.getElementById('filtro-back');
const iconeSacola = document.getElementById('sacola');
const checkCloseSacola = document.getElementById('checkbox-sacola');
const iconeSacolaMobile = document.getElementById('sacola-mobile');
const notificacaoSacola = document.querySelector('#notificacoes-sacola');
const notificacaoSacolaMobile = document.querySelector('#notificacoes-sacola-mobile');

document.addEventListener('DOMContentLoaded', () => {
    setupSacolaEvents();
    atualizaSacola();
    utilities.valorTotalFrete();
    utilities.atualizaNotificacao('bag', notificacaoSacola, notificacaoSacolaMobile);
});

function setupSacolaEvents() {
    sacola.style.display = 'none';
    checkCloseSacola.style.display = 'none';
    iconeSacolaMobile.addEventListener('click', () => {
        sacola.style.display = 'block'
    })

    iconeSacola.addEventListener('click', (event) => {
        event.preventDefault();
        sacola.style.display = 'block'

    })

    checkCloseSacola.addEventListener('change', () => {
        sacola.style.display = sacola.style.display === 'block' ? 'none' : 'block';
    });
}


export default function atualizaSacola() {
    const areaProdutosSacola = document.getElementById('produtos-adicionados');
    areaProdutosSacola.innerHTML = '';

    const produtos = utilities.listaProdutosLocalStorage('bag');
    produtos.forEach(produto => {
        let desconto = produto.discount > 1 ? produto.discount / 100 : produto.discount;
        const novoProduto = criarProdutoElemento(produto, desconto);

        areaProdutosSacola.appendChild(novoProduto);
        setTimeout(() => {
            novoProduto.classList.add('slide-in');
        }, 10);
    });

    const btnIncrementar = document.querySelectorAll('.increase');
    const btnDecrementar = document.querySelectorAll('.decrease');
    utilities.atualizaQuantidade(btnIncrementar, btnDecrementar);
    utilities.valorTotalFrete();
    utilities.deletarProdutoLocalStorageInterface('bag', notificacaoSacola, notificacaoSacolaMobile, '.icone-lixeira-sacola');
    utilities.atualizaNotificacao('bag', notificacaoSacola, notificacaoSacolaMobile);
}

function criarProdutoElemento(produto, desconto) {
    const novoProduto = document.createElement('li');
    novoProduto.classList.add('produto-adicionando-sacola');
    novoProduto.innerHTML = `
        <img class="imagem-produto-sacola" src="${produto.image}" alt="${produto.name}">
        <div class="conteiner-produto-adicionanado">
            <div class="titulo-produto-sacola">
                <p class="nome-produto-sacola">${produto.name}</p>
                <button class="icone-lixeira-sacola" data-id="${produto.id}"></button>
            </div>
            <div class="quantidade-valor-produto">
                <div class="quantity-control">
                    <button class="decrease" data-id="${produto.id}">-</button>
                    <span class="quantity" data-quantity>${produto.quantity}</span>
                    <button class="increase" data-id="${produto.id}">+</button>
                </div>
                <p class="precos-produto">
                    <span class="preco_desconto_aplicado">R$ ${produto.price}</span>
                    <strong>R$ ${(produto.price - (desconto * produto.price)).toFixed(2)}</strong>
                </p>
            </div>
        </div>
    `;
    return novoProduto;
}

