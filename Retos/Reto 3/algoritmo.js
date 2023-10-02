function calcular_propina() {
  let Totalboleta;
  let PorcentajePropina;

  Totalboleta = parseFloat(document.getElementById("TotalBoleta").value);
  PorcentajePropina = parseFloat(
    document.getElementById("PorcentajePropina").value
  );
  if (isNaN(Totalboleta) || isNaN(PorcentajePropina)) {
    document.getElementById("advertencia").textContent =
      "Datos inválidos. Ingrese solo números";
    return;
  }

  let propina = Totalboleta * PorcentajePropina;
  let TotalPagar = Totalboleta + propina;

  document.getElementById("Propina").textContent =
    "Propina: $" + propina + " CLP";
  document.getElementById("TotalPagar").textContent =
    "Total a Pagar: $" + TotalPagar + " CLP";
  document.getElementById("advertencia").textContent = "";
}
