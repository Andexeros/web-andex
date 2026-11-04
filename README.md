# Andex — web institucional

Sitio Next.js con portada, AndexMarket y tótems a medida.

## Desarrollo
Requiere Node.js 22 y npm.
- npm ci
- npm run dev
- npm run build
- npm start

## Rutas
- /: presentación de Andex
- /andexmarket: sistema de ventas
- /totems: catálogo interactivo
- /paltasys: redirección permanente a /andexmarket

La demo de ventas es ilustrativa: no realiza cobros ni modifica datos.
Los contactos conservan el WhatsApp y correo de la web original.
El video procede del material de AndexMarket suministrado en otro chat.
Las imágenes de los tótems proceden del repositorio original y se muestran como referencias.
Las animaciones respetan prefers-reduced-motion.

## Vercel
Proyecto existente: web-nueva-andex, equipo andres-pravatas-projects.
Repositorio nuevo: https://github.com/Andexeros/web-andex
Framework: Next.js. Directorio raíz: ./
Build: npm run build. Salida: configuración predeterminada de Next.js.
No hacen falta variables de entorno para esta web.

En Settings > Git del proyecto existente, conectar el repositorio nuevo.
Conservar los dominios andex.tech y www.andex.tech en ese mismo proyecto.
No es necesario modificar DNS para cambiar el repositorio del proyecto existente.
La rama de producción es main. Verificar el despliegue antes de dar por terminada la migración.

## Validación
Compilación de producción y tipos; revisión de escritorio y móvil.
Pruebas manuales de peso/total, cobro ilustrativo, selector de tótems,
menú móvil, video y navegación.
