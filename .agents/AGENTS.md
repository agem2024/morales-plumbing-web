# Project-Scoped Rules for Morales Plumbing Web

## CODE FREEZE DIRECTIVES
**CRITICAL**: The USER has explicitly requested a "Code Freeze / Update Lock" on specific components to prevent accidental breakage during routine updates. 

You MUST NOT modify, overwrite, or delete the following components unless explicitly and specifically requested by the user:
1. **The Footer Contact Area (`#contact-us` and `<footer class="footer-area">`)**: This area has a carefully curated, non-invasive design. Do not touch its structure.
2. **The Security/CCPA System (`#ccpa-cookie-banner` and related logic in `app.js`)**: Do not modify the privacy banners or their related `localStorage` logic.
3. **Company Data & Social Links**: The company data (Phone, Email, License, Location) and Social/App links must NEVER be altered, removed, or changed. They are fixed business requirements.

## EDITING GUIDELINES
When performing small tasks or reviews:
- **ALWAYS** use surgical, line-by-line edits (e.g. `replace_file_content` or `multi_replace_file_content` with exact chunks). 
- **NEVER** replace massive blocks of HTML or CSS without verifying that you are not destroying existing functionality. 
- If you touch `index.html` or `app.js`, verify that navigation (`navigate()`), multi-language (`setLanguage()`), and existing modals are not broken.
