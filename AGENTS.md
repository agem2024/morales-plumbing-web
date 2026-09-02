# Reglas de Desarrollo Web - Morales Plumbing

Esta es una guia de uso obligatorio para cualquier agente o modelo de Inteligencia Artificial que trabaje en este codigo fuente. Sigue estas reglas estrictamente para evitar reintroducir errores criticos del pasado.

## 1. Codificacion de Archivos (Prevenir "Mojibake")
- **Regla Estricta:** TODOS los archivos (HTML, CSS, JS, MD) DEBEN ser leidos y guíardados con codificacion **UTF-8**.
- **Contexto:** En el pasado, herramientas mal configuradías guíardaron archivos con codificacion de Windows que rompieron los acentos, generando errores irreversibles en traducciones (Chino, Tagalo, Vietnamita).

## 2. Diagramas de Codigo (Mermaid JS)
- **Regla Estricta:** Si creas un diagrama de Mermaid, CUALQUIER texto o etiqueta de nodo que contenga caracteres especiales del espanol DEBE ir entre comillas dobles (ej. id1["Texto con acentos o simbolos"]).
- **Contexto:** Los caracteres especiales sin comillas rompen el motor de Mermaid.

## 3. Estructura de Cabeceras HTML (Headers)
- **Regla Estricta:** Nunca insertes la cabecera antiguía de "ORION TECH". Utiliza UNICAMENTE la cabecera oficial de Morales Plumbing.
- **Contexto:** En el pasado, paginas terminaron con barras de navegacion duplicadías.

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
  - Se repararon errores de sintaxis en JavaScript causados por reemplazos masivos previos defectuosos (ej. de `setLanGuíage` a `setLanguage`).
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
- Refinamiento de la Sección Principal (Hero):
  - Actualización tipográfica usando la fuente "Aladin" y ajustes de tamaño (+20%) con diseño adaptativo (`clamp()`) para mejorar la legibilidad en pantallas móviles y de escritorio.
  - Implementación de imágenes de fondo (`plan_better.webp`, `service_tankless.webp` y el cuadro estático del video `Grok_Clip_013.webp`) con superposiciones translúcidías (gradientes oscuros) en los tres botones principales de acción ("Eco Water Heater Systems", "Explorar Ecosistema" y "Agenda Rápido").

- Corrección de bugs en Interfaz de Citas:
  - Se corrigió un error de sintaxis y caracteres corruptos (mojibake) en los textos enviados automáticamente al chatbot (`app_v9.js`) que provocaba que la frase `"我想preabout管道服务预约。"` y `"puedo agendar"` se guíardaran erróneamente en el perfil local del usuario (`localStorage`), sobrescribiendo su nombre y teléfono en el formulario de citas.
  - Se renombró el botón de "Agenda rápido con Joe" a únicamente "Agenda rápido", desvinculándolo del motor de traducciones para prevenir que el texto sea sobrescrito incorrectamente.
## Arquitectura Web (REGLA ESTRICTA)
- **HOSTING:** El sitio está alojado 100% en GitHub Pages. 
- **PROHIBIDO:** Usar Netlify o cualquier función backend (Server-Side Javascript, Node.js).
- **FORMULARIOS:** Cualquier formulario (contacto, agendado) DEBE procesarse en el Frontend de manera invisible (AJAX) usando servicios como FormSubmit.


## UPDATE AUGUST 2026 - ENCODING AND EMAIL SYSTEM FIXES

**CRITICAL FIX REGARDING ENCODING:**
DO NOT use PowerShell Get-Content/Set-Content or '> / >>' redirections to modify index.html or any UI file. These tools in Windows default to ANSI or Windows-1252 and will DESTROY the Spanish accents (mojibake). To edit text, either use proper IDE tools, or write a NodeJS script using pure fs.readFileSync(..., 'utf8') with unicode escapes (e.g. \u00f3 for ó) to apply patches.
All missing accents in the Quick Services tabs (Plomería General, Baños y Remodelación, etc.) have been completely FIXED via a pure JS patch. The user is extremely frustrated by AI claiming to fix it and failing due to encoding corruption. ALWAYS verify via a Node script output, not PowerShell output.

**EMAIL NOTIFICATION SYSTEM:**
Integrated FormSubmit to app_v9.js. The system now sends an automated email when a booking is created, and generates a 4-digit verification code (e.g., MP-1234) shown to the user on the UI and sent to the administration email.

---

## UPDATE SEPTEMBER 2026 - PROTOCOLOS DE ENTRENAMIENTO Y REGLAS DE ORO

### 7. PROHIBICIÓN ABSOLUTA DE SCRIPTS MASIVOS (REGLA DE ORO)
- **Queda estrictamente prohibido ejecutar scripts de Python, Bash o Regex masivos** sobre archivos HTML o sobre el motor `app_v9.js`.
- **Procedimiento Obligatorio:** Toda edición debe realizarse **directamente bloque por bloque** inspeccionando el archivo original.
- Los scripts masivos introducen mojibake, reemplazos ciegos fuera de contexto, sobreescrituras destructivas y corrupción de cadenas multilenguaje en Chino, Tagalo, Vietnamita e Hindi.

