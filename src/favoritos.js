import { utilities } from "./utilities.js";

const favoritos = document.getElementById('filtro-back-favoritos');
const iconeFavoritos = document.getElementById('favoritos');
const iconeFavoritosMobile = document.getElementById('favoritos-mobile');
const checkCloseFavorito = document.getElementById('checkbox-favoritos');
const notificacaoSacola = document.getElementById('notificacoes-sacola');
const notificacaoSacolaMobile = document.querySelector('#notificacoes-sacola-mobile');
const notificacaoFavoritos = document.getElementById('notificacoes-favoritos');
const notificacaoFavoritosMobile = document.getElementById('notificacoes-favoritos-mobile');
const sacola = document.getElementById('filtro-back');
const botaoAdicionarTodosASacola = document.getElementById('botao-adicionar-todos');


favoritos.style.display = 'none';
checkCloseFavorito.style.display = 'none';

document.addEventListener('DOMContentLoaded', () => {
    setupFavoritosEvents();
    atualizarFavoritos();
});

function setupFavoritosEvents() {
    favoritos.style.display = 'none';
    checkCloseFavorito.style.display = 'none';
    
    iconeFavoritosMobile.addEventListener('click', () => {
        favoritos.style.display = 'block'
        sacola.style.display = 'none';
    })
    iconeFavoritos.addEventListener('click', (event) => {
        event.preventDefault()
        favoritos.style.display = 'block'
        sacola.style.display = 'none';
    })
    checkCloseFavorito.addEventListener('change', () => {
        favoritos.style.display = favoritos.style.display === 'block' ? 'none' : 'block';

    });
}


export default function atualizarFavoritos() {
    const areaProdutosFavoritos = document.getElementById('produtos-adicionados-favoritos');
    areaProdutosFavoritos.innerHTML = '';
    
    const listaFavoritos = utilities.listaProdutosLocalStorage('favorite') || [];
    
    listaFavoritos.forEach(produto => {
        const novoFavorito = criarFavoritoElemento(produto);
        areaProdutosFavoritos.appendChild(novoFavorito);
        
        setTimeout(() => {
            novoFavorito.classList.add('slide-in');
        }, 10);
    });

    utilities.atualizarNotificacoesFavoritos('favorite', notificacaoFavoritos, notificacaoFavoritosMobile);
    utilities.transferirProdutosLocalStorage('favorite', 'bag', areaProdutosFavoritos, botaoAdicionarTodosASacola);
    adicionarEventosAosBotoesFavoritos();
    utilities.deletarProdutoLocalStorageInterface('favorite', notificacaoFavoritos, notificacaoFavoritosMobile, '.icone-lixeira-sacola');
}

function criarFavoritoElemento(produto) {
    const novoFavorito = document.createElement('li');
    novoFavorito.classList.add('produto-adicionando-favoritos');
    novoFavorito.innerHTML = `
    <img class="imagem-produto-favorito" src="${produto.image}" alt="${produto.name}">
    <div class="conteiner-produto-adicionanado">
    <div class="titulo-produto-favoritos">
    <div class="group-text-favoritos">
    <p class="nome-produto-favorito">${produto.name}</p>
    <p class="preco-original"><s>R$ ${produto.price}</s><span class="preco-desconto">R$ ${(produto.price - (produto.discount * produto.price)).toFixed(2)}</span></p>
    <p class="descricao-produto-favorito">${produto.description}</p>
    </div>
    <div class="group-botoes-favoritos">
    <button class="icone-sacola adicionar-favorito-sacola"  data-id-sac="${produto.id}"></button>
    <button class="icone-lixeira-sacola" style="cursor:pointer;" data-id="${produto.id}"></button>
    </div>
    </div>
    </div>
    `;
    return novoFavorito;
}

function adicionarEventosAosBotoesFavoritos() {
    document.querySelectorAll('.adicionar-favorito-sacola').forEach(botao => {
        botao.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id-sac');
            adicionarProdutoASacola(id);

        });
    });
}

function adicionarProdutoASacola(id) {
    const listaFavoritos = utilities.listaProdutosLocalStorage('favorite') || [];
    
    const produto = listaFavoritos.find(produto => produto.id === id);
    
    if (produto) {
        const produtoAdicionadoFavoritos = {
            id: produto.id,
            image: produto.image,
            name: produto.name,
            price: produto.price,
            discount: produto.discount,
            quantity: 1
        };
        
        utilities.adicionarProdutoLocalStorage('bag', produtoAdicionadoFavoritos);
        utilities.deletarProdutoLocalStorage('favorite', id);
        utilities.atualizarNotificacoesFavoritos('favorite', notificacaoFavoritos, notificacaoFavoritosMobile);
        utilities.atualizaNotificacao('bag', notificacaoSacola, notificacaoSacolaMobile);
    
        const elementoProduto = document.querySelector(`.adicionar-favorito-sacola[data-id-sac="${id}"]`).closest('li');
        if (elementoProduto) {
            elementoProduto.remove();
        }
    } else {
        console.error('Produto não encontrado nos favoritos');
    }
}

