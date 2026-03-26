const tipoPizzaElemento = document.querySelector("#tipo-pizza");
const qtdPizzaElemento = document.querySelector("#qtd-pizza");
const checkboxesElemento = document.querySelectorAll('input[type="checkbox"]');
const observacoesElemento = document.querySelector('#descricao-pizza');

const botaoEnviar = document.querySelector('#botao-enviar');

botaoEnviar.addEventListener('click', function(event) {
    event.preventDefault();

    let tipoPizza =  tipoPizzaElemento.value;
    let qtdPizza =  qtdPizzaElemento.value;
    let ingredientesExtra = [];
    let observacoes = observacoesElemento.value;

    for (let i = 0; i < checkboxesElemento.length; i++) {
        if (checkboxesElemento[i].checked) {
            ingredientesExtra.push(checkboxesElemento[i].value);
        }
    }

    console.log(tipoPizza);
    console.log(qtdPizza);
    console.log(ingredientesExtra);
    console.log(observacoes)
});