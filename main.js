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
const GerenciadorContatos = new GerenciadorContatos();

// Cria 