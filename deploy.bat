@echo off
echo Building Resume Generator for GitHub Pages...
echo.

REM Build the project
call npm run build

if %ERRORLEVEL% neq 0 (
    echo Build failed!
    pause
    exit /b 1
)

echo.
echo Build completed successfully!
echo.
echo To deploy to GitHub Pages:
echo 1. Go to your GitHub repository: https://github.com/ahmedhussein85ah/Resume-generator
echo 2. Click on "Actions" tab
echo 3. Click "New workflow"
echo 4. Choose "Deploy static content to GitHub Pages"
echo 5. Or manually upload the 'build' folder contents to your repository
echo.
echo Your app is ready in the 'build' folder!
echo.
pause
