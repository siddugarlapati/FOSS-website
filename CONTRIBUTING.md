# Contributing to AU GLUG Website

Thank you for your interest in contributing to the AU GLUG (Anurag University GNU/Linux Users Group) website! We appreciate your help in improving our platform that promotes Free and Open Source Software (FOSS) in our university community.

## 🌱 Getting Started

Before you begin contributing, please ensure you have:

- A GitHub or GitLab account
- Git installed on your local machine
- Node.js (v18.x or later) and npm installed
- Basic understanding of React, TypeScript, and modern web development

## 🍴 How to Contribute

### 1. Fork the Repository

Fork the repository by clicking the "Fork" button on the top right corner of the repository page.

### 2. Clone Your Fork

```bash
git clone https://github.com/YOUR_USERNAME/au-glug-website.git
# or if using GitLab
git clone https://gitlab.com/YOUR_USERNAME/au-glug-website.git
cd au-glug-website
```

### 3. Set Up Remote Upstream

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/au-glug-website.git
# or if using GitLab
git remote add upstream https://gitlab.com/ORIGINAL_OWNER/au-glug-website.git
```

### 4. Create a New Branch

Always create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

## 🧪 Development Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Visit `http://localhost:3000` to view the website

## 📝 Code Guidelines

### JavaScript/TypeScript Style Guide
- Follow the existing code style and conventions in the project
- Use camelCase for variable and function names
- Use PascalCase for React components
- Use UPPERCASE for constants
- Write clear, descriptive variable and function names
- Add comments for complex logic

### Commit Messages
- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests after the first line
- Example: `feat: add new event calendar component`

### File Naming Convention
- Use kebab-case for file names: `my-component.tsx`
- Use PascalCase for React component names: `MyComponent`
- Keep related files together in the same directory

## 🐛 Issue Contributions

### Find an Issue
- Look through our [issues](https://github.com/ORGANIZATION/au-glug-website/issues) to find something that interests you
- Comment on the issue to let others know you're working on it
- If you find a bug, feel free to create a new issue

### Working on Issues
- Always create a new branch for your work
- Make atomic commits (each commit should represent a logical unit of change)
- Write clear, descriptive commit messages
- Test your changes thoroughly

## 🧩 Pull Requests

### Before Submitting
- Ensure your code follows the style guide
- Test your changes thoroughly
- Update documentation if necessary
- Add comments to complex code sections
- Run `npm run build` to ensure the project builds successfully

### Submitting a Pull Request
1. Push your branch to your fork:
```bash
git push origin feature/your-feature-name
```

2. Go to the original repository and create a pull request
3. Fill out the pull request template (if available)
4. Describe your changes in detail
5. Link any related issues

### Pull Request Review Process
- One or more maintainers will review your code
- You may be asked to make changes
- Once approved, your PR will be merged

## 🏗️ Project Structure

```
au-glug-website/
├── components/           # Reusable UI components
│   ├── AboutAUGLUG.tsx   # About section with AU GLUG details
│   ├── AboutFOSS.tsx     # FOSS philosophy section
│   ├── Hero.tsx          # Hero section with terminal animations
│   ├── Navbar.tsx        # Navigation component
│   ├── Footer.tsx        # Footer component
│   └── ...
├── pages/               # Route components
│   ├── Home.tsx         # Home page
│   ├── About.tsx        # About page
│   ├── Projects.tsx     # Projects page
│   ├── Events.tsx       # Events page
│   ├── Team.tsx         # Team page
│   └── Join.tsx         # Join page
├── public/              # Static assets
├── App.tsx              # Main application component
├── index.html           # HTML template
├── index.tsx            # React entry point
├── package.json         # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── README.md            # Project documentation
```

## 🧪 Testing

### Running Tests
```bash
npm test
```

### Before Submitting Your PR
- Ensure all existing tests pass
- Add new tests if you're adding new functionality
- Test your changes manually in different browsers

## 🎨 Design Guidelines

### Color Palette
- Primary Yellow: `#f1c40f` (for highlights and accents)
- Secondary Colors: Various shades of green, blue, purple for different sections
- Background: Dark theme with `#050505` as primary background
- Text: White and neutral grays for readability

### Typography
- Primary Font: Plus Jakarta Sans (for body text)
- Monospace Font: JetBrains Mono (for code and terminal elements)
- Maintain consistent font sizes and weights throughout

### Animation Guidelines
- Use Framer Motion for animations
- Keep animations subtle and purposeful
- Ensure animations enhance UX without being distracting
- Maintain accessibility by respecting user's reduced motion preferences

## 🚀 Deployment

### Local Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🤝 Community

### Need Help?
- Join our [WhatsApp Community](https://chat.whatsapp.com/IipGdNeCoy01MhQAO2he4b?mode=gi_t)
- Check the [Issues](https://github.com/ORGANIZATION/au-glug-website/issues) for similar problems
- Create a new issue if you can't find a solution

### Want to Discuss?
- Join our community discussions
- Share your ideas and suggestions
- Participate in planning sessions

## 📜 Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please be respectful and inclusive in all interactions.

## 🙏 Thank You

Thank you for considering contributing to the AU GLUG website! Your efforts help promote Free and Open Source Software in our university community and beyond.

Every contribution, big or small, is valued and appreciated. Welcome to the AU GLUG community!