
let button = false
let buttonIMC = document.getElementById('calcularIMC')


buttonIMC.addEventListener('click', function(){
    let textValues = document.getElementById('colectValuesIMC')
    let mostrarIMC = document.getElementById('mostrarIMC')

    if (button){
        textValues.style.display = 'none'
        mostrarIMC.style.display = 'none'
    }else{
        textValues.style.display = 'block'
        mostrarIMC.style.display = 'block'
    }

    button = !button
});

mostrarIMC.addEventListener('click', function(){
    let peso = document.getElementById('peso').value
    let altura = document.getElementById('altura').value
    var imc = parseInt(peso / (altura ** 2));
    var resultadoIMC = imc > 25 ? 'acima do peso' : 'com o peso ideal'
    let viewIMC = document.getElementById('viewIMC')
    viewIMC.innerHTML = `Seu IMC é ${imc}, e você esta ${resultadoIMC}`
})