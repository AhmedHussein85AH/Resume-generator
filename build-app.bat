@echo off
echo Building Resume-generator for Production...
echo.

REM Set environment variables for Node.js compatibility
set NODE_OPTIONS=--openssl-legacy-provider
set BROWSER=none

echo Environment variables set:
echo - NODE_OPTIONS: %NODE_OPTIONS%
echo - BROWSER: %BROWSER%
echo.

REM Check if node_modules exists
if not exist "node_modules" (
    echo Installing dependencies...
    npm install
    echo.
)

REM Build the application
echo Building the production version...
echo This may take a few minutes...
echo.

npm run build

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Build completed successfully!
    echo The production files are in the 'build' folder
    echo You can now deploy the contents of the 'build' folder to any web server
) else (
    echo.
    echo ❌ Build failed! Please check the error messages above.
)

echo.
pause
