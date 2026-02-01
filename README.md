# AU GLUG - Anurag University GNU/Linux Users Group

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Website](https://img.shields.io/website?url=https%3A%2F%2Fauglug-git.vercel.app%2F)](https://auglug-git.vercel.app/)
[![FOSS](https://img.shields.io/badge/FOSS-Free_and_Open_Source-green)](https://en.wikipedia.org/wiki/Free_and_open-source_software)

A modern, animated website for the AUGLUG college FOSS community featuring a hacker aesthetic, terminal animations, and project showcases.

## 🌟 Features

- **Modern UI/UX**: Sleek, animated interface with hacker/cyberpunk aesthetic
- **Terminal Animations**: Realistic Linux desktop simulations with rotating distributions
- **Interactive Elements**: Animated scroll progress bars, hover effects, and transitions
- **Responsive Design**: Works seamlessly across all device sizes
- **Performance Optimized**: Built with Vite for fast development and production builds
- **FOSS Focused**: Dedicated to promoting Free and Open Source Software

## 🚀 Live Demo

Check out the live website: [https://auglug-git.vercel.app/](https://auglug-git.vercel.app/)

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/) (v18.3.1)
- **Build Tool**: [Vite](https://vitejs.dev/) (v6.2.0)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (CDN)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) (v11.11.11)
- **Icons**: [Lucide React](https://lucide.dev/) (v0.454.0)
- **Routing**: [React Router DOM](https://reactrouter.com/) (v6.30.3)
- **Language**: TypeScript

## 📋 About AU GLUG

AU GLUG (Anurag University GNU/Linux Users Group) is the official Free and Open Source Software (FOSS) community of Anurag University. We are a student-led initiative dedicated to fostering a culture of open collaboration, technical excellence, and innovation across GNU/Linux, Open Source technologies, Artificial Intelligence, and emerging domains.

### Our Mission
- Promote Free and Open Source Software as a foundation for learning and innovation
- Enable students to gain practical experience through real-world projects
- Foster a collaborative environment for peer learning and knowledge sharing
- Encourage exploration of Artificial Intelligence and cutting-edge technologies
- Build leadership, initiative, and problem-solving skills within the student community
- Create pathways for meaningful contributions to open-source and social-impact initiatives

### Our Values
- **Openness**: Knowledge grows when shared
- **Collaboration**: Better solutions are built together
- **Learning by Doing**: Practical experience over passive learning
- **Responsibility**: Technology should serve society
- **Innovation**: Continuous exploration of new ideas and tools

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
└── README.md            # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://gitlab.com/dharun-web/au-glug-website.git
cd au-glug-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the project for production |
| `npm run preview` | Locally preview the production build |
| `npm start` | Starts the production server |

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Add comments for complex logic
- Test your changes thoroughly
- Update documentation as needed

## 🐳 Docker Support

The project includes a Dockerfile for containerized deployment:

```bash
# Build the Docker image
docker build -t auglug-website .

# Run the container
docker run -p 3000:3000 auglug-website
```

## 🚀 Deployment

### Vercel (Recommended)

The project is configured for easy deployment on Vercel:

1. Connect your Git repository to Vercel
2. Import the project with the following settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Framework: `vite`
3. Deploy!

### Manual Deployment

1. Build the project: `npm run build`
2. Serve the `dist` folder using your preferred web server

## 🔧 Configuration

The project uses Vite for configuration. You can modify `vite.config.ts` to customize:

- Development server settings
- Environment variables
- Aliases and path mappings
- Plugin configurations

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the AU GLUG community for inspiring this project
- Special thanks to Swecha Telangana for mentorship and developer access
- Inspired by the Free and Open Source Software movement

## 📞 Contact & Community

- **Join our WhatsApp Community**: [https://chat.whatsapp.com/IipGdNeCoy01MhQAO2he4b?mode=gi_t](https://chat.whatsapp.com/IipGdNeCoy01MhQAO2he4b?mode=gi_t)
- For questions or support, please reach out to the AU GLUG community through the website's contact form

---

<div align="center">

**AU GLUG - Building Tomorrow with Open Source and Artificial Intelligence**

[Join Our Community](https://auglug-git.vercel.app/join) • [View Source](https://gitlab.com/dharun-web/au-glug-website) • [Report Bug](https://gitlab.com/dharun-web/au-glug-website/issues)

</div>