let frase = prompt("Ingrese una frase:");
let letra = prompt("Ingrese la letra a buscar:");
let total = [];

for (let i = 0; i < frase.length; i++) {
  if (frase[i] === letra) {
    total.push(letra);
  }
}
alert(`le letra aparece ${total.length} veces`);
