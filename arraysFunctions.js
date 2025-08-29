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

function verifyAge(edad){
    return Number.isInteger(edad) && edad >= 0
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
    let numeroInNumbers = prompt('Ingrese un numero (ingrese "a" cuando termine de ingresar numeros: ')
    if(numeroInNumbers === 'a'){
        inWhile = false
    }else{
        if(numeroInNumbers != ''){
            numeroInNumbers = Number(numeroInNumbers)
        }
        if(isNumber(numeroInNumbers)){
            numbers.push(numeroInNumbers)
            console.log(numeroInNumbers + " added")
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
// 3 Crea una función que reciba un array de edades y devuelva `true` si al menos una edad es mayor o igual a 18 (usa some).
const edades = []
inWhile = true
while(inWhile){
    let edadInEdades = prompt('Ingrese una edad (ingrese "a" para termine de ingresar edades): ')
    if(edadInEdades === 'a'){
        inWhile = false
    }else{
        edadInEdades = Number(edadInEdades)
        if(verifyAge(edadInEdades)){
            edades.push(edadInEdades)
            console.log(edadInEdades + " added")
        }
        else{
            console.log("El sistema solo acepta numeros enteros positivos")
        }
    }
}
if(arrayNotEmpty(edades)){
    edades.some((edad) => edad >= 18) ? console.log("Existe un mayor de edad en la lista") 
    : console.log("No hay mayores de edad en la lista")
}else{
    console.log("El array enviado esta vacio o no es un array")
}