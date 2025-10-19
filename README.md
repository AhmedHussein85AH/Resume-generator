# 📄 Resume Generator

<div align="center">
  <img src="public/images/icons/icon-192x192.png" width="128px" alt="Resume Generator Logo" />
  
  **A modern, professional resume builder with advanced features**
  
  [![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
  [![React](https://img.shields.io/badge/React-16.13.1-blue.svg)](https://reactjs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-1.4.6-38B2AC.svg)](https://tailwindcss.com/)
  [![Live Demo](https://img.shields.io/badge/Live_Demo-Available-brightgreen.svg)](#live-demo)
</div>

## 🚀 Live Demo

**[Try the Resume Generator Now](https://ahmedhussein85ah.github.io/Resume-generator/)**

> **Note**: Click on the sidebar menu, go to "Actions" tab, and click "Load Demo Data" to see the application with sample data.

## ✨ Features

### 🎯 **Core Functionality**
- **Real-time Resume Building** - See changes instantly as you type
- **Professional Templates** - Multiple modern resume layouts
- **Customizable Design** - Colors, fonts, and layouts
- **Multi-language Support** - Built-in internationalization
- **Responsive Design** - Works perfectly on all devices

### 📊 **Advanced Analytics**
- **Word Count Tracking** - Monitor resume content length
- **Completion Percentage** - Track resume completeness
- **Progress Indicators** - Visual progress bars and tips
- **Real-time Updates** - Analytics update as you edit

### 💾 **Export & Import**
- **Multiple Formats** - PDF, Word, HTML, and JSON export
- **One-Click Import** - Load existing resume data
- **Version Control** - Resume history and backup system
- **Auto-save** - Never lose your work

### 🎨 **Professional Design**
- **Modern UI** - Clean, intuitive interface
- **Sidebar Navigation** - Easy access to all features
- **Pin & Minimize** - Flexible sidebar controls
- **Keyboard Shortcuts** - Power user features
- **Dark Mode Ready** - Professional appearance

## 🛠️ Technology Stack

- **Frontend**: React 16.13.1
- **Styling**: Tailwind CSS 1.4.6
- **State Management**: React Context API
- **Internationalization**: React i18next
- **PDF Generation**: jsPDF
- **File Handling**: JSZip, File-saver
- **Pan & Zoom**: React Easy Panzoom
- **Icons**: React Icons, Material Icons

## 📦 Installation & Setup

### Prerequisites
- **Node.js** (v13.12.0 or higher)
- **npm** (v6.14.4 or higher)
- **Git** (for cloning)

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/Resume-generator.git
   cd Resume-generator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
```

## 🎮 Usage Guide

### Getting Started
1. **Open the application** in your browser
2. **Load demo data** from the Actions tab to see sample content
3. **Start editing** using the sidebar navigation
4. **Customize** colors, fonts, and layout as needed
5. **Export** your resume in your preferred format

### Sidebar Features
- **👤 Profile** - Personal information and contact details
- **💼 Experience** - Work history and achievements
- **🎓 Education** - Academic background and qualifications
- **⚡ Skills** - Technical and soft skills
- **🎨 Templates** - Resume design templates
- **🔤 Fonts** - Typography options
- **🌈 Colors** - Color scheme customization
- **⚙️ Actions** - Import/export functionality
- **📊 Analytics** - Resume statistics and progress
- **🕒 History** - Version control and backups

### Keyboard Shortcuts
- **Ctrl + S** - Save resume
- **Ctrl + P** - Print/Export PDF
- **Ctrl + E** - Export resume
- **Escape** - Close sidebar (when not pinned)

## 🌍 Internationalization

The application supports multiple languages. To add a new language:

1. Navigate to `src/i18n/locales/`
2. Copy `en.json` to `your-language-code.json`
3. Translate all strings
4. Submit a pull request

### Supported Languages
- English (US)
- Arabic (عربي)
- Spanish (Español)
- French (Français)
- German (Deutsch)
- And many more...

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Development Tasks
- [ ] Add new resume templates
- [ ] Implement additional export formats
- [ ] Enhance analytics features
- [ ] Improve mobile responsiveness
- [ ] Add more language translations
- [ ] Optimize performance

### Contributing Guidelines
1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📸 Screenshots

<div align="center">
  <img src="public/images/screenshots/main-interface.png" width="400px" alt="Main Interface" />
  <img src="public/images/screenshots/analytics.png" width="400px" alt="Analytics Dashboard" />
  <img src="public/images/screenshots/export-options.png" width="400px" alt="Export Options" />
</div>

## 🏗️ Project Structure

For a detailed breakdown of the project architecture, see [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

### Quick Overview
```
Resume-generator/
├── src/
│   ├── components/          # React components
│   │   ├── App/            # Main app component
│   │   ├── FloatingActionMenu/  # Enhanced sidebar with analytics
│   │   ├── LeftSidebar/    # Profile, work, education, skills
│   │   ├── RightSidebar/   # Templates, fonts, colors, actions
│   │   └── UnifiedSidebar/ # Combined sidebar logic
│   ├── templates/          # Resume templates and blocks
│   ├── i18n/              # Internationalization (30+ languages)
│   ├── context/           # Global state management
│   ├── shared/            # Reusable components
│   └── assets/            # Fonts, images, CSS
├── public/                # Static assets and icons
└── docs/                 # Documentation
```

## 🐛 Known Issues

- Some older browsers may not support all features
- PDF export quality may vary by browser
- Large resumes may take longer to process

## 🔮 Roadmap

### Version 2.0
- [ ] Advanced template editor
- [ ] Cloud storage integration
- [ ] Collaborative editing
- [ ] AI-powered content suggestions
- [ ] Advanced analytics dashboard

### Version 2.1
- [ ] Mobile app (React Native)
- [ ] Desktop app (Electron)
- [ ] Plugin system
- [ ] Advanced export options

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Contributors** - All the amazing people who helped improve this project
- **Open Source Community** - For the inspiration and support

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/your-username/Resume-generator/issues)
- **Discussions**: [GitHub Discussions](https://github.com/your-username/Resume-generator/discussions)
- **Email**: your-email@example.com

---

<div align="center">
  <p>Made with ❤️ by Ahmed Hussein Security coordinator</p>
  <p>⭐ Star this repository if you found it helpful!</p>
</div>
