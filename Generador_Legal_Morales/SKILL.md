---
name: Generador_Legal_Morales
description: Genera contratos y cotizaciones legales para Morales Plumbing en formato HTML (Ingles/Español).
---

# Generador Legal de Morales Plumbing

Usa este Skill cuando el usuario te pida crear un contrato, cotización o documento legal para un cliente de Morales Plumbing.

## Reglas de la Compañía (NUNCA MODIFICAR)
Al usar este Skill, siempre debes incluir los siguientes datos oficiales en la generación del documento:
- **Nombre:** MORALES PLUMBING
- **Licencia:** Lic. C-36 #1156542 | San Jose, CA
- **Teléfono:** (669) 213-4422
- **Email:** moralesplumbing026@gmail.com
- **Web:** www.moralesplumbing.com

## Instrucciones
1. Pídele al usuario los datos del cliente si no los tienes:
   - Nombre del Cliente
   - Descripción del Servicio (ej. Instalación de calentador)
   - Costo Total ($)
   - Idioma deseado (Inglés por defecto, Español opcional si se solicita)
2. Ejecuta el script generador.py que se encuentra en esta misma carpeta, pasándole los argumentos necesarios.
3. El script generará un archivo HTML listo para imprimir como PDF.
4. Entrégale al usuario la ruta del archivo generado.
