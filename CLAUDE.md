# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React + Vite. It showcases projects, provides contact functionality via Formspree, and uses Framer Motion for animations and Lottie for animated icons.

## Essential Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview

# Linting
npm run lint
```

## Architecture

### Component Structure

The app follows a numbered component organization pattern:
- `1-header/` - Navigation header
- `2-hero/` - Hero section with intro
- `3-main/` - Projects portfolio with category filtering
- `4-contact/` - Contact form (Formspree integration)
- `5-footer/` - Footer section

Each component has its own directory with a `.jsx` file and corresponding `.css` file.

### Key Files

- `src/App.jsx` - Main app component that assembles all sections and handles scroll-to-top button
- `src/components/3-main/myProjects.js` - Project data array that populates the portfolio grid
- `src/animation/` - Lottie JSON animation files (dev.json, contact.json, done.json)
- `public/images/` - Project screenshots and images

### Project Data Structure

Projects in `myProjects.js` follow this schema:
```javascript
{
  projectTitle: string,
  category: string[], // ["react", "css", "js"]
  imgPath: string,    // Path relative to public/
  dateils: string,    // Project description
  link: string,       // Live demo URL
  github: string      // GitHub repo URL
}
```

### Contact Form

The contact form uses Formspree with form ID `xzzpookd` (hardcoded in Contact.jsx:8). When modifying the contact functionality, this ID must remain or be updated with a new Formspree endpoint.

### Animations

- Framer Motion handles project card animations with spring physics
- Lottie animations are used for visual feedback (success state, contact animation)
- AnimatePresence wraps project cards for smooth enter/exit transitions

## Tech Stack

- **Build Tool**: Vite 4.5.3
- **Framework**: React 18.2.0
- **Animations**: Framer Motion 10.18.0, Lottie React 2.4.0
- **Forms**: Formspree React 2.5.1
- **Linting**: ESLint with React plugins
