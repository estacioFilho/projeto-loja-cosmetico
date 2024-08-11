import { utilities } from "../utilities.js"

async function produtosFromAPI() {

    const areaProdutos = document.getElementById('area-produtos');
    let count = 0;
    try {
        const produtos = await utilities.listaProdutos('product');
        
        const produtosFiltrados = produtos.filter(item => item.stock);

        produtosFiltrados.forEach(item => {
            if(count < 3){
                const produtoElement = criarProdutoElement(item);
                areaProdutos.appendChild(produtoElement);
            }
            count++;
        });

        document.querySelectorAll('.button-produto').forEach((botao, index) => {
            botao.addEventListener('click', () => adicionarAoCarrinho(produtosFiltrados[index]));
        });

        document.querySelectorAll('.button-favorito').forEach((botao, index) => {
            botao.addEventListener('click', () => adicionarAosFavoritos(produtosFiltrados[index]));
        });

    } catch (e) {
        console.error(e);
        areaProdutos.innerHTML = `<h3>Nenhum produto encontrado =(</h3>`;
    }
}

function criarProdutoElement(item) {
    const divProduto = document.createElement('div');
    divProduto.className = 'produto';
    divProduto.innerHTML = `
        <div class="apresentacao-produto">
            <span style="display:${item.discount <= 0 ? 'none' : ''}" class="desconto">-${item.discount * 100}%</span>
            <img class="imagem-produto" src="${item.images[0]}" alt="${item.name}">
            <button class="button-favorito" data-id=${item._id}><div class="icone-coracao"></div></button>
        </div>
        <div class="produto-conteiner">
            <div class="sobre-produto">
                <h3 class="titulo-produto">${item.name}</h3>
                <span class="avaliacao-produto"><div class="icone-avaliacao"></div><strong> (${item.review})</strong></span>
                <p id="descricao" class="descricao-produto">${item.description.substr(0, 150)}</p>
            </div>
            <div class="preco-produto">
                <span class="preco-avista">R$ ${item.price}<strong>R$ ${(item.price - (item.price * item.discount)).toFixed(2)}</strong></span>
                <span class="preco-parcelado">6x<strong>R$ ${((item.price - (item.price * item.discount)) / 6).toFixed(2)}</strong> sem juros</span>
            </div>
        </div>
        <div class="area-button">
            <button class="button-produto"><div class="icone-cadeado"></div><span>COMPRAR</span></button>
        </div>
    `;
    return divProduto;
}

function adicionarAoCarrinho(item) {
    const produtoAdicionado = {
        id: item._id,
        image: item.images[0],
        name: item.name,
        price: item.price,
        discount: item.discount,
        quantity: 1
    };
    utilities.adicionarProdutoLocalStorage('bag', produtoAdicionado);
}

function adicionarAosFavoritos(item) {
    const prodFavoritados = utilities.listaProdutosLocalStorage('favorite') || [];
    const produtoExiste = prodFavoritados.some(produto => produto.id === item._id);

    if (produtoExiste) {
        alert('Produto já está nos favoritos.');
    } else {
        const produtoFavorito = {
            id: item._id,
            image: item.images[0],
            name: item.name,
            price: item.price,
            discount: item.discount,
            quantity: 1,
            description: item.description
        };
        utilities.adicionarProdutoLocalStorage('favorite', produtoFavorito);
    }
}
produtosFromAPI();


