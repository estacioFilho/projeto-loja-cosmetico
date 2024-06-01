import listaPordutos from "../conexao.js"


const areaProdutos = document.getElementById('lista-produtos');
const parginaDestaque = document.getElementById('pagina_destaque');
const tituloPagina = document.getElementById('titulo_pagina');
document.addEventListener('DOMContentLoaded', async function () {
    try {
        parginaDestaque.textContent = "Promoções"
        tituloPagina.textContent = "Promoções"
        parginaDestaque.style.opacity = 0.8;
        const produtos = await listaPordutos();
        produtos.forEach(item => {
            let visibilidadeDesconto = item.desconto == 0 ? "none" : '';
            if (item.Categoria == "finalizadores") {
                areaProdutos.innerHTML += `
                        <div class="produto">
                        <div class="apresentacao-produto">
                        <span style="display:${visibilidadeDesconto}" class="desconto">-${item.desconto * 100}%</span>
                        <img class="imagem-produto" src="${item.imagens[0]}" alt="${item.nome}">
                        <div class="icone-coracao"></div>
                    </div>
                    <div class="produto-conteiner">
                        <div class="sobre-produto">
                            <h3 class="titulo-produto">${item.nome}</h3>
                            <span class="avaliacao-produto"><div class="icone-avaliacao"></div><strong> (${item.Avaliacoes})</strong></span>
                            <p id="descricao" class="descricao-produto">${item.descricao.substr(0, 150)}</p>
                        </div>
                        <div class="preco-produto">
                        <span class="preco-avista">R$ ${item.preco}<strong>R$ ${(item.preco - (item.preco * item.desconto)).toFixed(2)}</strong></span>
                        <span class="preco-parcelado">6x<strong>R$ ${((item.preco - (item.preco * item.desconto)) / 6).toFixed(2)}</strong>sem juros</span>
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
                const item = produtos.filter(produto => produto.Categoria == "finalizadores" )[index]; 
                const produtoAdicionado = {
                    imagem: item.imagens[0],
                    nome: item.nome,
                    preco: item.preco,
                    desconto: item.desconto

                }

                let produtosAdicionados = JSON.parse(localStorage.getItem('sacolaCompras')) || [];
                produtosAdicionados.push(produtoAdicionado);
                localStorage.setItem('sacolaCompras', JSON.stringify(produtosAdicionados));
            });
        });

    } catch (e) {
        areaProdutos.innerHTML = `<h3>${e}:Nenhum produto encontrado =(</h3>`
    }

})

