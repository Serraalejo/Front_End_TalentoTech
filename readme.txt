Funcionalidades Implementadas

1. Diseño Responsive
Adaptación a diferentes tamaños de pantalla mediante Media Queries

2. Header con Navegación Centrada
Logo alineado a la izquierda
Menú de navegación centrado horizontalmente
Efectos hover en los botones del menú

3. Sección de Reseñas con CSS Grid

4 tarjetas de reseñas de clientes

Sistema de calificación por estrellas
Avatares de clientes
Efectos hover con animación
Diseño responsivo que cambia a 1 columna en móviles

4. Sección de Contacto

Información de contacto con:

Dirección, teléfono, email y WhatsApp
Iconos interactivos de FontAwesome
Redes sociales (Facebook, Instagram, Twitter, Discord)

Formulario con:

Campos: Nombre, Email, Teléfono (opcional), Mensaje
Integración con Formspree para envío de emails

5. Tipografía con Google Fonts

Orbitron: Fuente estilo gaming para títulos
Poppins: Fuente moderna para textos y formularios

6. Reproductor de Video
Video centrado en la página principal
Controles nativos del navegador


7. Navegación Interna

Lista desordenada
Enlaces que navegan entre secciones:

Inicio → Sección del video
Nosotros → (a completar)
Productos → (a completar)
Servicios → (a completar)
Contacto → Sección de contacto

8. Efectos Visuales

Gradientes en header y footer
Efecto glassmorphism (cristal) en contenedores
Sombras suaves en tarjetas
Transiciones suaves en hover
Borde decorativo inferior en header

9. Formulario 
Integración con Formspree.io
Endpoint: https://formspree.io/f/mykoywbb

10. Consumo de API con Fetch
Implementación de fetch() para obtener productos desde un archivo JSON (productos.json).
Conversión de la respuesta utilizando .json().
Generación dinámica de tarjetas mediante JavaScript.
Manejo de errores utilizando .catch().

11. Catálogo de Productos
Visualización dinámica de 20 productos gamer.
Cada producto incluye:
Imagen
Nombre
Precio
Botón "Añadir al carrito"
Tarjetas generadas automáticamente desde la API.

12. Carrito de Compras Dinámico
Agregado de productos desde las tarjetas.
Persistencia utilizando localStorage.
Contador dinámico en el encabezado.
Mensaje de confirmación al agregar productos.
Conserva el carrito incluso al recargar la página.

13. Panel Lateral del Carrito
Apertura mediante el botón "Carrito".
Visualización de todos los productos agregados.
Muestra:
Nombre
Precio
Cantidad
Subtotal por producto
Cálculo automático del total.

14. Gestión del Carrito

Permite:

Incrementar cantidades automáticamente cuando se agrega nuevamente un producto.
Eliminar productos del carrito.
Vaciar completamente el carrito.
Finalizar la compra simulando el proceso.
Actualización automática del total y del contador.

15. Persistencia de Datos

Se utiliza localStorage para almacenar:

Productos agregados.
Cantidades.
Estado completo del carrito.

De esta manera la información permanece incluso después de cerrar o actualizar el navegador.

16. Manipulación del DOM

Se utilizan distintas técnicas de manipulación del DOM:

createElement()
appendChild()
innerHTML
querySelector()
getElementById()
addEventListener()

para crear y actualizar dinámicamente todos los elementos del sitio.

17. Validaciones

El proyecto incluye:

Validación de campos requeridos.
Validación del correo electrónico.
Mensajes al usuario mediante JavaScript.
Confirmaciones al agregar productos y finalizar la compra.
18. SEO y Accesibilidad

Implementación de buenas prácticas:

Meta etiquetas (description, keywords, author).
Atributos alt en todas las imágenes.
Navegación mediante teclado.
Estructura HTML semántica.

19. Tecnologías utilizadas
HTML5
CSS3
JavaScript ES6
Fetch API
LocalStorage
JSON
Formspree
Google Fonts
Font Awesome