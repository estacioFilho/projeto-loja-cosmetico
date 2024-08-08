import { utilities } from "./utilities.js";

export default function pesquisarProdutos() {
    const campoPesquisas = document.querySelectorAll('[data-campo-pesquisa]')
    const listaPordutosEncontrados = document.querySelectorAll('[data-resultado-pesquisa]')
    document.addEventListener('DOMContentLoaded', () => {
        listaPordutosEncontrados.forEach(listaProdutos => listaProdutos.style.display = "none");
    })
    campoPesquisas.forEach(campoPesquisa => {
        campoPesquisa.addEventListener('focus', () => {
            utilities.listaProdutos('product')
                .then(produtos => {
                    campoPesquisa.addEventListener('keyup', () => {
                        const resultados = produtos.filter(produto =>
                            produto.name.toLowerCase().includes(campoPesquisa.value.toLowerCase())

                        );
                        listaPordutosEncontrados.forEach(listaProdutos => {

                            listaProdutos.innerHTML = "";
                            resultados.forEach(produto => {
                                listaProdutos.innerHTML += `
                             <li class="item-encontrado-campo-pesquisa">               
                                <img  class="imagem-pesquisada" src="${produto.images[0]}">
                                <div class="area-conteiner-campo-pesquisa">
                                    <a href="pages/${produto.category}.html" class="descricao-categoria-campo-pesquisa">${produto.category}</a>
                                    <h4 class="titulo-produto-campo-pesquisa">${produto.name}</h4>
                                </div>
                            </li>
                         `
                            });
                            listaProdutos.style.display = resultados.length > 0 ? "block" : "none";
                            campoPesquisa.value == "" ? listaProdutos.style.display = "none" : listaProdutos.style.display = "block";
                        })
                    })
                })
            campoPesquisa.addEventListener('blur', () => {
                listaPordutosEncontrados.forEach( listaProdutos => listaProdutos.style.display = "none" );
                
            })
        })

    })
}
pesquisarProdutos()

