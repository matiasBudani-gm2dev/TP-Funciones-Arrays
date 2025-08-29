const prompt = require("prompt-sync")()
// 1 Crea una función que reciba un array de frutas y una fruta a buscar. La función debe devolver `true` si la fruta está en el array y `false` en caso contrario (usa includes).
function saltoLinea(){
    console.log("\n")
}
function isArray(array, notEmptyVerification=false){
    let verifyArray = Array.isArray(array)
    if(verifyArray && notEmptyVerification){
        return array.length > 0 && verifyArray
    }
    return verifyArray
}

function isNumber(variable, edad=false){
    let verificarNumero = !isNaN(variable) && typeof variable === 'number' && variable != ''
    if(edad && verificarNumero){
        return Number.isInteger(variable) && variable >= 0
    }
    return verificarNumero
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

function validName(str, strMinLength){
    return /^[a-zA-Z\s]*$/.test(str) && str.trim().length >= strMinLength
}

const frutas = []
let inWhile = true
while(inWhile){
    let frutaInFrutas = prompt("Ingrese una fruta (ingrese 0 cuando termine de ingresar frutas: ").toLocaleLowerCase()
    if(frutaInFrutas === '0'){
        inWhile = false
    }else{
        if(validName(frutaInFrutas, 3)){
            frutas.push(frutaInFrutas)
            console.log(frutaInFrutas + " added")
        }else{
            console.log("Nuesto sistema solo acepta frutas con letras y mas de 2 caracteres")
        }
    }
}
if(isArray(frutas)){
    let frutaABuscar = prompt("Que fruta queres buscar: ").toLocaleLowerCase()
    if(findElement(frutas, frutaABuscar)){
        console.log(frutaABuscar + " se encuentra en la lista de frutas")
    }else{
        console.log(frutaABuscar + " no se encuentra en nuestra lista de frutas")
    }
}else{
    console.log("El parametro recibido no es un array")
}
saltoLinea()
// 2 Crea una función que reciba un array de números y devuelva `true` si todos los números son positivos (usa every).
const numbers = []
inWhile = true
while(inWhile){
    let numeroInNumbers = prompt('Ingrese un numero (ingrese "a" cuando termine de ingresar numeros: ')
    if(numeroInNumbers === 'a'){
        inWhile = false
    }else{
        numeroInNumbers = Number(numeroInNumbers)
        if(isNumber(numeroInNumbers)){
            numbers.push(numeroInNumbers)
            console.log(numeroInNumbers + " added")
        }else{
            console.log("El sistema solo acepta numeros.")
        }
    }
}
if(isArray(numbers, verifyNotEmpty=true)){
    if(checkIfAllPositives(numbers)){
        console.log("Todos los numeros dentro del array son positivos")
    }else{
        console.log("No todos los numeros dentro del array son positivos")
    }
}else{
    console.log("El parametro recibido no es un array o esta vacio")
}
saltoLinea()
// 3 Crea una función que reciba un array de edades y devuelva `true` si al menos una edad es mayor o igual a 18 (usa some).
const edades = []
inWhile = true
while(inWhile){
    let edadInEdades = prompt('Ingrese una edad (ingrese "a" para termine de ingresar edades): ')
    if(edadInEdades === 'a'){
        inWhile = false
    }else{
        edadInEdades = Number(edadInEdades)
        if(isNumber(edadInEdades, verificacionEdad=true)){
            edades.push(edadInEdades)
            console.log(edadInEdades + " added")
        }
        else{
            console.log("El sistema solo acepta numeros enteros positivos")
        }
    }
}
if(isArray(edades, verifyNotEmpty=true)){
    edades.some((edad) => edad >= 18) ? console.log("Existe un mayor de edad en la lista") 
    : console.log("No hay mayores de edad en la lista")
}else{
    console.log("El array enviado esta vacio o no es un array")
}
saltoLinea()
// 4 Crea una función que reciba un array de nombres y un nombre a buscar. Si el nombre está en el array, debe devolver un mensaje que diga 'Nombre encontrado', en caso contrario 'Nombre no encontrado'.
const nombres = []
inWhile = true
while(inWhile){
    nombreInNombres = prompt('Ingrese un nombre (ingrese "0" cuando termine de ingresar nombres): ').toLocaleLowerCase()
    if(nombreInNombres === '0'){
        inWhile = false
    }else{
        if(validName(nombreInNombres, 2)){
            nombres.push(nombreInNombres)
            console.log(nombreInNombres + " added")
        }else{
            console.log("El sistema solo acepta nombres con letras y mas de 1 caracter")
        }
    }
}
if(isArray){
    let nombreABuscar = prompt("Que nombre queres buscar: ").toLocaleLowerCase()
    if(findElement(nombres, nombreABuscar)){
        console.log(nombreABuscar + " se encuentra en la lista")
    }else{
        validName(nombreABuscar, 2) ? console.log(nombreABuscar + " no se encuentra en la lista")
        : console.log(nombreABuscar + " no se encuentra en nuestra lista.\nLe recomendamos verificar que ingreso el nombre correctamente")
    }
}else{
    console.log("El parametro recibido no es un array")
}