# Shubham Portfolio

A modern, responsive personal portfolio website built with React, Tailwind CSS (v4), and Framer Motion.

## Features

- **Modern UI/UX**: Aurora mesh gradients, glassmorphism, and smooth animations.
- **Responsive Layout**: Sidebar navigation on desktop, stacked layout on mobile.
- **Components**:
  - `Sidebar`: Sticky navigation with profile and social links.
  - `Hero`: Eye-catching landing section.
  - `About`: Brief professional bio.
  - `Skills`: Responsive grid of tech stack badges.
  - `Projects`: Card-based showcase with GitHub/Live links.
  - `Resume`: Visual timeline of education and experience.
  - `Contact`: Easy-to-use contact cards.

## Tech Stack

- **Framework**: React + Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Scrolling**: React Scroll

## Project Structure

```
shubham-portfolio/
│
├── public/
│   └── favicon.svg
│
├── src/
│   ├── assets/
│   │   └── profile.jpg
│   │
│   ├── components/
│   │   ├── Sidebar.jsx   <-- Replaces Navbar
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Resume.jsx    <-- New Component
│   │   └── Contact.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Locally**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

