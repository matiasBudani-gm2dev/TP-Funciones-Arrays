const prompt = require("prompt-sync")()
// 1 Crea una función que reciba un array de frutas y una fruta a buscar. La función debe devolver `true` si la fruta está en el array y `false` en caso contrario (usa includes).
function isArray(array){
    return Array.isArray(array)
}
function arrayNotEmpty(array){
    return Array.isArray(array) && array.length > 0
}

function isNumber(variable){
    return !isNaN(variable) && typeof variable === 'number'
}

function findElement(array, element){
    if(array.includes(element)){
        return true
    }
    return false
}
function checkIfAllPositives(array){
    return array.every((number) => number >= 0)
}

const frutas = []
let inWhile = true
while(inWhile){
    let frutaInFrutas = prompt("Ingrese una fruta (ingrese 0 cuando termine de ingresar frutas: ").toLocaleLowerCase()
    if(frutaInFrutas === '0'){
        inWhile = false
    }else{
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
// 2 Crea una función que reciba un array de números y devuelva `true` si todos los números son positivos (usa every).
const numbers = []
inWhile = true
while(inWhile){
    let numero = prompt('Ingrese un numero (ingrese "a" cuando termine de ingresar numeros: ')
    if(numero === 'a'){
        inWhile = false
    }else{
        if(numero != ''){
            numero = Number(numero)
        }
        if(isNumber(numero)){
            numbers.push(numero)
            console.log(numero + " added")
        }else{
            console.log("El sistema solo acepta numeros.")
        }
    }
}
if(arrayNotEmpty(numbers)){
    if(checkIfAllPositives(numbers)){
        console.log("Todos los numeros dentro del array son positivos")
    }else{
        console.log("No todos los numeros dentro del array son positivos")
    }
}else{
    console.log("El parametro recibido no es un array o esta vacio")
}