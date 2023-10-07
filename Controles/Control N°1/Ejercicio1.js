function evaluar() {
  let puntaje = parseFloat(
    prompt(`Ingrese la puntauacion del emepleado:
Considere los siguientes puntajes:
  Puntaje        Rendimiento
 0.0 o 0.2         insufuciente
    0.4            aceptable
    0.6            meritorio
    0.8            exelente`)
  );

  let dinero = 250000;

  let DineroRecibido = dinero * puntaje;
  if (puntaje != 0.2 || puntaje != 0.4 || puntaje != 0.6 || puntaje != 0.8) {
    alert(
      "El puntaje ingresado no es valido,ingrese uno de los mostrados anteriormente"
    );
  } else if (puntaje === 0.0 || puntaje === 0.2) {
    alert(`su rendimeinto fue insuficiente,recibe: ${DineroRecibido} pesos`);
  } else if (puntaje === 0.4) {
    alert(`su rendimiento fue aceptable,recibe: ${DineroRecibido} pesos`);
  } else if (puntaje === 0.6) {
    alert(`su rendimineto fue meritorio,recibe: ${DineroRecibido} pesos`);
  } else {
    alert(`su rendimineto fue excelente,recibe: ${DineroRecibido} pesos`);
  }
}

evaluar();
