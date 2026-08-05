# ⚠️ ADVERTENCIA DE SEGURIDAD Y REGLAS ESTRICTAS PARA AGENTES Y MODELOS DE IA

> [!CAUTION]
> **REGLAS MANDATORIAS PARA CUALQUIER AGENTE, SUBAGENTE O MODELO DE LLM QUE ACCEDA A ESTA CARPETA**

---

### 1. PROTECCIÓN DE CLAVES Y CREDENCIALES
* **PROHIBIDO EXPONER O IMPRIMIR CLAVES:** Ningún agente o modelo de IA debe mostrar, imprimir en respuestas públicas, ni transmitir llaves API, claves de OpenAI, Gemini o credenciales Base64.
* **PROHIBIDO MODIFICAR CLAVES SIN PERMISO:** Ningún agente debe borrar, sobrescribir o alterar las llaves API locales contenidas en `config.js` o scripts del proyecto a menos que el USUARIO lo solicite explícitamente.

---

### 2. INTEGRIDAD DE SINTAXIS Y ARCHIVOS SENSIBLES
* **RESPETAR SINTAXIS EN `config.js`:** La constante `GEMINI_KEYS` DEBE mantener siempre su formato con corchete de cierre y punto y coma `];`.
* **PROHIBIDO EJECUTAR SCRIPTS DE SOBREESCRITURA AUTOMÁTICA:** Queda prohibida la ejecución de scripts que alteren la sintaxis de `config.js` o `app.js` sin previa validación sintáctica (`node -c`).

---

### 3. PROTOCOLO DE AUTORIZACIÓN
* Antes de modificar cualquier archivo de configuración (`config.js`, `.env`, `firebase-config.js`), el agente debe consultar al usuario si el cambio involucra modificar credenciales o llaves de API.
