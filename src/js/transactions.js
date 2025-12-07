/* ==========================================================================================
  Historial de transacciones:
  - Lógica para visualizar movimientos con filtros y paginación.
  - Importa funciones de utils.js (formatearPesos)
  - Importa funciones de pagination.js (crearPaginador, setPaginadorDatos, getDatosPaginaActual, generarControlesPaginacion, configurarEventosPaginacion)
  - Importa funciones de filters.js (aplicarFiltrosMultiples, calcularTotales)
========================================================================================== */

/*
  Muestra el historial de movimientos con filtros y paginación.
*/
const paginador = crearPaginador(5);

$(document).ready(function () {
  cargarMovimientos();
  agregarEventosFiltros();
  configurarEventosPaginacion(".pagination", paginador, function () {
    mostrarMovimientosPaginados();
    // Scroll suave al inicio de la lista
    $(".transaction-list").get(0)?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  });
});


/* 
  Agrega eventos a los filtros de tipo y período.
*/
function agregarEventosFiltros() {
  $("#filtroTipo, #filtroPeriodo").change(function () {
    aplicarFiltros();
  });
}


/* 
  Aplica los filtros seleccionados y actualiza la lista de movimientos.
*/
function aplicarFiltros() {
  const tipoSeleccionado = $("#filtroTipo").val();
  const periodoSeleccionado = parseInt($("#filtroPeriodo").val());

  // Obtiene movimientos desde localStorage
  const movimientos = JSON.parse(localStorage.getItem("movimientos")) || [];

  // Aplica filtros utilizando el módulo filters.js
  const movimientosFiltrados = aplicarFiltrosMultiples(movimientos, {
    tipo: tipoSeleccionado,
    periodo: periodoSeleccionado,
  });

  // Actualiza el paginador con los movimientos filtrados
  setPaginadorDatos(paginador, movimientosFiltrados);

  // Muestra los movimientos filtrados con paginación
  mostrarMovimientosPaginados();
}


/* 
  Carga los movimientos desde localStorage o datos hardcodeados si no existen.
*/
function cargarMovimientos() {
  // Obtiene movimientos desde localStorage o crear movimientos por defecto
  let movimientos = JSON.parse(localStorage.getItem("movimientos"));

  // Si no hay movimientos, crea datos hardcodeados
  if (!movimientos || movimientos.length === 0) {
    movimientos = [
      // 3 Ingresos (total: 18,500)
      {
        tipo: "deposito",
        monto: 8000,
        descripcion: "Depósito inicial",
        mensaje: "Carga de fondos a la cuenta",
        fecha: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 días atrás
      },
      {
        tipo: "deposito",
        monto: 5500,
        descripcion: "Recarga de saldo",
        mensaje: "Transferencia desde cuenta bancaria",
        fecha: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 días atrás
      },
      {
        tipo: "recibido",
        monto: 5000,
        descripcion: "Pago recibido de Juan Pérez",
        mensaje: "Gracias por el servicio",
        fecha: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 días atrás
      },
      // 4 Egresos (total: 6,000) - Para que el saldo final sea 12,500
      {
        tipo: "envio",
        monto: 1500,
        descripcion: "Envío a María González",
        mensaje: "Pago de servicios",
        fecha: new Date(Date.now() - 12 * 24 * 60 * 60 * 1000).toISOString(), // 12 días atrás
      },
      {
        tipo: "envio",
        monto: 2000,
        descripcion: "Envío a Carlos Pérez",
        mensaje: "Préstamo personal",
        fecha: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(), // 8 días atrás
      },
      {
        tipo: "envio",
        monto: 1800,
        descripcion: "Envío a Ana Rodríguez",
        mensaje: "Compra compartida",
        fecha: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(), // 4 días atrás
      },
      {
        tipo: "envio",
        monto: 700,
        descripcion: "Envío a Pedro López",
        mensaje: "Pago de cena",
        fecha: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 días atrás
      },
    ];

    // Ordena movimientos por fecha (más recientes primero)
    movimientos.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

    // Guarda los movimientos hardcodeados en localStorage
    localStorage.setItem("movimientos", JSON.stringify(movimientos));
  }

  // Calcula totales de ingresos y egresos usando filters.js
  const { totalIngresos, totalEgresos } = calcularTotales(movimientos);

  // Actualiza tarjetas de ingresos y egresos
  $(".card.text-center")
    .eq(0)
    .find("h4")
    .text(`$${formatearPesos(totalIngresos)}`);
  $(".card.text-center")
    .eq(1)
    .find("h4")
    .text(`$${formatearPesos(totalEgresos)}`);

  // Configura el paginador y muestra los movimientos
  setPaginadorDatos(paginador, movimientos);
  mostrarMovimientosPaginados();
}


