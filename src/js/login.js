/* ==========================================================================================
  Inicio de sesión:
  - Lógica para autenticación de usuarios.
  - Importa funciones de utils.js (mostrarAlerta)
========================================================================================== */

/* 
  Credenciales válidas para simulación de inicio de sesión 
*/
const CREDENCIALES_VALIDAS = {
  email: "usuario@ejemplo.com",
  password: "12345",
};


/* 
  Maneja el envío del formulario de inicio de sesión.
*/
$(document).ready(function () {
  $("#loginForm").submit(function (event) {
    event.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();

    // Validación de credenciales
    if (
      email === CREDENCIALES_VALIDAS.email &&
      password === CREDENCIALES_VALIDAS.password
    ) {
      mostrarAlerta(
        "¡Inicio de sesión exitoso! Bienvenido a tu billetera digital.",
        "success"
      );

      // Redirige al menu después de 2 segundos
      setTimeout(function () {
        window.location.href = "menu.html";
      }, 2000);
    } else {
      mostrarAlerta(
        "Error: Email o contraseña incorrectos. Por favor, intenta nuevamente.",
        "danger"
      );

      // Limpia la contraseña y enfoca en el email
      $("#password").val("");
      $("#email").focus();
    }
  });
});
