# Rishabh Bhagchandani — Portfolio

A modern, responsive single-page portfolio built with **React**, **TypeScript**, and **Tailwind CSS**, powered by **Vite**. This project showcases a professional portfolio with zero backend dependencies, no API keys, and no paid services required.

## 🚀 Live Demo

Visit your portfolio: **[https://sweet-taffy-8a30d1.netlify.app/](https://sweet-taffy-8a30d1.netlify.app/)**

## ✨ Key Features

- **Fast & Lightweight**: Built with Vite for instant development and optimized production builds
- **Fully Responsive**: Mobile-first design that works seamlessly across all devices
- **Interactive UI**: Smooth animations, accessible tabs, and intuitive navigation
- **Easy Customization**: Simple configuration through a single `portfolio.ts` file
- **No Backend Required**: Static site hosting on Vercel, Netlify, or GitHub Pages
- **SEO Friendly**: Semantic HTML and proper metadata support
- **Dark/Light Mode Ready**: Theme tokens for easy customization

## 🎯 What This Portfolio Includes

- **Profile Section**: Display your GitHub, LinkedIn, email, and resume
- **Major Projects**: Showcase 5+ key projects with repository and demo links
- **Mini Projects**: Filter and display up to 12 projects by category (AI/Python, Web Dev, Hackathons, etc.)
- **Smooth Animations**: Scroll-triggered animations for engaging visual experience
- **Mobile Navigation**: Hamburger menu with keyboard support (Escape to close)
- **Tab Navigation**: Arrow keys to switch between sections

## 🏃 Run Locally

Install **Node.js 22.13** or newer, then:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. For production:

```bash
npm run build
npm run preview
```

Upload `dist/` to any static host (Vercel, Netlify, GitHub Pages, etc.).

For Netlify/Vercel: Use build command `npm run build` and output directory `dist`.

## ✏️ Customize Your Portfolio

Edit **src/data/portfolio.ts**:

- `profile.githubUsername`: GitHub username (default: Rishabh11122001)
- `profile.linkedinUrl`: Your LinkedIn profile URL
- `profile.email`: Public email address
- `profile.resumeUrl`: Link to your resume (place PDF in `public/resume.pdf`, then set `./resume.pdf`)
- **Major Projects**: Add exact GitHub repository and demo URLs
- **Mini Projects**: Define projects with tags for category filtering

Leave URLs empty to show "Soon" placeholders (non-clickable).

## 📁 Project Structure

```
src/
├── App.tsx                    # Main app and section order
├── data/portfolio.ts          # Profile, projects, and links configuration
├── components/
│   ├── portfolio/             # Each section as separate component
│   ├── ui/tabs.tsx           # Accessible Radix/Shadcn tabs
│   └── shared/               # Reusable elements and animations
├── index.css                  # Theme tokens, Tailwind, responsive styles
└── public/
    ├── favicon.svg           # Custom favicon
    └── resume.pdf            # Your resume (optional)
```

See **CODE.md** for full source documentation and **DESIGN.md** for design decisions.

## 💡 Built With

- **React** + **TypeScript**: Type-safe component development
- **Vite**: Lightning-fast build tool
- **Tailwind CSS**: Utility-first styling
- **Radix UI / Shadcn**: Accessible component primitives
- **HTML/CSS**: Modern semantic markup

## 📊 Repository Stats

- **HTML**: 93.6%
- **TypeScript**: 3.9%
- **CSS**: 2.5%

---

**Ready to use?** Clone this repo, customize `src/data/portfolio.ts` with your information, and deploy to your favorite static host!
