let num = [5,8,2,9,3]
num.push(7)
num.sort()


console.log(num)

console.log(`O vetor tem ${num.length} posições`)


//procura se existe o valor dento de ()
// se nao encontrou vai exibir -1
let pos = num.indexOf(4)


if(pos == -1){
    console.log('O valor nao foi encontrado !')
}else{
    console.log(`O valor esta na posicao ${pos}`)
}


