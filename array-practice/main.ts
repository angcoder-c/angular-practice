// EJERCICIOS DE ARRAY GENERADOS POR CHATGPT

/*
 * 1. Mostrar nombres de usuarios
 * Dado un array usuarios, mostrar con forEach cada nombre precedido 
 * por "Usuario:".
 */
console.log("========= EJERCICIO 01 =========")
const usuarios = ["Ana", "Luis", "Marcos", "Sofía"];
usuarios.forEach((usuario: string) => console.log(`Usuario: ${usuario}`))

/*
 * 2. Contar cuántos números negativos hay
 * Sin usar .length ni filter, contar cuántos elementos 
 * son negativos usando forEach.
 */

let count = 0
const numeros = [3, -1, -7, 4, 10, -2];

console.log("========= EJERCICIO 02 =========")
numeros.forEach((numero: number)=>{
    if (numero < 0) count++
})
console.log(count)

/*
 * 3. Obtener el índice del número mayor
 * Recorrer con forEach y guardar la posición del número más grande.
 */

let majorIndex: number = 0
const valores = [10, 55, 3, 99, 42, 8];
valores.forEach((numero: number)=>{
    if (valores[majorIndex]<numero) {
        majorIndex = valores.indexOf(numero)
    }
})
console.log("========= EJERCICIO 03 =========")
console.log(majorIndex)