#!/usr/bin/env bash
set -Eeuo pipefail
cd "$(dirname "$0")/.."
DICT=i18n/dictionary.ru.json

# ключи из JSON
jq -r 'keys[]' "$DICT" | sort -u > /tmp/i18n_keys.txt

# все ключи, используемые в t("...") в .tsx/.ts (исключаем import("..."))
grep -RhoP --include='*.ts' --include='*.tsx' '(?<![A-Za-z_])t\("([A-Za-z0-9_.-]+)"' src \
  | sed -E 's/.*t\("([^"]+)".*/\1/' \
  | sort -u > /tmp/i18n_used.txt || true

# разница
MISSING=$(comm -13 /tmp/i18n_keys.txt /tmp/i18n_used.txt | tr '\n' ' ')
if [ -n "$MISSING" ]; then
  echo "❌ Нет переводов для ключей: $MISSING"
  exit 1
fi
echo "✅ Все ключи t(...) есть в словаре"
