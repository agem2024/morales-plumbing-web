<#
.SYNOPSIS
    MORALES PLUMBING — Firebase Setup (Paso 2 de 2)
    Ejecutar DESPUES de 'firebase login' en PowerShell
.NOTES
    Uso:
    1. Primero en PowerShell: firebase login
    2. Luego:                 .\firebase-deploy.ps1
#>

$ProjectId = "morales-plumbing-orion"
$WorkDir   = $PSScriptRoot

Write-Host "Verificando autenticacion..." -ForegroundColor Yellow
$loginCheck = firebase login:list 2>&1
if ($loginCheck -match "No authorized accounts") {
    Write-Host "ERROR: No estas autenticado. Ejecuta 'firebase login' primero." -ForegroundColor Red
    exit 1
}
Write-Host "Autenticado OK" -ForegroundColor Green

# Create project if not exists
Write-Host "Verificando proyecto $ProjectId..." -ForegroundColor Yellow
$projects = firebase projects:list 2>&1
if ($projects -notmatch $ProjectId) {
    Write-Host "Creando proyecto..." -ForegroundColor Yellow
    firebase projects:create $ProjectId --display-name "Morales Plumbing ORION" 2>&1
}

# Set default project
firebase use $ProjectId 2>&1

# Create Firestore database
Write-Host "Creando Firestore database..." -ForegroundColor Yellow
firebase firestore:databases:create "(default)" --location us-west2 2>&1

# Deploy Firestore rules + indexes
Write-Host "Desplegando reglas de Firestore..." -ForegroundColor Yellow
firebase deploy --only firestore:rules,firestore:indexes 2>&1
Write-Host "Reglas desplegadas." -ForegroundColor Green

# Create Web App
Write-Host "Creando Web App..." -ForegroundColor Yellow
firebase apps:create web "ORION Portal" --project $ProjectId 2>&1

# Get SDK config
Write-Host "Obteniendo configuracion del SDK..." -ForegroundColor Yellow
$sdkOutput = firebase apps:sdkconfig web --project $ProjectId 2>&1
$sdkString  = $sdkOutput | Out-String

# Parse values
function Get-ConfigValue($text, $key) {
    if ($text -match "`"$key`":\s*`"([^`"]+)`"") { return $matches[1] }
    return "PENDING_$key"
}

$apiKey           = Get-ConfigValue $sdkString "apiKey"
$authDomain       = Get-ConfigValue $sdkString "authDomain"
$projectIdVal     = Get-ConfigValue $sdkString "projectId"
$storageBucket    = Get-ConfigValue $sdkString "storageBucket"
$messagingSender  = Get-ConfigValue $sdkString "messagingSenderId"
$appId            = Get-ConfigValue $sdkString "appId"

Write-Host ""
Write-Host "=== CONFIG DETECTADA ===" -ForegroundColor Cyan
Write-Host "apiKey:            $apiKey"
Write-Host "authDomain:        $authDomain"
Write-Host "projectId:         $projectIdVal"
Write-Host "storageBucket:     $storageBucket"
Write-Host "messagingSenderId: $messagingSender"
Write-Host "appId:             $appId"

# Inject into index.html
Write-Host ""
Write-Host "Inyectando config en index.html..." -ForegroundColor Yellow
$indexPath = Join-Path $WorkDir "index.html"
$html = [System.IO.File]::ReadAllText($indexPath, [System.Text.Encoding]::UTF8)

$newConfig = "window.MORALES_FIREBASE_CONFIG = {`n        apiKey:            `"$apiKey`",`n        authDomain:        `"$authDomain`",`n        projectId:         `"$projectIdVal`",`n        storageBucket:     `"$storageBucket`",`n        messagingSenderId: `"$messagingSender`",`n        appId:             `"$appId`"`n    };"

$html = $html -replace 'window\.MORALES_FIREBASE_CONFIG\s*=\s*\{[^}]+\};', $newConfig
[System.IO.File]::WriteAllText($indexPath, $html, [System.Text.Encoding]::UTF8)
Write-Host "index.html actualizado." -ForegroundColor Green

# Open console
Write-Host ""
Write-Host "===================================" -ForegroundColor Green
Write-Host " SETUP COMPLETO" -ForegroundColor Green
Write-Host "===================================" -ForegroundColor Green
Write-Host "Abre para ver tus citas:" -ForegroundColor White
Write-Host "https://console.firebase.google.com/project/$ProjectId/firestore" -ForegroundColor Cyan
Start-Process "https://console.firebase.google.com/project/$ProjectId/authentication/providers"
Write-Host ""
Write-Host "PASO MANUAL REQUERIDO:" -ForegroundColor Yellow
Write-Host "En el navegador que se abrio: Authentication > Sign-in method > Anonymous > ENABLE" -ForegroundColor White
