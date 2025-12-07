function contar(){
    let inicio1 = window.document.getElementById('inicio')
    let inicio = Number(inicio1.value)
    let fim1 = window.document.querySelector('input#fim')
    let fim = Number(fim1.value)
    let passo1 = window.document.getElementById('passo')
    let passo = Number(passo1.value)
    let res = window.document.getElementById('resultado')


    if(inicio == 0 || fim == 0){
        res.innerHTML =`Impossível Contar`
        //window.alert('[Erro] Verifique se um dos campos estão em branco ou verifique os dados!') 
        
    }else{
        if(passo == 0){
            window.alert('Passo inválido considerando passo = 1')
            passo =1;
        }
        if(inicio > fim){
            var contador = 0
            res.innerHTML =`Contando<br>`
            do{      
                res.innerHTML += `&#x1F449 ${inicio} `
                inicio -= passo;
            }while(fim <= inicio)
            res.innerHTML += `&#x1F449 &#x1F3C1`      
        }else{
            var contador = 0
            res.innerHTML =`<p>Contando</p>`
            do{      
                res.innerHTML += `&#x1F449 ${inicio} `
                inicio += passo;
            }while(inicio <= fim)
            res.innerHTML += `&#x1F449 \u{1F3C1}`
        }
    }
                 
}