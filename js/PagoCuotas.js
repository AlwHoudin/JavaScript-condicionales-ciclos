function calcularPagosCuotas() {
  let monto = parseFloat(document.getElementById("monto").value);
  let cuotas = parseInt(document.getElementById("cuotas").value);

  let resultado = document.getElementById("resultado");

  if (isNaN(monto) || isNaN(cuotas) || monto <= 0 || cuotas <= 0) {
    resultado.innerHTML = "Ingrese valores válidos.";
    return;
  }

  let pagoPorCuota = monto / cuotas;

  resultado.innerHTML = "Pago por Cuota: $" + pagoPorCuota.toFixed(2);
}

calcularPagosCuotas();
