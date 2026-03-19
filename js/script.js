const button = document.querySelector('#btn-clique');
const buttonClose = document.querySelector('#btn-close');
const resultado = document.querySelector('#resultado');
const modal = document.querySelector('#modal-resultado');
const modalContent = document.querySelector('#modal-content');
const mensagemErro = document.querySelector('#mensagem-erro')
const inputCep = document.querySelector('#cep');

const pesquisarCep = async() => {
    const cep = inputCep.value.trim();

    let mensagem = "";

    if(!cep) {
        inputCep.style.border = '3px solid #ff0000'
        mensagemErro.innerHTML = '<p style="margin-top: 10px; color: red;">CEP Inválido, tente novamente!</p>'
        return;
    }

    if(cep.length < 8) {
        inputCep.style.border = '3px solid #ff0000'
        mensagemErro.innerHTML = '<p style="margin-top: 10px; color: red;">O CEP precisa ter 8 digitos!</p>'
        return;
    }

    try {   
        const url = `https://viacep.com.br/ws/${cep}/json/`
        const dados = await fetch(url);
        
        // 🔴 trata erro primeiro
        if(!dados.ok) {
             if(dados.status === 400) {
                mensagem = "CEP Inválido!";
            } else if (dados.status === 500) {
                mensagem = "Erro no servidor. Tente mais tarde.";
            } else {
                mensagem = "Erro ao buscar CEP.";
            }
            
            resultado.innerHTML = `
                <p style="color: red;">
                   ${mensagem}
                </p>
            `;            

            abrirModal(); // Mostrar no modal
            return;
        } 

        // 🟢 sucesso continua limpo aqui
        const endereco = await dados.json();
        apresentarDadosNaTela(endereco);
        
    } catch(error) {
        console.log('Deu erro na requisição: ', error);
    }   

}

button.addEventListener('click', pesquisarCep);

const apresentarDadosNaTela = (endereco) => {
    // CHAMADA A FUNÇÃO DE ABRIR MODAL
    abrirModal();

    if(endereco.erro) {
        resultado.innerHTML = `Erro na requisição, tente novamente mais tarde!`
        return;
    }

    // Melhor mostrar os dados organizados:
    resultado.innerHTML = `
        <h2 style="color: #FFD700;">Consulta retornou</h2><br>
        <p style="margin: 0;">CEP: ${endereco.cep}</p>
        <p style="margin: 0;">Rua: ${endereco.logradouro}</p>
        <p style="margin: 0;">Bairro: ${endereco.bairro}</p>
        <p style="margin: 0;">Cidade: ${endereco.localidade}</p>
        <p style="margin: 0;">Estado: ${endereco.uf}</p>
    `;

    // DEBUG - Console para inspecionar das duas formas 
    // console.log(endereco);

}

const abrirModal = () => {
    if (modal.hasAttribute('open')) return;

    document.body.classList.add('no-scroll');
    modalContent.classList.remove('closing');
    modal.showModal();

    requestAnimationFrame(() => {
        modalContent.classList.add('show');
    });
}

// ABRIR MODAL
buttonClose.addEventListener('click', () => {
    fecharModal();
})

// FECHAR O MODAL
const fecharModal = () => {
    if (!modal.hasAttribute('open')) return;

    modalContent.classList.remove('show');
    modalContent.classList.add('closing');

    const closeAfterTransition = () => {
        if (modal.hasAttribute('open')) {
            modal.close();
        }
        document.body.classList.remove('no-scroll');
        modalContent.classList.remove('closing');
        modalContent.removeEventListener('transitionend', closeAfterTransition);
    };

    modalContent.addEventListener('transitionend', closeAfterTransition);
    
}

// permite fechar o modal clicando fora do conteúdo
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        fecharModal();
    }
});

// permite fechar o modal com tecla Escape
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.hasAttribute('open')) {
        fecharModal();
    }
});
