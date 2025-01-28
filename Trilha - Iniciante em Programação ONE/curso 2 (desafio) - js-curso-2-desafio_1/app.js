let title = document.getElementById('titleMain')
title.innerHTML = 'Hora do Desafio'

let consoleMsg = document.getElementById('consoleMsg')
consoleMsg.addEventListener('click', function(){
    console.log('O botão foi clicado')
})

let alertMsg = document.getElementById('alertMsg')
alertMsg.addEventListener('click', function(){
    alert('Eu amo JS')
})


let promptMsg = document.getElementById('promptMsg')
promptMsg.addEventListener('click', function(){
    let cidade = prompt('Me diga o nome de uma cidade do Brasil:')
    alert(`Eu estive em ${cidade} e lembrei de você`)
})

let somaMsg = document.getElementById('somaMsg')
somaMsg.addEventListener('click', function(){
    let number1 = parseInt(prompt('Me diga um numero'))
    let number2 = parseInt(prompt('Agora me diga outro numero'))
    alert(`A soma dos dois é ${number1 + number2}`)
})
