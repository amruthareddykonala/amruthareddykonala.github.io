#!/usr/bin/env bash
# Build the site and publish dist/ to the gh-pages branch (GitHub Pages serves that branch).
# Usage (from this folder): bash deploy.sh
set -euo pipefail
cd "$(dirname "$0")"
npx astro build
cd dist
touch .nojekyll
rm -rf .git
git init -q -b gh-pages
git config user.name "Amrutha Reddy Konala"
git config user.email "346369104+amruthareddykonala@users.noreply.github.com"
git add -A
git commit -q -m "Deploy site build $(date -u +%Y-%m-%dT%H:%MZ)"
git push -q -f https://github.com/amruthareddykonala/amruthareddykonala.github.io.git gh-pages
echo "Pushed. Live in 1-2 minutes at https://amruthareddykonala.github.io/"
