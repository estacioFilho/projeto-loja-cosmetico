import { utilities } from "../utilities.js"

const areaProdutos = document.getElementById('area-produtos');

document.addEventListener('DOMContentLoaded', () => {
    try {
        let count = 0;
        utilities.listaProdutos('product')
            .then(produtos => {
                produtos.forEach(item => {
                    let visibilidadeDesconto = item.desconto <= 0 ? "none" : '';
                    if (count < 3 && item.discount > 0) {
                        areaProdutos.innerHTML += `
                                    <div class="produto">
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
                        count++;
                    }
                });

                document.querySelectorAll('.button-produto').forEach((botao, index) => {
                    botao.addEventListener('click', () => {
                        const item = produtos.filter(produto => produto.discount > 0)[index];
                        const produtoAdicionado = {
                            image: item.images[0],
                            name: item.name,
                            price: item.price,
                            discout: item.discount
                        }
                        utilities.adicionarProduto('bag', produtoAdicionado)
                        location.reload();
                    });
                });

                document.querySelectorAll('.button-favorito').forEach((botao, index) => {
                    botao.addEventListener('click', (event) => {
                        const item = produtos.filter(produto => produto.discount > 0)[index];
                        const produtoFavorito = {
                            image: item.images[0],
                            name: item.name,
                            price: item.price,
                            discout: item.discount,
                            description:item.description
                        }    
                        utilities.adicionarProduto('favorite', produtoFavorito)

                        location.reload();
                    });
                })
            })



    } catch (e) {
        areaProdutos.innerHTML = `<h3>${e}:Nenhum produto encontrado =(</h3>`
    }

})




