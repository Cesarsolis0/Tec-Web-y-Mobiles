// Crear un algoritmo capaz de solicitar 3 notas de un alumno por
// pantalla y obtener el promedio ponderado. Este promedio
// ponderado es de la siguiente forma:
// Nota 1 = 40%
// Nota 2 = 30%
// Nota 3 = 30%
// Si el estudiante obtiene un promedio inferior a 3.95 se debe
// imprimir por pantalla que ha reprobado la asignatura, si obtuvo
// un promedio entre 3.95 a 4.94 el estudiante va a examen. Si la
// nota es igual o superior a 4.95 el alumno se exime de la
// asignatura.

alert("Ingrese Notas entre 1 y 7 ");

let nota1, nota2, nota3;

while (true) {
  nota1 = parseFloat(prompt("Ingrese la primera nota:"));

  if (isNaN(nota1)) {
    alert("Caracteres inválidos. Ingrese números por favor.");
  } else if (nota1 < 1 || nota1 > 7) {
    alert("La primera nota no está permitida. Debe estar entre 1 y 7.");
  } else {
    break;
  }
}

while (true) {
  nota2 = parseFloat(prompt("Ingrese la segunda nota:"));

  if (isNaN(nota2)) {
    alert("Caracteres inválidos. Ingrese números por favor.");
  } else if (nota2 < 1 || nota2 > 7) {
    alert("La primera nota no está permitida. Debe estar entre 1 y 7.");
  } else {
    break;
  }
}

while (true) {
  nota3 = parseFloat(prompt("Ingrese la tercera nota:"));

  if (isNaN(nota3)) {
    alert("Caracteres inválidos. Ingrese números por favor.");
  } else if (nota3 < 1 || nota3 > 7) {
    alert("La primera nota no está permitida. Debe estar entre 1 y 7.");
  } else {
    break;
  }
}

let promedio = (nota1 * 0.4 + nota2 * 0.3 + nota3 * 0.3).toFixed(2);
console.log(promedio);

if (promedio < 3.95) {
  alert(
    "El estudiante ha  obtenido un " +
      promedio +
      ", por lo tanto ha reprobado la asignatura"
  );
} else if (promedio >= 3.95 && promedio < 4.94) {
  alert(
    "El estudiante  ha obtenido un " +
      promedio +
      ", por lo tanto debe ir a examen"
  );
} else {
  alert(
    "El estudiante ha obtenido un " +
      promedio +
      ", por lo tanto se exime de la asignatura"
  );
}
