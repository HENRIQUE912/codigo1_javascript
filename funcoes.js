function clicou1 () {
    window.alert("Voçê cliente no botão 1")
}

function clicou2 () {
    window.alert("Voçê cliente no botão 2")
}

function clicou3 () {0
    window.alert("Voçê cliente no botão 3")
}

function calc (){
    let n1 = window.prompt("Digite numero 1")
    let n2 = window.prompt("Digite numero 2")
    
   
    let result= n1 + n2
   
    let res = window.document.getElementById ("resultado").innerHTML = result // Res é a variavael que vai retora para o HTML com o resultado
   res.innerHTML= "<p>O Resultado é  ${result}  </p>;"

}



