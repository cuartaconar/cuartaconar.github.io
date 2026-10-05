# Seguridad del proyecto

## Protección de edición
- La contraseña de administración se valida mediante SHA-256 en el navegador y no se guarda como texto plano.
- La sesión de edición se mantiene únicamente durante la pestaña mediante `sessionStorage`.
- Agregar, cambiar, quitar y borrar todas las fotos requieren autorización.
- Las fotos se almacenan en IndexedDB como archivos Blob, en lugar de convertirlas en enormes cadenas Base64 dentro de `localStorage`.
- Las imágenes nuevas se redimensionan y comprimen antes de guardarse.

## Rendimiento
- Los efectos de partículas del mouse solo funcionan en dispositivos con puntero preciso.
- En pantallas táctiles se desactivan las partículas y la luz seguidora.
- Se redujo la cantidad de estrellas, luciérnagas y confeti.
- Las imágenes usan carga diferida cuando corresponde.

## Límite importante de seguridad
Este proyecto sigue siendo una aplicación web estática. Todo JavaScript, HTML y CSS enviado al navegador puede ser inspeccionado por el visitante usando las herramientas del navegador. Una contraseña implementada únicamente en frontend **no puede garantizar que nadie vea el código ni impedir que un usuario técnicamente avanzado modifique el sitio**.

Para seguridad real (autenticación, autorización y fotos compartidas entre dispositivos), la edición debe pasar a un servidor/backend con:
1. autenticación del administrador;
2. contraseña almacenada como hash en el servidor;
3. reglas de autorización para subir/eliminar;
4. almacenamiento privado de imágenes;
5. URLs protegidas o con permisos;
6. HTTPS.

La versión incluida mejora considerablemente la protección de las acciones dentro del sitio y evita exponer la contraseña en texto plano, pero no sustituye un backend seguro.
