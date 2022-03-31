const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function soma(...array){
    let soma = 0
    array.map((array) =>{
        soma += array
    })
    return soma
}

console.log(soma(...array))