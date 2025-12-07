/* ==========================================================================================
  Sistema de Filtrado:
  - Funciones para filtrar movimientos por tipo y período.
  - Reutilizable en diferentes contextos de la aplicación.
========================================================================================== */ 

/*
  Filtra movimientos por tipo de transacción.
 */
function filtrarPorTipo(movimientos, tipo) {
  if (tipo === "todos") {
    return movimientos;
  }
  return movimientos.filter(function (mov) {
    return mov.tipo === tipo;
  });
}


/*
  Filtra movimientos por período de tiempo en días.
 */
function filtrarPorPeriodo(movimientos, dias) {
  const fechaLimite = new Date();
  fechaLimite.setDate(fechaLimite.getDate() - dias);

  return movimientos.filter(function (mov) {
    const fechaMov = new Date(mov.fecha);
    return fechaMov >= fechaLimite;
  });
}


/*
  Aplica múltiples filtros a un array de movimientos.
 */
function aplicarFiltrosMultiples(movimientos, filtros = {}) {
  const { tipo = "todos", periodo = 30 } = filtros;

  let movimientosFiltrados = [...movimientos];

  // Aplica filtro de tipo
  if (tipo && tipo !== "todos") {
    movimientosFiltrados = filtrarPorTipo(movimientosFiltrados, tipo);
  }

  // Aplica filtro de período
  if (periodo) {
    movimientosFiltrados = filtrarPorPeriodo(movimientosFiltrados, periodo);
  }
  return movimientosFiltrados;
}


/*
  Calcula totales de ingresos y egresos de un array de movimientos.
 */
function calcularTotales(movimientos) {
  let totalIngresos = 0;
  let totalEgresos = 0;

  movimientos.forEach(function (mov) {
    if (mov.tipo === "deposito" || mov.tipo === "recibido") {
      totalIngresos += mov.monto;
    } else if (mov.tipo === "envio") {
      totalEgresos += mov.monto;
    }
  });

  return {
    totalIngresos,
    totalEgresos,
  };
}
