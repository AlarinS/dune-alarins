#!/usr/bin/env bash
set -Eeuo pipefail

shopt -s globstar nullglob

mapfile -t files < <(find src -type f -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.js')

# 1) en-US -> ru-RU
for f in "${files[@]}"; do
  sed -i 's/"en-US"/"ru-RU"/g' "$f"
done

# 2) toLocaleString() без аргументов -> toLocaleString("ru-RU")
for f in "${files[@]}"; do
  sed -i 's/toLocaleString()[[:space:]]*/toLocaleString("ru-RU")/g' "$f"
done

# 3) toLocaleDateString() без аргументов -> с "ru-RU"
for f in "${files[@]}"; do
  sed -i 's/toLocaleDateString()[[:space:]]*/toLocaleDateString("ru-RU")/g' "$f"
done

echo "beautify-ru: готово."
