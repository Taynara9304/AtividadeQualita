
/*TIPO DA PIZZA*/
/* Pegando o elemento cujo id é #tipo-pizza da página html*/
const tipoPizza = document.querySelector("#tipo-pizza");

/* adicionando uma função de "escuta", que verifica se o elemento tipoPizza foi modificado */
/* estrutura: elementoHTML.funcao("qunadoMUdar", funçãoASerExecutada); */
tipoPizza.addEventListener("change", obterEImprimirTipoDePizza);

function obterEImprimirTipoDePizza() {
    /* pega o valor dentro do elemento HTML tipoPizza */
    const tipoSelecionado =  tipoPizza.value;

    /* mostra no console */
    console.log(tipoSelecionado);
    console.log(tipoPizza);
}

/* QUANTIDADE DE PIZZAS */
const qtdPizza = document.querySelector("#qtd-pizza");

qtdPizza.addEventListener("change", obterEImprimirQtdPizza);

function obterEImprimirQtdPizza() {
    const qtdDigitada =  qtdPizza.value;

    console.log(qtdDigitada);
    console.log(qtdPizza);
}

/* INGREDIENTES EXTRA */
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

/* array de ingredientes*/
let ingredientes = [];

/*para cada caixinha faça o que está entre as chaves */
for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener("click", function() {
    
    // Se a caixinha foi marcada
    if (checkboxes[i].checked) {
      // Verificamos se o item NÃO está na lista antes de adicionar
      if (ingredientes.includes(checkboxes[i].value) === false) {
          ingredientes.push(checkboxes[i].value);
      }
    } 
    // Se a caixinha foi desmarcada
    else {
      // 1. Descobrimos em qual posição (índice) o item está
      let posicao = ingredientes.indexOf(checkboxes[i].value);
      
      // 2. Se a posição for maior que -1, significa que ele existe na lista
      if (posicao > -1) {
          // 3. Removemos 1 item a partir daquela posição
          ingredientes.splice(posicao, 1);
      }
    }

    console.log("Lista atualizada:", ingredientes);
  });

  /* OBSERVAÇÕES DA PIZZA */

  const observacoes = document.querySelector('#descricao-pizza');

  observacoes.addEventListener("input", () => {
    console.log(observacoes.value);
  });
}