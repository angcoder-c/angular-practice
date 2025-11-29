// EJERCICIOS DE ARRAY GENERADOS POR CHATGPT
/*
 * 1. Mostrar nombres de usuarios
 * Dado un array usuarios, mostrar con forEach cada nombre precedido
 * por "Usuario:".
 */
console.log("========= EJERCICIO 01 =========");
var usuarios = ["Ana", "Luis", "Marcos", "Sofía"];
usuarios.forEach(function (usuario) { return console.log("Usuario: ".concat(usuario)); });
/*
 * 2. Contar cuántos números negativos hay
 * Sin usar .length ni filter, contar cuántos elementos
 * son negativos usando forEach.
 */
var count = 0;
var numeros = [3, -1, -7, 4, 10, -2];
console.log("========= EJERCICIO 02 =========");
numeros.forEach(function (numero) {
    if (numero < 0)
        count++;
});
console.log(count);
/*
 * 3. Obtener el índice del número mayor
 * Recorrer con forEach y guardar la posición del número más grande.
 */
var majorIndex = 0;
var valores = [10, 55, 3, 99, 42, 8];
valores.forEach(function (numero) {
    if (valores[majorIndex] < numero) {
        majorIndex = valores.indexOf(numero);
    }
});
console.log("========= EJERCICIO 03 =========");
console.log(majorIndex);
