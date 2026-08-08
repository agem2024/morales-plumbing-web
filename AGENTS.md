# Reglas de Desarrollo Web - Morales Plumbing

Esta es una guía de uso obligatorio para cualquier agente o modelo de Inteligencia Artificial que trabaje en este código fuente. Sigue estas reglas estrictamente para evitar reintroducir errores críticos del pasado.

## 1. Codificación de Archivos (Prevenir "Mojibake")
- **Regla Estricta:** TODOS los archivos (HTML, CSS, JS, MD) DEBEN ser leídos y guardados con codificación **UTF-8**.
- **Contexto:** En el pasado, herramientas mal configuradas guardaron archivos con codificación de Windows que rompieron los acentos, generando errores como BÃ¡Ã¡QMD, Ã¡rea, o instalaciÃ³n. Nunca utilices codificaciones destructivas.

## 2. Diagramas de Código (Mermaid JS)
- **Regla Estricta:** Si creas un diagrama de Mermaid, CUALQUIER texto o etiqueta de nodo que contenga caracteres especiales del español (á, é, í, ó, ú, ñ, ¿, ¡) **DEBE ir entre comillas dobles** (ej. id1["Texto con acentos o símbolos"]).
- **Contexto:** Los caracteres especiales sin comillas rompen el motor de Mermaid, arrojando un error de sintaxis y bloqueando la visualización del diagrama en la página.

## 3. Estructura de Cabeceras HTML (Headers)
- **Regla Estricta:** Nunca insertes la cabecera antigua de "ORION TECH". Utiliza ÚNICAMENTE la cabecera oficial de Morales Plumbing.
- **Contexto:** En el pasado, docenas de subpáginas terminaron con barras de navegación duplicadas en la parte superior porque los agentes copiaban plantillas antiguas que contenían el bloque <header><div class="logo">ORION TECH.... Esto rompe el diseño corporativo.

## 4. Motor de Traducción (app.js)
- **Regla Estricta:** Asegúrate de que TODAS las nuevas páginas (incluyendo las de subcarpetas como docs/) importen el script principal (<script src="../app.js"></script>). 
- **Contexto:** El motor de traducción depende de la función setLanguage() que se autodispara dentro del bloque DOMContentLoaded de pp.js. Si no se enlaza correctamente este archivo, la página se quedará estancada en inglés por defecto, ignorando la preferencia de idioma (guardada en localStorage) del usuario.

## 5. Datos Oficiales de la Empresa
- Respeta SIEMPRE los datos oficiales cuando llenes información en la página:
  - **Nombre:** Morales Plumbing
  - **Licencia:** C-36 #1156542
  - **Teléfono:** (669) 213-4422
  - **Email:** moralesplumbing026@gmail.com
