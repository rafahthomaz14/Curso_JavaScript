let valores = [8,1,7,4,2,9]

valores.sort()

//console.log(valores)

/*
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/

/*
for(pos = 0; pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/


//para cada posicao em valores
//array
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//procura se existe o valor dento de ()
// se nao encontrou vai exibir -1
valores.indexOf(8)