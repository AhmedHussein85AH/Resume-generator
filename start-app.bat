@echo off
echo Starting Resume-generator Application...
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

REM Start the application
echo Starting the development server...
echo The application will be available at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

npm start

pause
