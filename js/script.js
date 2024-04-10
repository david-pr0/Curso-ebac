const form = document.querySelector('.formulario')
let numero1 = document.querySelector('#numero1');
let numero2 = document.querySelector('#numero2');
let valido = document.querySelector('.valido');
let invalido = document.querySelector('.invalido');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validar(numero1.value, numero2.value)
})

function validar (n1, n2) {
    if (n2 > n1) {
        valido.style.display = 'block'
    } else {
        invalido.style.display = 'block'
    }
}
