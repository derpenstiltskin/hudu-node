#!/bin/sh
[ -d "./dist" ] && rm -rf "./dist"
mkdir "./dist" "./dist/mjs" "./dist/cjs"
cat '{ "type": "module" }' > "dist\mjs\index.js"
cat '{ "type": "commonjs" }' > "dist\cjs\index.js"