import atualizaSacola from "../sacola.js";
import { utilities } from "../utilities.js"

function produtosFromAPI(categoria, titulo = categoria) {
    const areaProdutos = document.querySelector(`[data-${categoria}]`);
    if (areaProdutos) {
        const parginaDestaque = document.getElementById('pagina_destaque');
        const tituloPagina = document.getElementById('titulo_pagina');
        document.addEventListener('DOMContentLoaded', () => {
            try {
                utilities.adicionarTextoTitulo(titulo, parginaDestaque, tituloPagina);
                utilities.listaProdutos('product')
                    .then(produtos => {
                        produtos.forEach(item => {
                            let visibilidadeDesconto = item.discount <= 0 ? "none" : '';
                            if (item.category == categoria && item.stock) {
                                areaProdutos.innerHTML +=
                                    `                                                     <div class="produto">
                                                                    <div class="apresentacao-produto">
                                                                    <span style="display:${visibilidadeDesconto}" class="desconto">-${item.discount * 100}%</span>
                                                                    <img class="imagem-produto" src="${item.images[0]}" alt="${item.name}">
                                                                    <button class="button-favorito"><div class="icone-coracao"></div></>
                                                                    </div>
                                                                    <div class="produto-conteiner">
                                                                    <div class="sobre-produto">
                                                                        <h3 class="titulo-produto">${item.name}</h3>
                                                                        <span class="avaliacao-produto"><div class="icone-avaliacao"></div><strong> (${item.review})</strong></span>
                                                                        <p id="descricao" class="descricao-produto">${item.description.substr(0, 150)}</p>
                                                                    </div>
                                                                    <div class="preco-produto">
                                                                    <span class="preco-avista">R$ ${item.price}<strong>R$ ${(item.price - (item.price * item.discount)).toFixed(2)}</strong></span>
                                                                    <span class="preco-parcelado">6x<strong>R$ ${((item.price - (item.price * item.discount)) / 6).toFixed(2)}</strong>sem juros</span>
                                                                    </div>
                                                                    </div>
                                                                    <div class="area-button">
                                                                    <button class="button-produto"><div class="icone-cadeado"></div><span>COMPRAR</span></button>
                                                                    </div>
                                                                    </div>
                                                                    `
                            }
                        });

                        document.querySelectorAll('.button-produto').forEach((botao, index) => {
                            botao.addEventListener('click', () => {
                                const item = produtos.filter(produto => produto.category == categoria)[index];
                                const produtoAdicionado = {
                                    id: item._id,
                                    image: item.images[0],
                                    name: item.name,
                                    price: item.price,
                                    discout: item.discount,
                                    quantity: 1
                                }   
                                
                               utilities.adicionarProdutoLocalStorage('bag', produtoAdicionado);
                               atualizaSacola();

                            });
                        });

                        document.querySelectorAll('.button-favorito').forEach((botao, index) => {
                            botao.addEventListener('click', () => {
                                const item = produtos.filter(produto => produto.category == categoria)[index];
                                const produtoFavorito = {
                                    id: item._id,
                                    image: item.images[0],
                                    name: item.name,
                                    price: item.price,
                                    discout: item.discount,
                                    description: item.description
                                }
                                utilities.adicionarProdutoLocalStorage('favorite', produtoFavorito);
                            });
                        })
                    })



            } catch (e) {
                areaProdutos.innerHTML = `<h3>${e}:Nenhum produto encontrado =(</h3>`
            }

        })
    }

}

produtosFromAPI('care', 'Cuidados diários')
produtosFromAPI('treatments', 'Tratamentos')
produtosFromAPI('finishers', 'Finalizadores')
produtosFromAPI('kits')


