# 📦 Projeto: Consulta de CEP com ViaCEP

## 📖 Descrição

Este projeto é uma aplicação simples em **HTML, CSS e JavaScript puro**
que permite ao usuário consultar um CEP utilizando a API pública do
ViaCEP.

Os dados retornados são exibidos em um **modal (`<dialog>`)**,
proporcionando uma experiência mais moderna e organizada.

------------------------------------------------------------------------

## 🚀 Funcionalidades

-   🔍 Consulta de CEP via API
-   ✅ Validação de entrada (campo vazio e tamanho do CEP)
-   ⚠️ Tratamento de erros (HTTP e API)
-   🪟 Exibição dos resultados em modal
-   🎨 Interface estilizada com CSS
-   🌑 Backdrop escurecido ao abrir modal

------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas

-   HTML5
-   CSS3
-   JavaScript (ES6+)
-   API: https://viacep.com.br/

------------------------------------------------------------------------

## 📂 Estrutura do projeto

    📁 projeto
    ┣  📁 css
    ┣   ┣📄 style.css
    ┣  📁 js 
    ┣   ┗📄 script.js
    ┣📄 index.html
    ┣📄 README.md
     
     

------------------------------------------------------------------------

## ▶️ Como executar

1.  Baixe ou clone o projeto
2.  Abra o arquivo `index.html` no navegador

Ou utilize uma extensão como o **Live Server** no VS Code.

------------------------------------------------------------------------

## 🧠 Conceitos aplicados

-   Manipulação do DOM
-   Uso de `fetch` com `async/await`
-   Tratamento de erros com `try/catch`
-   Validação de dados
-   Uso do elemento nativo `<dialog>`
-   Estruturação de código com funções

------------------------------------------------------------------------

## ⚠️ Tratamento de erros

O projeto trata:

-   ❌ CEP vazio
-   ❌ CEP com menos de 8 dígitos
-   ❌ Erros de requisição (HTTP)
-   ❌ CEP inexistente (retorno da API)

------------------------------------------------------------------------

## 💡 Melhorias futuras

-   🔄 Loading enquanto busca dados
-   ⌨️ Máscara automática de CEP
-   🚫 Bloquear múltiplos cliques durante requisição
-   📱 Melhor responsividade

------------------------------------------------------------------------

## 👨‍💻 Autor

Desenvolvido por `< Anderson DEV >`

------------------------------------------------------------------------

## 📄 Licença

Este projeto é livre para estudos e uso pessoal.
