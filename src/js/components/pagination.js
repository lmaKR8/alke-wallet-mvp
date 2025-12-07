/* ==========================================================================================
  Sistema de Paginación:
  - Funciones para paginar arrays de datos.
  - Reutilizable para listas de movimientos, contactos, etc.
========================================================================================== */

/*
  Crea un nuevo estado de paginación.
 */
function crearPaginador(itemsPorPagina = 5) {
  return {
    itemsPorPagina: itemsPorPagina,
    paginaActual: 1,
    datos: [],
  };
}


/*
  Establece los datos a paginar y reinicia a la primera página.
 */
function setPaginadorDatos(paginador, datos) {
  paginador.datos = datos;
  paginador.paginaActual = 1;
}


/*
  Obtiene el total de páginas.
 */
function getTotalPaginas(paginador) {
  return Math.ceil(paginador.datos.length / paginador.itemsPorPagina);
}


/*
  Obtiene los datos de la página actual.
 */
function getDatosPaginaActual(paginador) {
  const inicio = (paginador.paginaActual - 1) * paginador.itemsPorPagina;
  const fin = inicio + paginador.itemsPorPagina;
  return paginador.datos.slice(inicio, fin);
}


/*
  Cambia a una página específica.
 */
function irAPagina(paginador, numeroPagina) {
  const totalPaginas = getTotalPaginas(paginador);
  if (numeroPagina >= 1 && numeroPagina <= totalPaginas) {
    paginador.paginaActual = numeroPagina;
    return true;
  }
  return false;
}


/*
  Verifica si hay página anterior.
 */
function tienePaginaAnterior(paginador) {
  return paginador.paginaActual > 1;
}


/*
  Verifica si hay página siguiente.
 */
function tienePaginaSiguiente(paginador) {
  return paginador.paginaActual < getTotalPaginas(paginador);
}


/*
  Obtiene información del estado actual de paginación.
 */
function getPaginadorInfo(paginador) {
  return {
    paginaActual: paginador.paginaActual,
    totalPaginas: getTotalPaginas(paginador),
    itemsPorPagina: paginador.itemsPorPagina,
    totalItems: paginador.datos.length,
    tienePaginaAnterior: tienePaginaAnterior(paginador),
    tienePaginaSiguiente: tienePaginaSiguiente(paginador),
  };
}


/*
  Genera HTML para controles de paginación de Bootstrap.
 */
function generarControlesPaginacion(paginador, soloItems = false) {
  const info = getPaginadorInfo(paginador);
  const {
    paginaActual,
    totalPaginas,
    tienePaginaAnterior: hasPrevious,
    tienePaginaSiguiente: hasNext,
  } = info;

  if (totalPaginas === 0) {
    return "";
  }

  let html = soloItems
    ? ""
    : '<ul class="pagination justify-content-center mb-0">';

  // Botón Anterior
  const anteriorDisabled = !hasPrevious ? "disabled" : "";
  html += `
    <li class="page-item ${anteriorDisabled}">
      <a class="page-link" href="#" data-pagina="${paginaActual - 1}">
        <i class="bi bi-chevron-left"></i>
        Anterior
      </a>
    </li>
  `;

  // Páginas numeradas
  for (let i = 1; i <= totalPaginas; i++) {
    const activeClass = i === paginaActual ? "active" : "";
    html += `
      <li class="page-item ${activeClass}">
        <a class="page-link" href="#" data-pagina="${i}">${i}</a>
      </li>
    `;
  }

  // Botón Siguiente
  const siguienteDisabled = !hasNext ? "disabled" : "";
  html += `
    <li class="page-item ${siguienteDisabled}">
      <a class="page-link" href="#" data-pagina="${paginaActual + 1}">
        Siguiente
        <i class="bi bi-chevron-right"></i>
      </a>
    </li>
  `;

  html += soloItems ? "" : "</ul>";
  return html;
}


/*
  Configura eventos de clic para controles de paginación.
 */
function configurarEventosPaginacion(selector, paginador, callback) {
  $(document).on("click", `${selector} .page-link`, function (e) {
    e.preventDefault();
    const pagina = parseInt($(this).data("pagina"));

    if (!isNaN(pagina) && irAPagina(paginador, pagina)) {
      if (typeof callback === "function") {
        callback(paginador);
      }
    }
  });
}
