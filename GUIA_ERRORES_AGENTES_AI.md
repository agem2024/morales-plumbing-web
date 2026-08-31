# 🚨 GUÍA CRÍTICA PARA AGENTES DE IA (AI AGENT PLAYBOOK) 🚨
> **LECTURA OBLIGATORIA ANTES DE MODIFICAR CUALQUIER ARCHIVO.**

Este documento fue creado después de una serie de errores críticos cometidos por Agentes de IA previos (incluyéndome). Si eres un Agente de IA trabajando en este proyecto, **DEBES LEER Y ACATAR ESTAS REGLAS AL PIE DE LA LETRA** para no destruir el sitio en producción.

---

## 🚫 ERROR CRÍTICO 1: CORRUPCIÓN DE CARACTERES (UTF-8)
**El Error:** Al leer archivos JSON o HTML, y procesarlos con scripts de Node/Python que no declaran explícitamente `utf8`, los caracteres latinos (á, é, í, ó, ú, ñ) se corrompían convirtiéndose en `A3`, `Acc`, `A-`, etc.
**La Solución Obligatoria:** 
* SIEMPRE usa `fs.readFileSync(path, 'utf8')` y `fs.writeFileSync(path, data, 'utf8')`.
* NUNCA hagas un reemplazo masivo de texto (`.replace()`) sin verificar que no estás re-corrompiendo el archivo.
* Si ves caracteres como `A3`, `A\xa9`, `A1`, límpialos inmediatamente de regreso a su versión latina.

---

## 🚫 ERROR CRÍTICO 2: PROMETER SERVICIOS ILEGALES (PE STAMPS)
**El Error:** En la sección de *ENGINEERING & DESIGN* o *B2B*, el Agente inventó que Morales Plumbing ofrecía **"Sello de Ingeniero Profesional (PE Stamped Blueprint)"**. Esto es **ilegal** en California si la empresa no tiene un Ingeniero Estructural/Civil en plantilla.
**La Solución Obligatoria:** 
* Morales Plumbing opera bajo una **Licencia CSLB C-36**.
* Todo el diseño hidráulico debe describirse como **"Design-Build C-36"** o **"Shop Drawings"**.
* NUNCA ofrezcas la firma de un PE (Professional Engineer). Nosotros diseñamos como Contratistas C-36.

---

## 🚫 ERROR CRÍTICO 3: DESTRUIR ARREGLOS EN EL JSON
**El Error:** El Agente convirtió el campo `specific_objectives` de un Arreglo (`Array`) a un `String` simple. Esto causó que el Frontend ejecutara `forEach is not a function` y **rompió toda la página blanca (Crash Fatal)**.
**La Solución Obligatoria:** 
* `specific_objectives` en el archivo `CATALOGO_OFICIAL...json` **SIEMPRE DEBE SER UN ARRAY DE STRINGS**.
```json
// CORRECTO:
"specific_objectives": [
  "Paso 1: Hacer A",
  "Paso 2: Hacer B"
]
```

---

## 🚫 ERROR CRÍTICO 4: SALTARSE ÍTEMS EN ACTUALIZACIONES MASIVAS
**El Error:** Al inyectar botones de YouTube (`video_url_es`), el Agente hizo un loop del `EXL-102` al `EXL-177`, e ignoró del `EXL-178` al `EXL-200` (Categoría CLEANING). Consecuencia: Desaparecieron las interfaces de esos 22 ítems.
**La Solución Obligatoria:** 
* Cuando hagas actualizaciones globales o reconstruyas el HTML interno (`subs_html`), asegúrate de cubrir TODO el catálogo pertinente, y haz validaciones cruzadías.

---

## 🚫 ERROR CRÍTICO 5: BUG DE CACHÉ DE AUDIO EN HTML5
**El Error:** Para cambiar el jingle corporativo de idioma, el Agente intentó cambiar la etiqueta `<source src="...">`. Los navegadores modernos ignoran esto si el audio ya fue cargado.
**La Solución Obligatoria:** 
* En HTML5, cambia el `.src` del objeto de audio directamente, NO del `<source>` interno.
```javascript
// INCORRECTO: jingleSource.src = 'nuevo.mp4'; jingleAudio.load();
// CORRECTO: jingleAudio.src = 'nuevo.mp4'; jingleAudio.load();
```

---

## 🚫 ERROR CRÍTICO 6: TRADUCCIONES 'HARDCODED' (QUEMADAS)
**El Error:** El Agente sobrescribió el HTML insertando texto en español directamente, olvidando añadir las claves al diccionario `translations.es`. Resultado: al cambiar de idioma en la web, esas partes no se traducían.
**La Solución Obligatoria:** 
* Si agregas texto a la UI principal (fuera del JSON de precios), usa `data-i18n="clave_unica"`.
* Luego ve al bloque de `if(translations.es)` en `index.html` e inyecta la llave ahí, repitiendo el proceso para `translations.en`.

---

## 🔧 FLUJO DE TRABAJO OBLIGATORIO POST-ACTUALIZACIÓN
Cada vez que modifiques el Catálogo (JSON) o la Web, DEBES:
1. Re-generar `data.js` a partir del JSON (el navegador lee `data.js`, no el JSON).
2. Ejecutar `node cache_buster.js` para forzar a los navegadores de los clientes a descargar la nueva versión.
3. Si cambiaste HTML/JS del repo, hacer `git add`, `git commit` y `git push` de manera inmediata para proteger los cambios.

**Firmado: El Agente de Antigravity AI (18 Agosto 2026). ¡No cometas mis errores!**
