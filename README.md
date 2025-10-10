# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing the work and skills of an aspiring software developer.

## Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Elements**: Smooth scrolling, hover effects, and animations
- **Project Showcase**: Featured projects with filtering capabilities
- **Skills Display**: Interactive skill bars with technology icons
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Vite for fast development and production builds

## Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **CSS3** - Custom CSS with CSS Grid and Flexbox
- **React Icons** - Beautiful icons for UI elements
- **ES6+** - Modern JavaScript features

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Navigation header
│   ├── Hero.jsx            # Hero section with introduction
│   ├── About.jsx           # About section with stats
│   ├── Skills.jsx          # Skills and technologies
│   ├── Projects.jsx        # Project showcase
│   ├── Contact.jsx         # Contact form and information
│   ├── Footer.jsx          # Footer with links
│   └── *.css               # Component-specific styles
├── App.jsx                 # Main app component
├── main.jsx               # App entry point
└── index.css              # Global styles
```

## Customization

### Personal Information

Update the following files with your personal information:

- `src/components/Hero.jsx` - Name, title, and description
- `src/components/About.jsx` - About text and stats
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer information

### Projects

Add your projects in `src/components/Projects.jsx`:

```javascript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    github: 'https://github.com/yourusername/project',
    live: 'https://yourproject.com',
    featured: true
  }
  // Add more projects...
]
```

### Skills

Update your skills in `src/components/Skills.jsx`:

```javascript
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', icon: <FaReact />, level: 85, color: '#61dafb' }
      // Add more skills...
    ]
  }
]
```

### Styling

The website uses CSS custom properties for easy theming. Update the color scheme in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --accent-color: #f59e0b;
  /* Update other colors... */
}
```

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Configure custom domain if needed

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```
3. Run: `npm run deploy`

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For questions or suggestions, please open an issue or contact me directly.

---

Made with ❤️ and lots of coffee ☕