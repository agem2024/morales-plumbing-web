<#
.SYNOPSIS
    Morales Plumbing ORION Portal — Firebase Full Setup & Deploy Script
.DESCRIPTION
    Este script:
    1. Autentica con Firebase
    2. Crea el proyecto Firebase si no existe
    3. Activa Firestore y Anonymous Authentication
    4. Despliega las reglas de seguridad
    5. Obtiene la configuracion del web app y la inyecta en index.html
.NOTES
    Ejecutar como: .\firebase-setup.ps1
    Requiere: Node.js >= 16, npm, conexion a internet
#>

$ErrorActionPreference = "Stop"
$ProjectId   = "morales-plumbing-orion"
$ProjectName = "Morales Plumbing ORION"
$Region      = "us-west2"
$WorkDir     = $PSScriptRoot

Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host "  MORALES PLUMBING ORION — Firebase Setup Script" -ForegroundColor Cyan
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Cyan
Write-Host ""

# ── STEP 0: Verify Firebase CLI ──────────────────────────────
Write-Host "[ 0/7 ] Verificando Firebase CLI..." -ForegroundColor Yellow
try {
    $ver = firebase --version 2>&1
    Write-Host "        Firebase CLI: v$ver" -ForegroundColor Green
} catch {
    Write-Host "        Instalando Firebase CLI..." -ForegroundColor Yellow
    npm install -g firebase-tools
    Write-Host "        Firebase CLI instalado." -ForegroundColor Green
}

# ── STEP 1: Login ────────────────────────────────────────────
Write-Host ""
Write-Host "[ 1/7 ] Autenticando con Google..." -ForegroundColor Yellow
Write-Host "        Se abrira el navegador. Inicia sesion con" -ForegroundColor White
Write-Host "        la cuenta Google de Morales Plumbing." -ForegroundColor White
Write-Host ""

$loginStatus = firebase login:list 2>&1
if ($loginStatus -match "No authorized accounts") {
    firebase login
} else {
    Write-Host "        Ya autenticado: $loginStatus" -ForegroundColor Green
}

# ── STEP 2: Create project (skip if exists) ──────────────────
Write-Host ""
Write-Host "[ 2/7 ] Creando proyecto Firebase: $ProjectId ..." -ForegroundColor Yellow

$projectList = firebase projects:list 2>&1
if ($projectList -match $ProjectId) {
    Write-Host "        Proyecto ya existe." -ForegroundColor Green
} else {
    try {
        firebase projects:create $ProjectId --display-name $ProjectName
        Write-Host "        Proyecto creado: $ProjectId" -ForegroundColor Green
    } catch {
        Write-Host "        NOTA: Si el ID ya existe en otra cuenta, cambia ProjectId en este script." -ForegroundColor Yellow
    }
}

# ── STEP 3: Set default project ──────────────────────────────
Write-Host ""
Write-Host "[ 3/7 ] Configurando proyecto por defecto..." -ForegroundColor Yellow
firebase use $ProjectId
Write-Host "        Usando proyecto: $ProjectId" -ForegroundColor Green

# ── STEP 4: Enable Firestore ─────────────────────────────────
Write-Host ""
Write-Host "[ 4/7 ] Desplegando reglas de Firestore..." -ForegroundColor Yellow
firebase firestore:databases:create "(default)" --location $Region 2>&1 | Out-Null
firebase deploy --only firestore:rules,firestore:indexes 2>&1
Write-Host "        Reglas de Firestore desplegadas." -ForegroundColor Green

# ── STEP 5: Enable Anonymous Auth via REST API ───────────────
Write-Host ""
Write-Host "[ 5/7 ] Habilitando Authentication Anonima..." -ForegroundColor Yellow
Write-Host "        (Abre Firebase Console > Authentication > Sign-in method > Anonymous > Enable)" -ForegroundColor White
Write-Host ""
Start-Process "https://console.firebase.google.com/project/$ProjectId/authentication/providers"
Write-Host "        Presiona ENTER cuando hayas habilitado 'Anonymous' en el navegador..."
Read-Host

