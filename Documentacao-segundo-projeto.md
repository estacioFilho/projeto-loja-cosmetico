# Documentação do Segundo Projeto

## Documentação do Projeto do Site da Loja de Cosméticos (Clone Truss)

---

## Índice

- **Visão geral**
- **Etapa 1**
- **Etapa 2 ( para avaliação)**
- **Status do projeto**
- **Acesso ao projeto**
- **Pessoas contribuidoras**
- **Pessoas desenvolvedoras**
- **Licença**
- **Conclusão**

## Visão Geral

---

Este documento detalha o desenvolvimento de um site de uma loja de cosméticos, dividido em duas etapas principais. A primeira etapa envolve a criação da página inicial usando ***HTML, CSS e JavaScript básico***. A segunda etapa adiciona funcionalidades ***avançadas usando JavaScript,*** como busca, páginas de categorias, carrinho de compras e ***integração com APIs***.

### Etapa 1: Criação da Página Inicial

---

**Tecnologias Utilizadas:**

- HTML: Estrutura básica da página
- CSS: Estilização da página
- JavaScript: Interatividade básica
- Git e GitHub: Versionar o código
- Versel:  Deploy
- Trello: Otimizar as tarefas junto com a metodologia ágil Kanban(e-kanban)

A página inicial foi construída com os seguintes elementos principais:

1. Header (***responsivo***).
Banner Principal.
2. Carrossel de lançamentos: 
Seção de Lançamentos (***carrossel)***
3. Seção de ofertas(***estático)***
4. Card com um GIF(***lançamento de uma nova linha)***
5. Seção recomendam
6. Card sobre Truss Pro
7. Footer com duas variações (***mobile e desktop***)

### Etapa 2: Adicionar dinamismo ao projeto com JavaScript

---

**Tecnologias Utilizadas:**

- HTML: Estrutura básica da página
- CSS: Estilização da página
- JavaScript: Requisições, tratamento com arquivos JSON, métodos(arrays e objetos), LocalStorage.
- Git e GitHub: Versionar o código
- Versel:  Deploy
- Trello: Otimizar as tarefas complementando com a metodologia ágil Kanban(e-kanban)

Segunda etapa do projeto foi criada com os seguintes componentes:

1. Botão **Flutuante:** criação de um botão flutuante ícone do whatsapp para falar com um representante.
2. Menus **dropdown** para facilitar a navegação dos dispositivos móveis.
3. Adição de cinco páginas de cada categoria e fazendo a listagem por meio do consumo de uma API e manipulação dos componentes por meio do DOM
4. Produtos na Página Home seguindo a mesma lógica, mas limitando apenas a listagem de três produtos na seção *ofertas*
5. Campo de pesquisa em todas as paginas usando DOM e requisição
6. Carrinho de Compras (Sacola): implementação de um carrinho de compras utilizando `LocalStorage`  e DOM para armazenar os itens selecionados pelos usuários mais uma barra de progresso (***frete grátis***)

## Status do projeto

---

Segundo projeto concluído

## **Acesso ao projeto**

---

**Passo 1: Download do Projeto**
Primeiro, baixe o projeto a partir do repositório ou link fornecido.

```bash
git clone <URL do Repositório>
```

**Passo 2: Instalação do JSON Server**
Requisitos
Node.js e npm instalados em seu sistema.
Instalação do JSON Server

Abra o terminal e execute o seguinte comando para instalar o JSON Server globalmente:

```bash
npm install -g json-server
```

Agora coloque para assistir, com o código.

```bash

json-server --watch produtos.json
```

**Passo 5: Acessar o Projeto no Navegador**
Abra o arquivo HTML principal (geralmente index.html) em seu navegador. Certifique-se de que o JSON Server está em execução e que o navegador pode acessar os dados via [http://localhost:3000/](http://localhost:3000/produtos) ou

Acesse pela extensão **liveserver: Alt +L +o**

### Pessoas contribuidoras

---

- Estácio Vieira de Queiroz Filho

### Pessoas desenvolvedoras

---

- Estácio Vieira de Queiroz Filho

### Licença

---

Este projeto está licenciado sob a [Licença XYZ](https://www.notion.so/link_para_licenca).

### **Conclusão**

---

Este projeto foi dividido em duas etapas, começando com a criação da página inicial e progredindo para a adição de funcionalidades avançadas usando JavaScript. Com o uso de APIs, Local Storage e manipulação do DOM, conseguimos criar uma experiência de usuário rica e interativa para a loja de cosméticos.