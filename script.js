var txtNum = document.getElementById('idInumber')
var lista = document.getElementById('idSelect')
var res = document.getElementById('res')
var vetor = []

function isNumber(n){

if(Number(n) >= 1 && Number(n) <= 100){return true}
else{return false}

}

function inLista(n, v){

if(v.indexOf(n)!=-1){return true}
else{return false}


}




function adicionar(){

    if(isNumber(txtNum.value) && !inLista(txtNum.value, vetor)){
    vetor.push(Number(txtNum.value))
    var item = document.createElement('option')
    item.text=`O numero ${txtNum.value} foi adicionado!`
    lista.appendChild(item)
    txtNum.value=''
    txtNum.focus()
    res.innerHTML=''
    }

    else{

    window.alert('Erro, numero invalido ou já presente na lista!')

}

}

function finalizar(){
if(vetor.length==0){
    window.alert('Erro, a lista de valores não pode estar vazia!')
}

else{

var tot = vetor.length
var maior = vetor [0]
var menor = vetor [0]
var media = 0

for(var c=0; c < vetor.length; c++) {
if(vetor[c] > maior){maior = vetor[c]}

if(vetor[c] < menor){menor = vetor[c]}

media+=vetor[c]

}
media/=tot



}


res.innerHTML=`<p>A lista contem ${tot} valores!</p>`
res.innerHTML+=`<p>O maior valor da lista é ${maior}</p>`
res.innerHTML+=`<p>O menor valor da lista é ${menor}</p>`
res.innerHTML+=`<p>A média de valores é ${media}</p>`





}