/* 
  Muestra los movimientos de la página actual con paginación.
*/
function mostrarMovimientosPaginados() {
  const movimientosPagina = getDatosPaginaActual(paginador);

  // Muestra los movimientos
  mostrarMovimientos(movimientosPagina);

  // Actualiza los controles de paginación (solo los items <li>)
  const htmlPaginacion = generarControlesPaginacion(paginador, true);
  $(".pagination").html(htmlPaginacion);
} 


/*
  Muestra los movimientos en la lista. 
*/
function mostrarMovimientos(movimientos) {
  const listaMovimientos = $("#lista-movimientos");

  // Actualiza el badge de cantidad con el total de movimientos filtrados
  const totalMovimientos = paginador.datos.length;
  if (totalMovimientos === 0) {
    $("#badge-cantidad").text("Sin movimientos");
  } else if (totalMovimientos === 1) {
    $("#badge-cantidad").text("1 movimiento");
  } else {
    $("#badge-cantidad").text(`${totalMovimientos} movimientos`);
  }

  if (movimientos.length === 0) {
    // Muestra mensaje cuando no hay movimientos
    listaMovimientos.html(`
      <div class="text-center py-5">
        <div class="mb-4">
          <i class="bi bi-inbox empty-state-icon-large"></i>
        </div>
        <h6 class="text-muted mb-2">No hay movimientos que mostrar</h6>
        <p class="text-muted small mb-0">
          <i class="bi bi-info-circle me-1"></i>
          Realiza un depósito o envío para ver tu historial
        </p>
      </div>
    `);
    return;
  }

  // Limpia la lista y crea el elemento ul
  listaMovimientos.html('<ul class="list-group list-group-flush"></ul>');
  const ul = listaMovimientos.find("ul");

  // Agrega cada movimiento
  movimientos.forEach(function (mov) {
    const elemento = crearElementoMovimiento(mov);
    ul.append(elemento);
  });
}


/* 
  Crea el elemento HTML para un movimiento.
*/
function crearElementoMovimiento(movimiento) {
  let icono, colorClass, signo, titulo;

  if (movimiento.tipo === "deposito") {
    icono = "bi-arrow-down-circle-fill";
    colorClass = "success";
    signo = "+";
    titulo = "Depósito recibido";
  } else if (movimiento.tipo === "envio") {
    icono = "bi-arrow-up-circle-fill";
    colorClass = "danger";
    signo = "-";
    titulo = "Envío de dinero";
  } else if (movimiento.tipo === "recibido") {
    icono = "bi-arrow-down-circle-fill";
    colorClass = "success";
    signo = "+";
    titulo = "Dinero recibido";
  }

  // Formatea fecha
  const fecha = new Date(movimiento.fecha);
  const fechaFormateada =
    fecha.toLocaleDateString("es-CL", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }) +
    ", " +
    fecha.toLocaleTimeString("es-CL", {
      hour: "2-digit",
      minute: "2-digit",
    });

  // Crea el elemento
  const li = $("<li></li>").addClass("list-group-item py-3").html(`
      <div class="d-flex justify-content-between align-items-start">
        <div class="d-flex">
          <div class="bg-${colorClass} bg-opacity-10 text-${colorClass} rounded-circle d-flex align-items-center justify-content-center me-3 stat-circle-icon">
            <i class="bi ${icono}"></i>
          </div>
          <div>
            <h6 class="mb-1">${movimiento.descripcion || titulo}</h6>
            <small class="text-muted">
              <i class="bi bi-calendar3 me-1"></i>
              ${fechaFormateada}
            </small>
            ${
              movimiento.mensaje
                ? `<br><small class="text-muted"><i class="bi bi-chat-left-text me-1"></i>"${movimiento.mensaje}"</small>`
                : ""
            }
          </div>
        </div>
        <div class="text-end">
          <strong class="text-${colorClass}">${signo}$${formatearPesos(
    movimiento.monto
  )}</strong>
          <br>
          <span class="badge bg-success bg-opacity-10 text-success mt-1">Completado</span>
        </div>
      </div>
    `);

  return li;
}


/* 
  Obtiene el nombre del tipo de transacción.
*/
function getTipoTransaccion(tipo) {
  switch (tipo) {
    case "deposito":
      return "Depósito";
    case "envio":
      return "Envío";
    case "recibido":
      return "Recibido";
    default:
      return "Movimiento";
  }
}