# ── STEP 6: Get Web App Config ───────────────────────────────
Write-Host ""
Write-Host "[ 6/7 ] Creando Web App y obteniendo configuracion..." -ForegroundColor Yellow

# Create web app
$appId = firebase apps:create web "ORION Portal" 2>&1 | Select-String "App ID" | ForEach-Object { ($_ -split ": ")[1].Trim() }

if (-not $appId) {
    # Try to get existing app
    $appList = firebase apps:list 2>&1
    Write-Host $appList
}

# Get the SDK config snippet
$sdkConfig = firebase apps:sdkconfig web 2>&1
Write-Host ""
Write-Host "──── TU FIREBASE CONFIG ────" -ForegroundColor Cyan
Write-Host $sdkConfig -ForegroundColor White
Write-Host "────────────────────────────" -ForegroundColor Cyan

# ── STEP 7: Inject config into index.html ─────────────────────
Write-Host ""
Write-Host "[ 7/7 ] Inyectando config en index.html..." -ForegroundColor Yellow

# Parse config values from sdk output
$apiKey           = if ($sdkConfig -match '"apiKey":\s*"([^"]+)"')            { $matches[1] } else { "PENDING" }
$authDomain       = if ($sdkConfig -match '"authDomain":\s*"([^"]+)"')        { $matches[1] } else { "$ProjectId.firebaseapp.com" }
$projectIdMatch   = if ($sdkConfig -match '"projectId":\s*"([^"]+)"')         { $matches[1] } else { $ProjectId }
$storageBucket    = if ($sdkConfig -match '"storageBucket":\s*"([^"]+)"')     { $matches[1] } else { "$ProjectId.appspot.com" }
$messagingSenderId= if ($sdkConfig -match '"messagingSenderId":\s*"([^"]+)"') { $matches[1] } else { "PENDING" }
$appIdMatch       = if ($sdkConfig -match '"appId":\s*"([^"]+)"')             { $matches[1] } else { "PENDING" }

$newConfig = @"
window.MORALES_FIREBASE_CONFIG = {
        apiKey:            "$apiKey",
        authDomain:        "$authDomain",
        projectId:         "$projectIdMatch",
        storageBucket:     "$storageBucket",
        messagingSenderId: "$messagingSenderId",
        appId:             "$appIdMatch"
    };
"@

$indexPath = Join-Path $WorkDir "index.html"
$html = Get-Content $indexPath -Raw -Encoding UTF8

$oldConfig = 'window.MORALES_FIREBASE_CONFIG = {[^}]+};'
$html = $html -replace $oldConfig, $newConfig

Set-Content -Path $indexPath -Value $html -Encoding UTF8
Write-Host "        index.html actualizado con tu configuracion real." -ForegroundColor Green

# ── DONE ─────────────────────────────────────────────────────
Write-Host ""
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Green
Write-Host "  SETUP COMPLETO" -ForegroundColor Green
Write-Host "═══════════════════════════════════════════════════════" -ForegroundColor Green
Write-Host ""
Write-Host "  Proyecto:  $ProjectId" -ForegroundColor White
Write-Host "  Firestore: Activo (us-west2)" -ForegroundColor White
Write-Host "  Auth:      Anonymous" -ForegroundColor White
Write-Host "  Rules:     Desplegadas" -ForegroundColor White
Write-Host ""
Write-Host "  Para ver tus citas en tiempo real:" -ForegroundColor Yellow
Write-Host "  https://console.firebase.google.com/project/$ProjectId/firestore" -ForegroundColor Cyan
Write-Host ""
Write-Host "  Para verificar el sitio abre index.html y agenda una cita." -ForegroundColor White
Write-Host "  La cita aparecera en Firestore Console en segundos." -ForegroundColor White
Write-Host ""

# Open Firestore console
Start-Process "https://console.firebase.google.com/project/$ProjectId/firestore/data"
