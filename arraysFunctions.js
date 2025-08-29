const prompt = require("prompt-sync")()
// 1 Crea una función que reciba un array de frutas y una fruta a buscar. La función debe devolver `true` si la fruta está en el array y `false` en caso contrario (usa includes).
function isArray(array){
    return Array.isArray(array)
}
function findElement(array, element){
    for(i = 0; i < array.length; i++){
        if(element === array[i]){
            return true
        }
    }
    return false
}
const frutas = []
let inWhile = true
while(inWhile){
    let frutaInFrutas = prompt("Ingrese una fruta (ingrese 0 cuando termine de ingresar frutas: ").toLocaleLowerCase()
    if(frutaInFrutas === '0'){
        inWhile = false
    }
    else{
        frutas.push(frutaInFrutas)
        console.log(frutaInFrutas + " added")
    }
}
let frutaABuscar = prompt("Que fruta queres buscar: ").toLocaleLowerCase()
if(isArray(frutas)){
    if(findElement(frutas, frutaABuscar)){
        console.log(frutaABuscar + " se encuentra en la lista de frutas")
    }else{
        console.log(frutaABuscar + " no se encuentra en nuestra lista de frutas")
    }
}else{
    console.log("El parametro recibido no es un array")
}