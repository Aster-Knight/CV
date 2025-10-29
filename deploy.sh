#!/bin/bash

# Script para automatizar la instalación de dependencias del proyecto CV.

# Detener la ejecución si un comando falla
set -e

echo "Iniciando la instalación de dependencias..."

# Instalar dependencias de la API
echo "Instalando dependencias para la API..."
cd API
npm install
echo "Dependencias de la API instaladas."

# Volver a la raíz y entrar en la carpeta del frontend
cd ../cv-jona

# Instalar dependencias del Frontend
echo "Instalando dependencias para el frontend (cv-jona)..."
npm install
echo "Dependencias del frontend instaladas."

cd ..

echo "--------------------------------------------------"
echo "¡Instalación completada!"
echo "Para iniciar el proyecto, abre dos terminales:"
echo "1. En la primera, ejecuta: cd API && npm start"
echo "2. En la segunda, ejecuta: cd cv-jona && npm start"
echo "--------------------------------------------------"
