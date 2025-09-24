#!/usr/bin/env bash
set -Eeuo pipefail
cd "$(dirname "$0")/.."

# postcss (ESM)
test -f postcss.config.js
grep -q 'export default' postcss.config.js

# tailwind (ESM JS)
test -f tailwind.config.js
grep -q 'export default' tailwind.config.js
! test -f tailwind.config.ts || { echo "tailwind.config.ts должен быть удалён"; exit 1; }

# globals.css
CSS=src/app/globals.css
test -f "$CSS"
grep -q '@tailwind base;' "$CSS"
grep -q '@tailwind components;' "$CSS"
grep -q '@tailwind utilities;' "$CSS"
grep -q ':root' "$CSS"
grep -q '\.dark' "$CSS"

# layout.tsx
LAY=src/app/layout.tsx
test -f "$LAY"
grep -q 'import "./globals.css"' "$LAY"
grep -q 'ThemeProvider' "$LAY" || { echo "Нет ThemeProvider в layout.tsx"; exit 1; }
grep -q 'Inter' "$LAY" || { echo "Нет next/font Inter в layout.tsx"; exit 1; }

echo "✅ CSS/Tailwind/PostCSS ок"
