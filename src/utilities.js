function adicionarTextoTitulo(titulo, ...elementos) {
    elementos.forEach(elemento => elemento.textContent = titulo);
}

function atualizacaoNotificacoes(endpoint, ...notificacoes) {
    utilities.listaProdutos(endpoint)
        .then(produtos => {
            notificacoes.forEach(notificacao => {
               if(produtos.length == 0){
                notificacao.innerHTML = 0;
               }
                notificacao.innerHTML = produtos.length})
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

function adicionarProduto(endpoint, dados) {
    fetch(`http://localhost:3001/${endpoint}`, {
        method: "POST",
        body: JSON.stringify(dados),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }
    )
}
function cadastrarUsuario(endpoint, dados){
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


function deletarProduto(endpoint, id) {
    fetch(`http://localhost:3001/${endpoint}/${id}`,
        {
            method: "DELETE",
            headers: { "Content-type": "application/json; charset=UTF-8" }
        }
    )
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao deletar o produto: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => console.log('Produto deletado com sucesso:', data))
        .catch(error => console.error('Erro:', error));
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

export const utilities = {
    adicionarTextoTitulo,
    atualizacaoNotificacoes,
    listaProdutos,
    listaUmProdutos,
    adicionarProduto,
    deletarProduto,
    deletarTodosProdutos,
    cadastrarUsuario
};
