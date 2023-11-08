let nombre =
  prompt(`ingrese un nombre de usuario que cumpla los siguintes requisitos:
1.Debe tener al menos 9 caracteres de longitud.
2.Debe contener letras(mayusculas y minusculas),ademas de numeros.
3.Debe comenzar con un numero y terminar con una letra`);

if (nombre.length < 9) {
  alert("El nombre de Usario es demasiado corto");
} else if (!/[A-Z]/.test(nombre)) {
  alert("El nombre debe contener letras mayusculas");
} else if (!/\d/.test(nombre)) {
  alert("EL nombre debe contener numeros");
} else if (nombre[0] != /\d/) {
  alert("El nombre debe comenzar con algun nunmero");
} else if (nombre.charAt(nombre.length - 1)) {
  alert("el nombre debe terminar con una letra");
} else {
  alert("el nombre de usuario es correcto");
}
