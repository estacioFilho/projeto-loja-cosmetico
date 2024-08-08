import { utilities } from "./utilities.js";
import atualizaSacola from "./sacola.js";

const favoritos = document.getElementById('filtro-back-favoritos');
const iconeFavoritos = document.getElementById('favoritos');
const iconeFavoritosMobile = document.getElementById('favoritos-mobile');
const checkCloseFavorito = document.getElementById('checkbox-favoritos');
const areaProdutosFavoritos = document.getElementById('produtos-adicionados-favoritos');
const notificacaoSacola = document.getElementById('notificacoes-sacola')
const notificacaoSacolaMobile = document.querySelector('#notificacoes-sacola-mobile')
const notificacaoFavoritos = document.getElementById('notificacoes-favoritos');
const notificacaoFavoritosMobile = document.getElementById('notificacoes-favoritos-mobile');
const sacola = document.getElementById('filtro-back');
const botaoAdicionartodosaSacola = document.getElementById('botao-adicionar-todos');




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
    favoritos.style.display = 'block' ? favoritos.style.display = 'none' : '';
})

function atualizarFavoritos(){
    utilities.listaProdutos('favorite')
        .then((produtos) => {
            produtos.forEach((item, index) => {
                let novoFavorito = document.createElement('li');
                novoFavorito.classList.add('produto-adicionando-favoritos')
                novoFavorito.innerHTML += `
                        <img class="imagem-produto-favorito" src="${item.image}" alt="mascara">
                        <div class="conteiner-produto-adicionanado">
                            <div class="titulo-produto-favoritos">
                                <div class="group-text-favoritos">
                                    <p class="nome-produto-favorito">${item.name}</p>
                                    <p class="descricao-produto-favorito">${item.description}</p>
                                </div>
                                <div class="group-botoes-favoritos">
                                    <buttom class="icone-sacola adicionar-favorito-sacola" style="cursor:pointer;" data-id=${item._id}></buttom>
                                    <buttom class="icone-lixeira-sacola" style="cursor:pointer;" data-id=${item._id}></buttom>
                                </div>
                            </div>
                        </div>
                    `
                areaProdutosFavoritos.appendChild(novoFavorito);
                setTimeout(() => {
                    novoFavorito.classList.add('slide-in');
                }, 10);
            });
            utilities.atualizacaoNotificacoes('favorite', notificacaoFavoritos, notificacaoFavoritosMobile);

            botaoAdicionartodosaSacola.addEventListener('click', () => {
                const produtosFavoritos = produtos.map(({ _id, ...rest }) => rest);
                utilities.adicionarProduto('bag', produtosFavoritos);
                areaProdutosFavoritos.innerHTML = '';
                utilities.deletarTodosProdutos('favorite')
                atualizaSacola();
                utilities.atualizacaoNotificacoes('favorite', notificacaoFavoritos, notificacaoFavoritosMobile);
                            utilities.atualizacaoNotificacoes('bag', notificacaoSacola, notificacaoSacolaMobile);
            })

            document.querySelectorAll('.adicionar-favorito-sacola').forEach((botao, index) => {
                botao.addEventListener('click', (event) => {
                    const id = event.target.getAttribute('data-id');
                    utilities.listaUmProdutos('favorite', id)
                        .then((produto) => {
                            const produtoAdicionado = {
                                image: produto.image,
                                name: produto.name,
                                price: produto.price,
                                discout: produto.discount
                            }
                            utilities.adicionarProduto('bag', produtoAdicionado)
                            utilities.deletarProduto('favorite', id)
                            event.target.closest('li').remove();
                            atualizaSacola();
                            utilities.atualizacaoNotificacoes('favorite', notificacaoFavoritos, notificacaoFavoritosMobile);
                            utilities.atualizacaoNotificacoes('bag', notificacaoSacola, notificacaoSacolaMobile);
                        })

                });
            });

            document.querySelectorAll('.icone-lixeira-sacola').forEach((botao) => {
                botao.addEventListener('click', (event) => {
                    const id = event.target.getAttribute('data-id');
                    utilities.deletarProduto('favorite', id)
                    event.target.closest('li').remove();
                    atualizarFavoritos();
                    utilities.atualizacaoNotificacoes('favorite', notificacaoFavoritos, notificacaoFavoritosMobile);
                });
            })
        })
}
document.addEventListener('DOMContentLoaded', () => {
    atualizarFavoritos();

})



