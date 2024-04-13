$(document).ready(function() {
    let form = $('.form')
    let ul = $('#ul');
    form.on('submit', function(e){
        e.preventDefault();
        let tarefa = $('#tarefa');
        let valorTarefa = tarefa.val();
        let linha = $(`<li>${valorTarefa}</li>`);
        ul.append(linha);
        ul.fadeIn();
        linha.slideDown();
        linha.click(function() {
            linha.addClass('pronto');
        })
    })
})