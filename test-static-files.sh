#!/bin/bash

# Script pour tester l'accessibilité des fichiers statiques
echo "🔍 Test d'accessibilité des fichiers statiques pour chinelogistique.com"
echo "=================================================================="

BASE_URL="https://chinelogistique.com"

# Liste des fichiers à tester
files=(
    "favicon.ico"
    "favicon-16x16.png"
    "favicon-32x32.png"
    "apple-touch-icon.png"
    "android-chrome-192x192.png"
    "android-chrome-512x512.png"
    "icon.svg"
    "site.webmanifest"
    "sitemap.xml"
    "robots.txt"
)

echo ""
echo "📋 Test des fichiers statiques :"
echo "--------------------------------"

for file in "${files[@]}"; do
    echo -n "Testing $file... "
    
    # Test avec curl
    status_code=$(curl -s -o /dev/null -w "%{http_code}" "$BASE_URL/$file")
    
    if [ "$status_code" = "200" ]; then
        echo "✅ OK ($status_code)"
    else
        echo "❌ ERREUR ($status_code)"
    fi
done

echo ""
echo "🤖 Test avec User-Agent Googlebot :"
echo "-----------------------------------"

for file in "${files[@]}"; do
    echo -n "Testing $file (Googlebot)... "
    
    # Test avec User-Agent Googlebot
    status_code=$(curl -s -o /dev/null -w "%{http_code}" -H "User-Agent: Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" "$BASE_URL/$file")
    
    if [ "$status_code" = "200" ]; then
        echo "✅ OK ($status_code)"
    else
        echo "❌ ERREUR ($status_code)"
    fi
done

echo ""
echo "📊 Test des headers importants :"
echo "--------------------------------"

echo "Content-Type pour favicon.ico :"
curl -s -I "$BASE_URL/favicon.ico" | grep -i "content-type"

echo "Content-Type pour sitemap.xml :"
curl -s -I "$BASE_URL/sitemap.xml" | grep -i "content-type"

echo ""
echo "🏁 Test terminé !"
echo "Si tous les fichiers retournent 200, votre configuration est correcte."
echo "Sinon, vérifiez votre configuration serveur et redéployez."
