function clicou1 () {
    window.alert("Voçê cliente no botão 1")
}

function clicou2 () {
    window.alert("Voçê cliente no botão 2")
}

function clicou3 () {0
    window.alert("Voçê cliente no botão 3")
}




function ads (){
    var n1 = window.prompt("Digite numero 1")
    var n2 = window.prompt("Digite numero 2")
    

   
    let result= parseFloat(n1) + parseFloat(n2)
    console.log(result)
   
    let res = window.document.getElementById ("resultado").innerHTML = result// Res é a variavael que vai retora para o HTML com o resultado
   //res.innerHTML= "<p>O Resultado é  ${result}  </p>;"

}

function sub (){
    var n1 = window.prompt("Digite numero 1")
    var n2 = window.prompt("Digite numero 2")
    

   
    let result= n1 - n2 
   
    let res = window.document.getElementById ("resultado").innerHTML = result// Res é a variavael que vai retora para o HTML com o resultado
   //res.innerHTML= "<p>O Resultado é  ${result}  </p>;"

}
function mult (){
    var n1 = window.prompt("Digite numero 1")
    var n2 = window.prompt("Digite numero 2")
    

   
  

    let result= n1 * n2 
   
    let res = window.document.getElementById ("resultado").innerHTML = result// Res é a variavael que vai retora para o HTML com o resultado
   //res.innerHTML= "<p>O Resultado é  ${result}  </p>;"

}
function div (){
    var n1 = window.prompt("Digite numero 1")
    var n2 = window.prompt("Digite numero 2")
    

   
    let result= n1 / n2 
   
    let res = window.document.getElementById ("resultado").innerHTML = result// Res é a variavael que vai retora para o HTML com o resultado
   res.innerHTML= "<p>O Resultado é  ${result}  </p>;"

}


