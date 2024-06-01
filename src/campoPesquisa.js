import listaPordutos from "./conexao.js";

export default function pesquisarProdutos() {
    const campoPesquisa = document.getElementById('campo-pesquisa')
    const listaPordutosEncontrados = document.getElementById('lista-produtos-pesquisados')
    document.addEventListener('DOMContentLoaded', () => {
        listaPordutosEncontrados.style.display = "none";
    })
    campoPesquisa.addEventListener('focus', async () => {
        const produtos = await listaPordutos();
        campoPesquisa.addEventListener('keyup', () => {
            const resultados = produtos.filter(produto =>
                produto.nome.toLowerCase().includes(campoPesquisa.value)

            );
            listaPordutosEncontrados.innerHTML = "";
            resultados.forEach(produto => {
                listaPordutosEncontrados.innerHTML += `
                 <li class="item-encontrado-campo-pesquisa">               
                    <img  class="imagem-pesquisada" src="${produto.imagens[0]}" alt="Shampoo Usoo obrigatório 300ml">
                    <div class="area-conteiner-campo-pesquisa">
                        <a href="pages/${produto.Categoria}.html" class="descricao-categoria-campo-pesquisa">${produto.Categoria}</a>
                        <h4 class="titulo-produto-campo-pesquisa">${produto.nome}</h4>
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
}
pesquisarProdutos()

