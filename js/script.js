const form = document.querySelector('.form');
const campo = document.querySelector('tbody');
let nome = document.querySelector('#nome');
let telefone = document.querySelector('#telefone');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    criarLinha();
});

function criarLinha() {
    let linha = document.createElement('tr');
    // Campo para nomes
    let novaLinha = document.createElement('td');
    let conteudo = document.createTextNode(nome.value);
    // Campo para telefones
    let novoTelefone = document.createElement('td');
    let conteudoTelefone = document.createTextNode(telefone.value);
    // Atribuindo valores
    novaLinha.appendChild(conteudo);
    novoTelefone.appendChild(conteudoTelefone);
    linha.appendChild(novaLinha);
    linha.appendChild(novoTelefone);
    campo.appendChild(linha);
}

telefone.addEventListener('input', function(e) {
    formatarTelefone(telefone.value);
});

function formatarTelefone(input) {
    // Remove todos os caracteres não numéricos
    const numero = input.replace(/\D/g, '');

    // Formata o número de telefone
    if (numero.length === 10) {
        const parte1 = numero.slice(0, 2);
        const parte2 = numero.slice(2, 6);
        const parte3 = numero.slice(6, 10);
        telefone.value = `(${parte1}) ${parte2}-${parte3}`;
    } else if (numero.length === 11) {
        const parte1 = numero.slice(0, 2);
        const parte2 = numero.slice(2, 7);
        const parte3 = numero.slice(7, 11);
        telefone.value = `(${parte1}) ${parte2}-${parte3}`;
    } else {
        // Se o número não tiver 10 ou 11 dígitos, exibe o número sem formatação
        telefone.value = numero;
    }
}
