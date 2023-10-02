// Definindo a classe contatos
class Contatos {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

// Definindo a classe GerenciadorContatos
class GerenciadorContatos {
    constructor(){
        // Inicializa a lista de contatos vazia
        this.contatos = []
    }

    adicionarContato(contato) {
        // Adiciona um contato a lista de contatos
        this.contatos.push(contato);
    }

    exibirContatos() {
        // Obtem a lista de contatos
        const listaContatos = document.getElementById('contato-lista');

        //Limpa a lista de contatos
        listaContatos.innerHTML = '';

        // Para cada contato na lista de contatos, cria um novo elemento 'li' e adiciona na lista de contatos
        for(const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;
            listaContatos.appendChild(li)
        }
    }
}

// Cria um objeto de classe GerenciadorContatos
const gerenciadorContatos = new GerenciadorContatos();

// Cria os elementos necessarios
const contatoForm = document.getElementById('contato-form');
const nomeF = document.getElementById('nome');
const emailF = document.getElementById('email');
const telefoneF = document.getElementById('telefone');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = nomeF.value;
    const email = emailF.value;
    const telefone = telefoneF.value;

    // Criando objeto da classe Contato
    const contato = new Contatos(nome, email, telefone);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = '';
    emailF.value = '';
    telefoneF.value = '';
})


// Estamos adicionando um manipulador de eventos para o botão mostrar contatos, que exibe a lista de contatos
mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
})

ocultarContatos.addEventListener('click', () =>{
    listaContatos.style.display = 'none'
})

document.getElementById("enviar-mensagem").addEventListener("click", function() {
    var mensagem = document.getElementById("mensagem").value;
    if (mensagem.trim() !== "") {
        var lista = document.getElementById("contato-lista");
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(mensagem));
        lista.appendChild(li);
        document.getElementById("mensagem").value = "";
    }
});
