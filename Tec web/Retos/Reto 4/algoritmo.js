function calcular() {
  let nombre = document.getElementById("nombre").value;
  let peso = parseFloat(document.getElementById("peso").value);
  let altura = parseFloat(document.getElementById("Altura").value);
  let edad = parseInt(document.getElementById("edad").value);

  let IMC = (peso / altura ** 2).toFixed(2);

  if (IMC < 18.5) {
    document.getElementById("clasificacion").textContent =
      "Clasificacion: Bajo peso";
  } else if (18.5 <= IMC && IMC <= 24.9) {
    document.getElementById("clasificacion").textContent =
      "Clasificacion: Peso normal";
  } else if (25.0 <= IMC && IMC <= 29.9) {
    document.getElementById("clasificacion").textContent =
      "Clasificacion: Sobrepeso";
  } else {
    document.getElementById("clasificacion").textContent =
      "Clasificacion: Obesidad";
  }

  let ged = peso * document.getElementById("actividad").value;

  document.getElementById("titulo").textContent = "Resultados para " + nombre;
  document.getElementById("IMC").textContent = "IMC: " + IMC;
  document.getElementById("GED").textContent =
    "Gasto Energetico Diario: " + ged + " Kcal";

  if (IMC < 25) {
    document.getElementById("estado nutricional").textContent =
      "Estado Nutricional: Estado optimo";
  } else {
    document.getElementById("estado nutricional").textContent =
      "Estado nutricional: Necesita atencion especializada";
  }
}
