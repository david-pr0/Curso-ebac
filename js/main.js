$(document).ready (function() {
    $('form').validate({
        rules: ({
            nome: {
                required:true
            },
            email: {
                required:true,
                email: true
            },
            telefone: {
                required:true,
                minlength: 15
            },
            cpf: {
                required:true,
                minlength: 14
            },
            endereco: {
                required:true
            },
            cep: {
                required:false
            }
        }),
        messages: {
            nome: 'Por gentileza, insira seu nome',
            email: 'Por gentileza, insira seu E-mail',
            telefone: 'Por gentileza, insira seu telefone',
            cpf: 'Por gentileza, insira seu CPF',
            endereco: 'Por gentileza, insira seu endereço',
        }
    })

    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00-000000')
})