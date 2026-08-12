# Reglas de Desarrollo Web - Morales Plumbing

Esta es una guia de uso obligatorio para cualquier agente o modelo de Inteligencia Artificial que trabaje en este codigo fuente. Sigue estas reglas estrictamente para evitar reintroducir errores criticos del pasado.

## 1. Codificacion de Archivos (Prevenir "Mojibake")
- **Regla Estricta:** TODOS los archivos (HTML, CSS, JS, MD) DEBEN ser leidos y guardados con codificacion **UTF-8**.
- **Contexto:** En el pasado, herramientas mal configuradas guardaron archivos con codificacion de Windows que rompieron los acentos, generando errores irreversibles en traducciones (Chino, Tagalo, Vietnamita).

## 2. Diagramas de Codigo (Mermaid JS)
- **Regla Estricta:** Si creas un diagrama de Mermaid, CUALQUIER texto o etiqueta de nodo que contenga caracteres especiales del espanol DEBE ir entre comillas dobles (ej. id1["Texto con acentos o simbolos"]).
- **Contexto:** Los caracteres especiales sin comillas rompen el motor de Mermaid.

## 3. Estructura de Cabeceras HTML (Headers)
- **Regla Estricta:** Nunca insertes la cabecera antigua de "ORION TECH". Utiliza UNICAMENTE la cabecera oficial de Morales Plumbing.
- **Contexto:** En el pasado, paginas terminaron con barras de navegacion duplicadas.

## 4. Motor de Traduccion (app.js)
- **Regla Estricta:** Asegurate de que TODAS las nuevas paginas importen el script principal (`<script src="../app.js"></script>`). 
- **Contexto:** El motor de traduccion depende de la funcion setLanguage() que se autodispara dentro del DOMContentLoaded.

## 5. Datos Oficiales de la Empresa
- Respeta SIEMPRE los datos oficiales cuando llenes informacion en la pagina:
  - **Nombre:** Morales Plumbing
  - **Licencia:** C-36 #1156542
  - **Telefono:** (669) 213-4422
  - **Email:** moralesplumbing026@gmail.com

## 6. MANEJO DE ENCODING Y SCRIPTS MASIVOS (CRITICO)
- **NUNCA uses expresiones regulares masivas ni scripts globales para reemplazar caracteres corruptos** a menos que extraigas unicamente el bloque seguro desde la memoria. 
- Usar scripts en archivos que ya estaban corruptos destruira las traducciones asiaticas y generara **errores de sintaxis fatales** (como renombrar variables JS `isActive` a `isctive`, o `msg` a `m\u00e1sg`), lo que rompera el enrutamiento de la pagina entera.
- Si ves corrupciones, **siempre recupera el archivo de un commit funcional de git** (`git checkout <commit> -- archivo`) en lugar de intentar arreglarlo con un script global ciego.
## Soluciones Recientes
- Reparación global de enlaces internos en app.js para toda la web.
- Corrección de acentos y caracteres especiales en pricebook.html.
- Corrección del menú móvil en Android: Se actualizó `style.css` (pointer-events) para evitar bloqueos en los formularios, y se excluyó a `.dropdown-toggle` en `index.html` para evitar el cierre prematuro del menú desplegable.
- Corrección de ruta de video (assets) y agregado de enlace de retorno al inicio en el logo de `corporate_team/Morales_Corporate_Team.html`.

- Reparación quirúrgica de caracteres corruptos (mojibake) y error de sintaxis en diagrama de Mermaid en `docs/ley_water_heaters.html`.
- Solución a la desaparición de datos y tarjetas en `pricebook.html`:
  - Se repararon errores de sintaxis en JavaScript causados por reemplazos masivos previos defectuosos (ej. de `setLanGuage` a `setLanguage`).
  - Se actualizó el enlace del script de traducciones de `app.js` (archivo eliminado) al correcto `app_v9.js`, permitiendo volver a renderizar toda la data y precios.

- Reparación del sistema de envío de formularios por AJAX (Contacto, Citas, PQR):
  - Se añadió el parámetro `_captcha: "false"` en `app_v9.js` para evitar que `formsubmit.co` bloquee silenciosamente las peticiones AJAX exigiendo una página de verificación humana que el usuario nunca podía ver.
- Mejora en la experiencia de usuario (UX) para el agendado de citas:
  - Se eliminó la instrucción que abría forzosamente la aplicación de WhatsApp al solicitar una cita.
  - En su lugar, el bot de IA ahora genera dinámicamente tres botones (WhatsApp, SMS, Correo Electrónico) para que el cliente elija el método de comunicación de su preferencia.

- Actualización de Interfaz y Asistente Virtual (Sofia Lin):
  - Se reemplazó el avatar estático de "Joe" por el video animado `susa.mp4` para representar a la nueva asistente "Sofia Lin" en los botones flotantes de la web.
  - Se eliminó un icono flotante duplicado que mostraba un globo de notificación rojo, dejando un solo botón limpio con el video en la esquina inferior derecha.
  - Se rediseñó el pie de página (footer) eliminando la redundancia de bloques de información, organizándolo en una nueva disposición limpia con el video de "urgencia" a la izquierda y los datos de contacto y redes sociales unificados a la derecha.
  - Sincronización y protección de entorno local para evitar pérdida de archivos locales no rastreados durante conflictos en el control de versiones (Git).
## Arquitectura Web (REGLA ESTRICTA)
- **HOSTING:** El sitio está alojado 100% en GitHub Pages. 
- **PROHIBIDO:** Usar Netlify o cualquier función backend (Server-Side Javascript, Node.js).
- **FORMULARIOS:** Cualquier formulario (contacto, agendado) DEBE procesarse en el Frontend de manera invisible (AJAX) usando servicios como FormSubmit.
