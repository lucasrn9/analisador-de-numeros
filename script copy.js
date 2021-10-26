var txtNum = document.getElementById('idInumber')
var lista = document.getElementById('idSelect')
var res = document.getElementById('res')
var vetor = []

function isNumber(n){

if (Number(n) >= 1 && Number(n) <= 100){return true}

else{return false}
}

function inLista(n,l){

if(l.indexOf(Number(n))!=-1){return true}
else{return false}

}


function adicionar(){

if(isNumber(txtNum.value) && !inLista(txtNum.value, vetor)){
vetor.push(Number(txtNum.value))
var item = document.createElement('option')
item.text=`O numero ${txtNum.value} foi adicionado!`
lista.appendChild(item)
txtNum.value=''
res.innerHTML=''
txtNum.focus()
}

else{
window.alert('Numero inválido ou já presente na lista!')
}



}

function finalizar(){

if(vetor.length==0){

window.alert('Erro, a lista não pode estar vazia')

}

else{

var tot = vetor.length
var maior = vetor[0]
var menor = vetor[0]

for(c=0;c<=vetor.length;c++){

if(vetor[c] > maior){
    maior = vetor[c]
}

if(vetor[c] < menor){
    menor = vetor[c]
}

}





}

res.innerHTML=`<p>A lista contem ${tot} numeros<p>`
res.innerHTML+=`<p>O maior numero da lista é o ${maior}<p>`
res.innerHTML+=`<p>O menor numero da lista é o ${menor}<p>`


}
