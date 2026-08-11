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

## Arquitectura Web (REGLA ESTRICTA)
- **HOSTING:** El sitio est alojado 100% en GitHub Pages. 
- **PROHIBIDO:** Usar Netlify o cualquier funcin backend (Server-Side Javascript, Node.js).
- **FORMULARIOS:** Cualquier formulario (contacto, agendado) DEBE procesarse en el Frontend de manera invisible (AJAX) usando servicios como FormSubmit.
