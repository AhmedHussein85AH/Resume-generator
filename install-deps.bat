@echo off
echo Installing Resume-generator Dependencies...
echo.

REM Set environment variables for Node.js compatibility
set NODE_OPTIONS=--openssl-legacy-provider

echo Environment variables set:
echo - NODE_OPTIONS: %NODE_OPTIONS%
echo.

echo Installing npm dependencies...
echo This may take a few minutes...
echo.

npm install

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Dependencies installed successfully!
    echo You can now run the application using 'start-app.bat'
) else (
    echo.
    echo ❌ Installation failed! Please check the error messages above.
    echo Make sure you have Node.js and npm installed.
)

echo.
pause
