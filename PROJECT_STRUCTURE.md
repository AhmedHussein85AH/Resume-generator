# 📁 Project Structure

This document provides a comprehensive overview of the Resume Generator project structure, explaining the purpose and organization of each directory and file.

## 🏗️ Root Directory Structure

```
Resume-generator/
├── 📁 .vscode/                    # VS Code configuration
├── 📁 docs/                       # Documentation files
├── 📁 images/                     # Project images and assets
├── 📁 nginx/                      # Nginx configuration
├── 📁 node_modules/               # Node.js dependencies
├── 📁 public/                     # Public static assets
├── 📁 src/                        # Source code
├── 📁 static/                     # Static files
├── 📄 .gitignore                  # Git ignore rules
├── 📄 LICENSE                     # MIT License
├── 📄 README.md                   # Project documentation
├── 📄 package.json                # Node.js dependencies and scripts
├── 📄 tailwind.config.js          # Tailwind CSS configuration
└── 📄 manifest.json               # Web app manifest
```

## 📂 Source Code Structure (`src/`)

### 🎨 Assets (`src/assets/`)
```
assets/
├── 📁 css/                        # Custom CSS files
│   ├── animate.css               # Animation styles
│   └── fonts.css                 # Font definitions
├── 📁 demo/                       # Demo data
│   └── resumedata.json           # Sample resume data
├── 📁 fonts/                      # Custom fonts
│   ├── 📁 Lato/                  # Lato font family
│   ├── 📁 MaterialIcons/         # Material Design icons
│   ├── 📁 Montserrat/            # Montserrat font family
│   ├── 📁 Nunito/                # Nunito font family
│   ├── 📁 OpenSans/              # Open Sans font family
│   ├── 📁 Raleway/               # Raleway font family
│   ├── 📁 Rubik/                 # Rubik font family
│   ├── 📁 SourceSansPro/         # Source Sans Pro font family
│   ├── 📁 TitilliumWeb/          # Titillium Web font family
│   └── 📁 Ubuntu/                # Ubuntu font family
├── 📁 images/                     # Image assets
└── 📁 tailwind/                   # Tailwind CSS files
    ├── tailwind.src.css          # Source Tailwind CSS
    └── tailwind.css              # Compiled Tailwind CSS
```

### 🧩 Components (`src/components/`)

#### Main Application Components
```
components/
├── 📁 App/                        # Main application component
│   └── App.js                    # Root component with routing and layout
├── 📁 FloatingActionMenu/        # Enhanced sidebar with analytics
│   ├── FloatingActionMenu.js     # Main sidebar component
│   ├── ResumeAnalytics.js        # Analytics dashboard
│   └── ResumeHistory.js          # Version control system
├── 📁 LeftSidebar/               # Left sidebar components
│   └── 📁 tabs/                  # Tab components
│       ├── Profile.js            # Profile information
│       ├── Work.js               # Work experience
│       ├── Education.js           # Education details
│       └── Skills.js             # Skills management
├── 📁 RightSidebar/               # Right sidebar components
│   └── 📁 tabs/                  # Tab components
│       ├── Templates.js          # Template selection
│       ├── Fonts.js              # Font customization
│       ├── Colors.js             # Color schemes
│       ├── Actions.js            # Import/export functions
│       ├── Settings.js           # Application settings
│       └── About.js              # About information
└── 📁 UnifiedSidebar/            # Unified sidebar component
    └── UnifiedSidebar.js         # Combined sidebar logic
```

### 🔧 Context (`src/context/`)
```
context/
└── AppContext.js                 # Global state management with React Context
```

### 🌍 Internationalization (`src/i18n/`)
```
i18n/
└── 📁 locales/                   # Language files
    ├── 📁 en/                    # English translations
    │   ├── 📁 app/               # App-level translations
    │   ├── 📁 leftSidebar/       # Left sidebar translations
    │   └── 📁 rightSidebar/      # Right sidebar translations
    ├── 📁 ar/                    # Arabic translations
    ├── 📁 es/                    # Spanish translations
    ├── 📁 fr/                    # French translations
    ├── 📁 de/                    # German translations
    └── ...                       # 30+ other languages
```

### 🔧 Shared Components (`src/shared/`)
```
shared/
├── 📁 multilangTextInput/        # Multi-language text input
│   ├── index.js                  # Main component
│   └── 📁 styles/               # Component styles
├── PageController.js             # Page zoom and print controls
├── PrintDialog.js                # Print dialog component
├── PanZoomAnimation.js           # Pan and zoom animations
└── TextField.js                  # Reusable text input component
```

