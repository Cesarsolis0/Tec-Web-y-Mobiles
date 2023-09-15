// Realizar un programa en JavaScript con lo aprendido en clases
// que permita ingresar un número por pantalla y saber si es un
// // número par o número impar.

let numero = parseFloat(prompt("Ingrese un numero"));
if (numero % 2 == 0) {
  alert("El numero " + numero + " es PAR");
} else {
  alert("el numero " + numero + " es IMPAR");
}
