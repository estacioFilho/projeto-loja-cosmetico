import atualizaSacola from "./sacola.js";

function valorTotalFrete() {
    const somatoria = document.getElementById('titulo-rodape-sacola');
    const barraProgresso = document.getElementById('progresso-frete-gratis');
    const freteGratis = document.getElementsByClassName('info-progresso-frete')[0];
    const infoProgresso = document.getElementById('info-progresso')
    const valorFaltante = document.getElementById('valor-faltante-frete')
    freteGratis.style.display = 'none';
    if (!somatoria || !freteGratis || !infoProgresso || !barraProgresso || !valorFaltante) {
         console.log(`${valorFaltante}\n${infoProgresso}\n${somatoria}\n${barraProgresso}\n${freteGratis}\n`);
    }

    const soma = utilities.listaProdutosLocalStorage('bag').reduce((acc, valor) => {
        let desconto = valor.discout > 1 ? valor.discout / 100 : valor.discout;
        return acc + (valor.price - (valor.price * desconto)) * valor.quantity;
    }, 0);

    somatoria.innerHTML = `R$ ${soma.toFixed(2)}`;

    if (soma >= 260) {
        barraProgresso.style.width = "100%";
        freteGratis.style.display = 'block'
        infoProgresso.style.display = 'none'
    } else if (soma > 0) {
        let percentualProgresso = (soma * 100) / 260;
        barraProgresso.style.width = `${percentualProgresso}%`;
        infoProgresso.style.display = 'block'
        valorFaltante.innerHTML = `R$ ${(260 - soma).toFixed(2)}`;
    } else {
        barraProgresso.style.width = "0%";
    }
}

function atualizaQuantidade(arrBtnIncrementar, arrBtnDecrementar) {
    arrBtnIncrementar.forEach(btn => {
        btn.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            const spanQuantidade = btn.closest('.quantity-control').querySelector('.quantity');
            let quantidade = parseInt(spanQuantidade.textContent);
            quantidade += 1;
            spanQuantidade.textContent = quantidade;

            let produtos = JSON.parse(localStorage.getItem('bag')) || [];

            let produtoExiste = produtos.find(prod => id === prod.id);

            if (produtoExiste) {
                produtoExiste.quantity = quantidade
            } else {
                produtos.push(produtoExiste);
            }
            localStorage.setItem('bag', JSON.stringify(produtos));
            valorTotalFrete()
        });
    });

    arrBtnDecrementar.forEach(btn => {
        btn.addEventListener('click', () => {
            const id = event.target.getAttribute('data-id');
            const spanQuantidade = btn.closest('.quantity-control').querySelector('.quantity');
            let quantidade = parseInt(spanQuantidade.textContent);
            quantidade -= 1;
            if (quantidade < 1) {
                quantidade = 1;
            }
            spanQuantidade.textContent = quantidade;

            let produtos = JSON.parse(localStorage.getItem('bag')) || [];

            let produtoExiste = produtos.find(prod => id === prod.id);

            if (produtoExiste) {
                produtoExiste.quantity = quantidade
            } else {
                produtos.push(produtoExiste);
            }
            localStorage.setItem('bag', JSON.stringify(produtos));
            valorTotalFrete();

        });
    });
}
function adicionarTextoTitulo(titulo, ...elementos) {
    elementos.forEach(elemento => elemento.textContent = titulo);
}
function atualizaNotificacao(local, ...elementos) {
    let qtdQuantidades = 0;
    utilities.listaProdutosLocalStorage(local).forEach(prod => {
        qtdQuantidades += prod.quantity

        elementos.forEach(elemento => elemento.textContent = qtdQuantidades);
    })
}

function listaProdutosLocalStorage(local) {
    const produtos = JSON.parse(localStorage.getItem(local)) || [];
    return produtos;
}
function deletarProdutoLocalStorage(local, id, event) {
    const produtos = utilities.listaProdutosLocalStorage(local)
    const indiceProduto = produtos.findIndex(produtos => produtos.id === id)

    if (indiceProduto !== -1) {
        produtos.splice(indiceProduto, 1);
        localStorage.clear();
        localStorage.setItem(local, JSON.stringify(produtos))
        event.target.closest('li').remove();
    }
}
function adicionarProdutoLocalStorage(local, produto) {
    let produtos = JSON.parse(localStorage.getItem(local)) || [];
    let produtoExiste = produtos.find(prod => produto.id === prod.id);
    if (produtoExiste) {
        produtoExiste.quantity++;
    } else {
        produtos.push(produto);
        console.log(produtos)
    }
    localStorage.setItem(local, JSON.stringify(produtos));
}
function deletarProdutoLocalStorageInterface(local, notificacao, _notificacaoSecundaria) {
    document.querySelectorAll('.icone-lixeira-sacola').forEach((botao) => {
        botao.addEventListener('click', (event) => {
            const id = event.target.getAttribute('data-id');
            utilities.deletarProdutoLocalStorage('bag', id, event)
            atualizaSacola();
            atualizaNotificacao(local, notificacao, _notificacaoSecundaria)
        });
    })
}

function listaProdutos(endpoint) {
    return fetch(`http://localhost:3001/${endpoint}`)
        .then(response => response.json())
        .then(produtos => produtos)
        .catch((erro) => {
            console.log(`${erro} Erro ao listar elementos`);
        });
}
function listaUmProdutos(endpoint, id) {
    return fetch(`http://localhost:3001/${endpoint}/${id}`)
        .then(response => response.json())
        .then(produtos => produtos)
        .catch((erro) => {
            console.log(`${erro} Erro ao listar elementos`);
        });
}
function deletarTodosProdutos(endpoint) {
    fetch(`http://localhost:3001/${endpoint}`,
        {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao deletar todos os produtos. Erro:${response}`);
            }
            return response.json()
        })
        .then(data => {
            console.log(`Proutos deletados com sucesso: ${data}`)
        })
        .catch(erro => {
            console.error(`Error: ${erro}`);
        }

        )
}


function cadastrarUsuario(endpoint, dados) {
    return fetch(`http://localhost:3001/api/auth/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}
function login(endpoint, dados) {
    return fetch(`http://localhost:3001/api/auth/${endpoint}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}
function autenticacao(endpoint, token) {
    return fetch(`http://localhost:3001/${endpoint}`, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        });
}




export const utilities = {
    valorTotalFrete,
    atualizaQuantidade,
    atualizaNotificacao,
    adicionarTextoTitulo,
    listaProdutosLocalStorage,
    adicionarProdutoLocalStorage,
    deletarProdutoLocalStorage,
    deletarProdutoLocalStorageInterface,
    listaProdutos,
    listaUmProdutos,
    deletarTodosProdutos,
    cadastrarUsuario,
    login,
    autenticacao
};
