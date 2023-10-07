function calculartotal() {
  let subtotal = parseFloat(prompt("Ingrese el subtotal"));
  let valor_iva = parseFloat(prompt("INgrese el iva a aplicar"));

  let iva_aplicado = (subtotal * valor_iva) / 100;

  let total = subtotal + iva_aplicado;

  if (isNaN(valor_iva)) {
    let nuevp_iva = 19.5;

    alert(
      `el total a pagar es ${subtotal + subtotal * (nuevp_iva / 100)} pesos`
    );
  } else {
    alert(`total a pagar es ${total}`);
  }
}

calculartotal();
