@echo off
if exist "dist\" (
  rmdir /s /q "dist"
)
mkdir "dist" "dist\mjs" "dist\cjs"
set mjs={ "type": "module" }
echo %mjs% > "dist\mjs\package.json"
set cjs={ "type": "commonjs" }
echo %cjs% > "dist\cjs\package.json"