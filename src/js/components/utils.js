/* ==========================================================================================
  Utilidades globales:
  - Funciones reutilizables en toda la aplicación.
  - Formato de moneda, manejo de alertas y almacenamiento de movimientos.
========================================================================================== */

/*
  Formatea un monto numérico en formato de pesos chilenos (CLP).
 */
function formatearPesos(monto) {
  const montoEntero = Math.round(monto);
  return montoEntero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}


/*
  Muestra una alerta en la interfaz utilizando Bootstrap.
 */
function mostrarAlerta(
  mensaje,
  tipo,
  containerId = "alert-container",
  autoHideTime = 3000
) {
  // Determina el icono según el tipo de alerta
  let icono;
  switch (tipo) {
    case "success":
      icono = "check-circle-fill";
      break;
    case "danger":
      icono = "x-circle-fill";
      break;
    case "warning":
      icono = "exclamation-triangle-fill";
      break;
    case "info":
      icono = "info-circle-fill";
      break;
    default:
      icono = "info-circle-fill";
  } 

  // Crea el elemento de alerta
  const alerta = $("<div></div>")
    .addClass(`alert alert-${tipo} alert-dismissible fade show`)
    .attr("role", "alert").html(`
      <i class="bi bi-${icono} me-2"></i>
      ${mensaje}
      <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `);

  // Limpia alertas anteriores y agrega la nueva.
  $(`#${containerId}`).html(alerta);

  // Auto-oculta la alerta si se especificó tiempo.
  if (autoHideTime > 0) {
    setTimeout(function () {
      alerta.alert("close");
    }, autoHideTime);
  }
}


/*
  Guarda un movimiento en el historial almacenado en localStorage.
 */
function guardarMovimiento(movimiento) {
  // Obtiene movimientos existentes desde localStorage o crea array vacío
  let movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

  // Agrega el nuevo movimiento al inicio del array (más recientes primero)
  movimientos.unshift(movimiento);

  // Guarda en localStorage
  localStorage.setItem("movimientos", JSON.stringify(movimientos));
}
