#!/usr/bin/env bash
set -Eeuo pipefail
cd "$(dirname "$0")/.."

# Ищем латиницу (>=3 символов) между тегами, исключая очевидные случаи
BAD=$(grep -RInE --include='*.tsx' --include='*.ts' '>([[:space:]]*)[A-Za-z]{3,}([[:space:]]*)<' src || true)
BAD=$(echo "$BAD" | grep -vE 'href=|className=|aria-|role=|data-|value=|type=' || true)

if [ -n "${BAD:-}" ]; then
  echo "❌ Найдён не переведённый текст:"
  echo "$BAD"
  exit 1
fi
echo "✅ Сырых EN-фраз не найдено"
