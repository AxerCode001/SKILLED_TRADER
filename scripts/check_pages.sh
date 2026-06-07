#!/usr/bin/env bash
set -eu
cd "$(dirname "$0")/.."
printf "Checking HTML pages in project-folder/\n"
for f in project-folder/*.html; do
  name=$(basename "$f")
  status=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:5000/$name")
  echo "PAGE: $name -> $status"
  # check common assets
  for a in "/css/main.css" "/js/main.js" "/favicon.ico"; do
    code=$(curl -s -o /dev/null -w "%{http_code}" "http://localhost:5000$a" || true)
    echo "  ASSET: $a -> ${code:-000}"
  done
  # report any absolute /project-folder links
  grep -nH "/project-folder/" "$f" || true
  echo
done
