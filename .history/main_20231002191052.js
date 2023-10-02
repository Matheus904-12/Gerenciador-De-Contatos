class Contatos {
    constructor(nome, email, telefone){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

class GerenciadorContatos {
    constructor(){
        this.contatos = [];
    }

    adicionarContato(contato) {
        this.contatos.push(contato);
        this.mostrarAlerta('Contato adicionado com sucesso!', 'success');
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista');
        listaContatos.innerHTML = '';
        this.contatos.forEach(contato => {
            this.adicionarContatoAnimado(contato);
        });
    }

    mostrarAlerta(mensagem, tipo) {
        const alerta = document.createElement('div');
        alerta.className = `alert ${tipo}`;
        alerta.appendChild(document.createTextNode(mensagem));
        document.querySelector('.container').insertBefore(alerta, contatoForm);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }

    adicionarContatoAnimado(contato) {
        const li = document.createElement('li');
        li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone}`;
        li.style.opacity = 0;
        listaContatos.appendChild(li);

        const fadeInInterval = setInterval(() => {
            if (li.style.opacity < 1) {
                li.style.opacity = parseFloat(li.style.opacity) + 0.1;
            } else {
                clearInterval(fadeInInterval);
            }
        }, 100);
    }
}

const gerenciadorContatos = new GerenciadorContatos();
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

    const contato = new Contatos(nome, email, telefone);

    gerenciadorContatos.adicionarContato(contato);

    nomeF.value = '';
    emailF.value = '';
    telefoneF.value = '';
})

mostrarContatos.addEventListener('click', () => {
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';
    listaContatos.innerHTML = '';
})

ocultarContatos.addEventListener('click', () => {
    listaContatos.style.display = 'none';
    listaContatos.innerHTML = '';
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
