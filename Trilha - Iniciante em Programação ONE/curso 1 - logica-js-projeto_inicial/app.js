alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 500
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)
let tentativas = 1
let chute 

while (chute != numeroSecreto){
    let chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    
    if (chute == numeroSecreto){
            break;
    } else {
        if (chute > numeroSecreto){
            alert('O número é menor, tente novamente')
        }else{
            alert('O número é maior, tente novamente')
        }
        tentativas += 1;
    }
}

//operador ternário
//igual um if em C, se for maior que 1 é tentativas, se não, é tentativa
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`Isso ai! Você acertou o número secreto ${numeroSecreto}. Você precisou de ${tentativas} ${palavraTentativa}!`);


