# Alke Wallet - Billetera Digital

## Índice
- [ Acceso a la Demo ](#demo)
- [ Credenciales de Acceso ](#credenciales-de-acceso)
- [ Autor ](#autor)
- [ Descripción del Proyecto ](#descripción-del-proyecto)
- [ Tecnologías Utilizadas ](#tecnologías-utilizadas)
- [ Estructura del Proyecto ](#estructura-del-proyecto)
- [ Funcionalidades Principales ](#funcionalidades-principales)
- [ Ramas del Proyecto ](#ramas-del-proyecto)

---

## Demo
**Accede a la demo aquí:** https://lmakr8.github.io/alke-wallet/

---

## Credenciales de Acceso
Para acceder a la aplicación, utiliza las siguientes credenciales:

```
Email:    usuario@ejemplo.com
Password: 12345
```

---

## Autor
**Desarrollado por**: Leandro Marchant A.
**Tipo**: Proyecto Educativo  
**Módulo**: Desarrollo Front-end  
**Programa**: Fullstack Python - Talento Digital  
**Año**: 2025

---

## Descripción del Proyecto
**Alke Wallet** es una aplicación web de billetera digital desarrollada como proyecto educativo del programa **Fullstack Python - Talento Digital 2025**. Esta solución simula una plataforma fintech completa que permite gestionar finanzas personales con una interfaz moderna, minimalista, responsive y funcional en el lado del cliente.

### El Desafío
Construir una e-wallet utilizando HTML5, CSS3, Bootstrap, JavaScript y jQuery. El proyecto requería implementar un sistema de autenticación simulado, gestión de saldo con depósitos y transferencias, CRUD de contactos, historial de transacciones con filtros y paginación, todo almacenado en LocalStorage sin backend real. El énfasis se puso en clean code,responsividad y uso efectivo de control de versiones Git.

---

## Tecnologías Utilizadas

| Tecnología           | Versión | Propósito                                              |
| -------------------- | ------- | ------------------------------------------------------ |
| **HTML5**            | -       | Estructura semántica de las páginas                    |
| **CSS3**             | -       | Estilos personalizados con variables CSS y animaciones |
| **Bootstrap**        | 5.3.2   | Framework CSS para diseño responsive                   |
| **Bootstrap Icons**  | 1.11.1  | Iconografía vectorial                                  |
| **JavaScript**       | ES6+    | Lógica de negocio y manipulación del DOM               |
| **jQuery**           | 3.7.1   | Simplificación de operaciones DOM y eventos            |
| **LocalStorage API** | -       | Persistencia de datos del lado del cliente             |

---

## Estructura del Proyecto
El proyecto está organizado de la siguiente manera:

```
alke-wallet/
│
├── index.html                  # Página de bienvenida (Landing page)
├── README.md                   # Documentación del proyecto
│
├── pages/                      # Páginas de la aplicación
│   ├── login.html              # Pantalla de autenticación
│   ├── menu.html               # Dashboard principal
│   ├── deposit.html            # Módulo de depósitos
│   ├── sendMoney.html          # Módulo de transferencias y gestión de contactos
│   └── transactions.html       # Historial de movimientos
│
└── src/                        # Recursos del proyecto
    ├── css/
    │   └── style.css           # Estilos personalizados (variables CSS, animaciones)
    │
    └── js/                     # Scripts de JavaScript
        ├── index.js            # Lógica de la landing page
        ├── login.js            # Lógica de autenticación
        ├── menu.js             # Dashboard y navegación
        ├── deposit.js          # Gestión de depósitos
        ├── sendMoney.js        # Transferencias y CRUD de contactos
        ├── transactions.js     # Historial, filtros y paginación
        └── components/         # Módulos reutilizables
            ├── utils.js        # Funciones globales (formateo, alertas, storage)
            ├── filters.js      # Sistema de filtrado
            └── pagination.js   # Sistema de paginación
```

---

## Funcionalidades Principales

### Autenticación
- Sistema de login con validación de credenciales
- Mensajes de error personalizados
- Redirección automática al dashboard

### Gestión de Saldo
- Visualización del saldo actual en tiempo real
- Depósitos con actualización instantánea
- Validación de montos y formularios

### Transferencias
- Envío de dinero a contactos guardados
- Validación de saldo disponible antes de transferir
- Confirmación visual de operaciones exitosas

### Gestión de Contactos
- CRUD completo: Crear, leer, actualizar y eliminar contactos
- Búsqueda en tiempo real por nombre o alias
- Validación de datos bancarios (CBU de 22 dígitos)
- Almacenamiento persistente en LocalStorage

### Historial de Transacciones
- Visualización completa de movimientos (depósitos, envíos, recibidos)
- Filtros por tipo de transacción y período de tiempo
- Sistema de paginación con 5 elementos por página
- Estadísticas de ingresos y egresos totales
- Ordenamiento por fecha (más recientes primero)

---

## Ramas del Proyecto
El proyecto utiliza las siguientes ramas:

| Rama                   | Descripción                                  | Estado   |
| ---------------------- | -------------------------------------------- | -------- |
| `main`                 | Rama principal de producción                 | Activa   |
| `feature/login`        | Sistema de autenticación y validación        | Mergeada |
| `feature/deposits`     | Módulo de depósitos y actualización de saldo | Mergeada |
| `feature/transactions` | Historial, filtros y paginación              | Mergeada |

### Convenciones de Commits
El proyecto sigue las convenciones de commits semánticos:

- `feat:` Nueva funcionalidad
- `fix:` Corrección de bugs
- `style:` Cambios de estilos (CSS)
- `refactor:` Refactorización de código
- `docs:` Actualización de documentación

---