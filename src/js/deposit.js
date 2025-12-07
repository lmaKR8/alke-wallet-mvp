/* ==========================================================================================
  Depósito de fondos:
  - Lógica para manejar depósitos en la aplicación.
  - Utiliza jQuery para la manipulación del DOM y eventos.
  - Guarda el saldo y el historial de movimientos en localStorage.
  - Importa funciones de utils.js (formatearPesos, mostrarAlerta, guardarMovimiento)
========================================================================================== */

/* 
  Muestra el saldo actual y maneja el formulario de depósito.
*/
$(document).ready(function () {
  mostrarSaldoActual();

  // Envía el formulario de depósito
  $("#depositForm").submit(function (event) {
    event.preventDefault();

    const monto = parseFloat($("#monto").val());

    // Valida el monto
    if (isNaN(monto) || monto <= 0) {
      mostrarAlerta(
        "Por favor, ingresa un monto válido mayor a cero.",
        "warning"
      );
      $("#monto").focus();
      return;
    }

    // Obtiene el saldo actual de localStorage o usa el valor por defecto
    let saldoActual = parseFloat(localStorage.getItem("saldo"));
    if (isNaN(saldoActual)) {
      saldoActual = 12500;
    }

    // Calcula el nuevo saldo redondeado
    const nuevoSaldo = Math.round(saldoActual + monto);

    // Guarda el nuevo saldo en localStorage
    localStorage.setItem("saldo", nuevoSaldo);

    // Guarda el movimiento en el historial
    guardarMovimiento({
      tipo: "deposito",
      monto: monto,
      descripcion: "Depósito recibido",
      fecha: new Date().toISOString(),
    });

    // Muestra el monto depositado
    mostrarLeyendaDeposito(monto);

    mostrarAlerta(
      `¡Depósito exitoso! Monto depositado: $${formatearPesos(
        monto
      )}. Nuevo saldo: $${formatearPesos(nuevoSaldo)}`,
      "success"
    );

    // Redirige al menú después de 3 segundos
    setTimeout(function () {
      window.location.href = "menu.html";
    }, 3000);
  });
});


/*
  Muestra el saldo actual en la interfaz.
*/
function mostrarSaldoActual() {
  const saldo = parseFloat(localStorage.getItem("saldo")) || 12500;
  $("#saldo-actual").text(`$${formatearPesos(saldo)}`);
}


/*
  Muestra una leyenda con el monto depositado.
*/
function mostrarLeyendaDeposito(monto) {
  const leyenda = $("<div></div>").addClass("alert alert-success mt-3").html(`
      <i class="bi bi-check-circle-fill me-2"></i>
      <strong>Monto depositado:</strong> $${formatearPesos(monto)}
    `);
  $("#deposito-info").html(leyenda);
}