### 8. PROHIBICIÓN TOTAL DE EMOJIS (ZERO EMOJIS POLICY)
- **Cero emojis en todo el código fuente, respuestas de Karla/Sofia y archivos HTML.**
- En interfaces y tarjetas de servicio, NUNCA usar iconos tipo emoji ni fuentes de terceros (como FontAwesome) que rendericen fallbacks Unicode o glifos no soportados.
- **Solución Obligatoria:** Utilizar exclusivamente vectores inline SVG nativos (`<svg viewBox="0 0 24 24" ...>`) o entidades HTML estándar (`&larr;`, `&rarr;`).

### 9. LENGUAJE DE LA INDUSTRIA C-36 (CERO LENGUAJE PROHIBIDO)
- Está terminantemente prohibido usar términos como *"Detalle Técnico (Ingeniería)"* o inventar alcances de ingeniería civil/estructural.
- Emplear siempre la terminología oficial de la industria de plomería CSLB C-36:
  - *"Especificaciones de Instalación y Plomería"* (EN: *"Plumbing & Installation Specs"*).
  - *"Enfoque Comercial (Cliente)"* (EN: *"Commercial Focus (Client)"*).
  - *"Redes y Tuberías"* (EN: *"Piping & Networks"*).
- Cada tarjeta técnica y subpágina de servicio debe describir con total precisión técnica los materiales (PEX-A Uponor por expansión, Cobre Tipo L, prensado mecánico Viega ProPress, NSF/ANSI 61/372, California Title 24, UPC, pruebas hidrostáticas a 100 PSI).

### 10. REGLAS DE MAQUETACIÓN: EVITAR TRASLAPE DE BOTONES Y TÍTULOS
- En las cabeceras de las subpáginas (`docs/proceso_svc_X_cliente.html` y `docs/service.html`), **NUNCA usar `position: absolute` para el botón de regreso (`.back-btn`)** dentro de un contenedor relativo donde compita con el título `<h1>`.
- Esto provoca que en pantallas medianas o títulos extensos el título quede sobrepuesto y tape el botón.
- **Estructura Estándar Obligatoria:**
  ```html
  <div class="header">
      <div class="header-top-bar">
          <a href="pricebook.html" class="back-btn" data-i18n="nav_back_pb">&larr; Volver al Cat&aacute;logo</a>
      </div>
      <h1 data-i18n="pb_svc_X_name">Título del Servicio</h1>
      <p data-i18n="pb_svc_X_user">Descripción del servicio.</p>
  </div>
  ```
  Con flexbox vertical (`flex-direction: column; align-items: center;`) para garantizar espacio limpio, responsive e indestructible.

### 11. GESTIÓN DE CACHÉ DEL NAVEGADOR
- Si los cambios aplicados en `app_v9.js` no se reflejan visualmente en el navegador del usuario, **no se debe asumir error de código ni modificar masivamente los archivos**.
- El navegador mantiene `app_v9.js` en caché local. Instruir al usuario a recargar con `Ctrl + F5` / `Ctrl + Shift + R` o probar en ventana de incógnito (`Ctrl + Shift + N`).

### 12. PROTOCOLO Y ESTÁNDARES DE CITAS Y BOOKING (REGLA ESTRICTA)
- **Nomenclatura Oficial:** El botón principal de agendamiento en el Hero (`index.html`) DEBE llamarse estrictamente **"Booking"** (clave `btn_quick_schedule`). Queda prohibido usar "Agenda Rápido" o nombres obsoletos.
- **Visibilidad Inmediata del Formulario:** Al hacer clic en "Booking" o en "Agendar Cita / Book Appointment" (`openBooking()` / `openBookingWithService()`):
  - El formulario `#booking-panel` o el modal de citas `#mp-portal-modal` (pestaña schedule) DEBEN desplegarse en pantalla con `z-index: 9999999` y `display: flex !important;`, sin quedarse en estado oculto ni requerir pasos conversacionales previos innecesarios.
- **Acceso Omnicanal en Catálogo y Servicios:**
  - En `pricebook.html`, cada una de las tarjetas generadas dinámicamente DEBE incluir el botón directo `Agendar Cita / Book Appointment` apuntando a `openBookingWithService('svc_${s.id}')`.
  - En `service.html` y en cada una de las 15 subpáginas paso a paso (`proceso_svc_1_cliente.html` a `proceso_svc_15_cliente.html`), DEBE existir el botón destacado en dorado (`#D4AF37`) para agendar dicho servicio directamente.
  - Al recibir una redirección desde una subpágina con `action=schedule&service=svc_X`, la página principal debe desplegar automáticamente el modal con el servicio preseleccionado.

