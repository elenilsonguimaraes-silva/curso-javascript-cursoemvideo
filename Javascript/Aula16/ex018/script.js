let numeros = []
let maior = 1
let menor = 100
let soma = 0
let divRes = window.document.getElementById('res')
function adicionar(){   
    let textArea = window.document.getElementById('listaNum')
    let num = window.document.getElementById('numero')
    let numero = Number(num.value)
    if(numero < 1 || numero > 100){
        window.alert('Valor inválido ou já encontrado na lista.')
    }else{   
        if(numeros.indexOf(numero) != -1){
            window.alert("Valor inválido ou já encontrado na lista!")
        }else{
            divRes.innerHTML=''
            numeros.push(numero)
            if(numero > maior){
                maior = numero;
            }
            if(numero < menor){
                menor = numero;
            }
            textArea.innerHTML += `Valor ${numero} adicionado\n`
            soma += numero;
        }
    }
}
function finalizar(){
    if( numeros.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    }else{
        
        divRes.innerHTML+=`<p>Ao todo temos ${numeros.length} números cadastrados</p>`
        divRes.innerHTML+= `<p>O maior valor informado foi ${maior}</p>`
        divRes.innerHTML+=`<p>O menor valor informado foi ${menor}</p>`
        divRes.innerHTML+=`<p>Somando todos os valores, temos ${soma}</p>`
        divRes.innerHTML+=`<p>A média dos valores digitados é ${soma / numeros.length}</p>`
    }
}