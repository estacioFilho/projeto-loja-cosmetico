import { utilities } from "./utilities.js";

export default function pesquisarProdutos() {
    const campoPesquisa = document.getElementById('campo-pesquisa')
    const listaPordutosEncontrados = document.getElementById('lista-produtos-pesquisados')
    document.addEventListener('DOMContentLoaded', () => {
        listaPordutosEncontrados.style.display = "none";
    })
    campoPesquisa.addEventListener('focus', () => {
        utilities.listaProdutos('product')
            .then(produtos => {
                campoPesquisa.addEventListener('keyup', () => {
                    const resultados = produtos.filter(produto =>
                        produto.name.toLowerCase().includes(campoPesquisa.value.toLowerCase())

                    );
                    listaPordutosEncontrados.innerHTML = "";
                    resultados.forEach(produto => {
                        listaPordutosEncontrados.innerHTML += `
                     <li class="item-encontrado-campo-pesquisa">               
                        <img  class="imagem-pesquisada" src="${produto.images[0]}">
                        <div class="area-conteiner-campo-pesquisa">
                            <a href="pages/${produto.category}.html" class="descricao-categoria-campo-pesquisa">${produto.category}</a>
                            <h4 class="titulo-produto-campo-pesquisa">${produto.name}</h4>
                        </div>
                    </li>
                 `
                    });
                    listaPordutosEncontrados.style.display = resultados.length > 0 ? "block" : "none";
                    campoPesquisa.value == "" ? listaPordutosEncontrados.style.display = "none" : listaPordutosEncontrados.style.display = "block";
                })
            })
        campoPesquisa.addEventListener('blur', () => {
            listaPordutosEncontrados.style.display = "none";
        })
    })
}
pesquisarProdutos()

