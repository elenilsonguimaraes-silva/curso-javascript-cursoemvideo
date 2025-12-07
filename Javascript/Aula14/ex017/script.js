function tabuada(){
    var num = window.document.getElementById('numero')
    var numero = Number(num.value)
    if(numero == 0){
        window.alert('Digite um numero')
        window.document.location.reload()
    }else{

        var mostrar = document.getElementById('res')
        var textTab = document.getElementById('tabuada')
        textTab.innerText =``
        textTab.setAttribute('cols', '15')
        for (var i = 1; i < 100; i++) {
            textTab.innerHTML += `${numero} X ${i} = ${i * numero} \n`
               
        }
    }
    

}