### 🎨 Templates (`src/templates/`)
```
templates/
├── 📁 blocks/                    # Reusable template blocks
│   ├── 📁 Address/               # Address block component
│   ├── 📁 Awards/                # Awards section component
│   ├── 📁 BirthDate/             # Birth date component
│   ├── 📁 Certifications/        # Certifications component
│   ├── 📁 Contact/               # Contact information component
│   ├── 📁 Education/             # Education section component
│   ├── 📁 Heading/               # Resume heading component
│   ├── 📁 Hobbies/               # Hobbies section component
│   ├── 📁 Languages/             # Languages component
│   ├── 📁 Names/                 # Name display component
│   ├── 📁 Objective/             # Professional objective component
│   ├── 📁 Projects/              # Projects section component
│   ├── 📁 References/            # References component
│   ├── 📁 SectionSkills/         # Skills section component
│   ├── 📁 Skills/                # Skills component
│   └── 📁 Work/                  # Work experience component
├── 📁 castform/                  # Castform template
├── 📁 celebi/                    # Celebi template
├── 📁 celebi-old/                # Legacy Celebi template
├── 📁 gengar/                    # Gengar template
├── 📁 glalie/                    # Glalie template
├── 📁 onyx/                      # Onyx template
├── 📁 pikachu/                   # Pikachu template
└── index.js                      # Template registry
```

### 🛠️ Utilities (`src/utils/`)
```
utils/
└── index.js                      # Utility functions
```

## 🌐 Public Assets (`public/`)

```
public/
├── 📁 images/                    # Public images
│   ├── 📁 icons/                 # App icons
│   │   ├── icon-192x192.png     # 192x192 app icon
│   │   ├── icon-512x512.png     # 512x512 app icon
│   │   └── Resume-generator.png # Main logo
│   └── 📁 screenshots/           # Screenshots for documentation
├── favicon.ico                   # Website favicon
├── index.html                    # Main HTML file
├── manifest.json                 # Web app manifest
└── robots.txt                    # SEO robots file
```

## 📋 Key Files Explained

### 🔧 Configuration Files
- **`package.json`** - Node.js dependencies, scripts, and project metadata
- **`tailwind.config.js`** - Tailwind CSS configuration and custom styles
- **`.gitignore`** - Git ignore rules for version control
- **`manifest.json`** - Web app manifest for PWA functionality

### 📱 Application Entry Points
- **`public/index.html`** - Main HTML template
- **`src/index.js`** - React application entry point
- **`src/components/App/App.js`** - Main application component

### 🎨 Styling
- **`src/index.css`** - Global CSS styles and CSS variables
- **`src/assets/css/`** - Custom CSS files
- **`src/assets/tailwind/`** - Tailwind CSS source and compiled files

### 🌍 Internationalization
- **`src/i18n/locales/`** - Translation files for 30+ languages
- Each language has separate files for different UI sections

### 🧩 Component Architecture

#### Main Components
1. **App** - Root component managing overall layout
2. **FloatingActionMenu** - Enhanced sidebar with analytics and history
3. **LeftSidebar** - Profile, work, education, and skills management
4. **RightSidebar** - Templates, fonts, colors, and actions
5. **Templates** - Resume layout templates and blocks

#### Shared Components
1. **PageController** - Zoom and print controls
2. **TextField** - Reusable text input component
3. **PrintDialog** - Print functionality
4. **PanZoomAnimation** - Page navigation animations

## 🔄 Data Flow

```
App.js (Root)
├── AppContext (Global State)
├── FloatingActionMenu (Sidebar)
│   ├── ResumeAnalytics (Analytics)
│   ├── ResumeHistory (Version Control)
│   └── Various Tab Components
├── Templates (Resume Layout)
└── PageController (Navigation)
```

## 🎯 Key Features by Directory

### 📊 Analytics & History (`src/components/FloatingActionMenu/`)
- **ResumeAnalytics.js** - Word count, completion percentage, progress tracking
- **ResumeHistory.js** - Version control, backup system, restore functionality

### 🎨 Templates (`src/templates/`)
- **Multiple template designs** - 7 different resume layouts
- **Reusable blocks** - Modular components for different resume sections
- **Template customization** - Colors, fonts, and layout options

### 🌍 Internationalization (`src/i18n/`)
- **30+ languages** supported
- **Modular translation files** - Separate files for different UI sections
- **Easy language addition** - Simple JSON-based translation system

### 🔧 Utilities (`src/shared/`)
- **Reusable components** - TextField, PageController, etc.
- **Animation system** - Pan, zoom, and transition animations
- **Print functionality** - PDF generation and print dialog

## 🚀 Development Workflow

1. **Components** are organized by functionality
2. **Templates** are modular and reusable
3. **Internationalization** supports easy language addition
4. **Shared components** promote code reuse
5. **Context** manages global state efficiently

This structure promotes maintainability, scalability, and ease of development while providing a professional resume building experience.
