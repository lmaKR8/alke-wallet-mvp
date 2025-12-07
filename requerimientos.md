# Prompt de Desarrollo: Proyecto "Alke Wallet"

## 1. Contexto y Rol
Actúa como un **Desarrollador Front-end Senior**. Tu objetivo es construir el proyecto **"Alke Wallet"**, una billetera digital (e-wallet) para una empresa fintech. La solución debe ser segura, funcional, responsive y fácil de usar.

**Nota Importante:** Este es un proyecto puramente **Front-end**. No hay base de datos real. Toda la lógica de transacciones, saldos y usuarios debe ser **simulada** utilizando JavaScript/jQuery y almacenamiento local (si es necesario) o variables en memoria.

---

## 2. Stack Tecnológico Requerido
Debes utilizar estrictamente las siguientes tecnologías:
*   **HTML5:** Estructura semántica.
*   **CSS3:** Estilos personalizados y diseño responsive.
*   **Bootstrap (versión reciente):** Para componentes UI (Navbars, Modals, Cards) y sistema de grillas.
*   **JavaScript (ES6+):** Lógica de negocio y simulaciones.
*   **jQuery:** Manipulación del DOM, eventos y animaciones.
*   **Git/GitHub:** (Para estructura de control de versiones).

---

## 3. Arquitectura del Proyecto
La estructura de archivos y navegación debe ser la siguiente:

### Archivos Principales (.html)
1.  **`index.html`**: Página de entrada (puede redirigir al login).
2.  **`login.html`**: Pantalla de inicio de sesión.
3.  **`menu.html`**: Pantalla principal (Dashboard/Resumen de cuenta).
4.  **`deposit.html`**: Pantalla para realizar depósitos.
5.  **`sendmoney.html`**: Pantalla para enviar dinero y gestionar contactos.
6.  **`transactions.html`**: Pantalla de historial de últimos movimientos.

---

## 4. Requerimientos Funcionales Detallados

### A. Autenticación (`login.html`)
*   **UI:** Formulario centrado con campos de usuario y contraseña.
*   **Lógica (JS):** Validar credenciales (puedes hardcodear un usuario/pass de prueba).
*   **Validación:** Mostrar mensajes de error si los campos están vacíos o son incorrectos.
*   **Redirección:** Al loguearse exitosamente, redirigir a `menu.html`.

### B. Dashboard Principal (`menu.html`)
*   **UI:**
    *   Barra de navegación responsive (Bootstrap).
    *   Mensaje de bienvenida.
    *   Visualización clara del **Saldo Disponible**.
    *   Botones o tarjetas para acceso rápido a: Depositar, Enviar Dinero, Movimientos.
*   **Interacción:** Animaciones suaves al cargar la página (usar jQuery).

### C. Depósitos (`deposit.html`)
*   **Funcionalidad:** Permitir al usuario "ingresar" dinero a su cuenta.
*   **Lógica (JS/jQuery):**
    *   Input para el monto.
    *   Botón "Realizar depósito".
    *   Al hacer clic, actualizar el saldo total (simulado) y mostrar un mensaje de éxito dinámico.

### D. Enviar Dinero (`sendmoney.html`)
*   **Funcionalidad:** Simular transferencia a otros usuarios.
*   **UI:**
    *   Selector o lista de contactos.
    *   Campo de búsqueda "Buscar Contacto" con autocompletado (simulado con jQuery).
    *   Input de monto a transferir.
*   **Lógica (JS):**
    *   Validar que el usuario tenga saldo suficiente.
    *   Restar el monto del saldo principal.
    *   Botón "Agregar nuevo contacto".

### E. Historial (`transactions.html`)
*   **Funcionalidad:** Tabla o lista de transacciones recientes.
*   **Visualización:** Mostrar fecha, tipo de transacción (Depósito/Envío) y monto.
*   **Datos:** Utilizar un array de objetos en JS para poblar esta tabla dinámicamente.

---

## 5. Requerimientos Técnicos y de Calidad

### HTML (Semántica)
*   Uso correcto de etiquetas (`<nav>`, `<header>`, `<main>`, `<section>`, `<footer>`).
*   Formularios con atributos de validación básicos.

### CSS & Diseño
*   **Paleta de Colores:** Estilo "Fintech" (azules, blancos, grises, verdes para dinero).
*   **Responsividad:** La app debe verse bien en Móvil y Escritorio.
*   **Bootstrap:** Usar clases de Bootstrap para botones, formularios y alertas.

### JavaScript & jQuery
*   **Validaciones:** Ningún formulario debe enviarse vacío.
*   **DOM:** Actualización del saldo en tiempo real en la interfaz tras una acción.
*   **Funciones:** Código modular (ej: `function actualizarSaldo()`, `function validarLogin()`).

---

## 6. Flujo de Trabajo Git (Instrucciones para simulación)
Aunque el código será generado, asume que el proyecto se desarrolla bajo este flujo de ramas:
1.  `main`: Código estable.
2.  `feature/login`: Desarrollo de autenticación.
3.  `feature/transacciones`: Lógica de envío y recepción.
4.  `feature/depositos`: Lógica de depósitos y saldo.

---

## 7. Entregables Esperados
Genera el código necesario para:
1.  El **HTML** de todas las páginas mencionadas.
2.  Un archivo **CSS** (`styles.css`) que complemente a Bootstrap.
3.  Un archivo **JS** (`script.js`) que maneje:
    *   Login simulado.
    *   Objeto de datos del usuario (nombre, saldo, transacciones).
    *   Lógica de depósito y transferencia.
    *   Manipulación del DOM con jQuery.

**Nota para la IA:** Prioriza la legibilidad del código ("Clean Code") y la experiencia de usuario (UX).