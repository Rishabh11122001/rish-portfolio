# Rishabh Bhagchandani — data portfolio

A single-page React + TypeScript + Tailwind CSS portfolio with a Vite build. No backend, API keys or paid service required.

## Run locally

Install Node.js 22.13 or newer, unzip this folder, then open a terminal inside it:

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Production build:

```bash
npm run build
npm run preview
```

Upload `dist/` to a static host. Vercel/Netlify: build command `npm run build`, output directory `dist`. Relative Vite base also supports GitHub Pages subfolder hosting.

## Add your links

Edit **src/data/portfolio.ts**:

- `profile.githubUsername`: default Rishabh11122001; replace if needed.
- `profile.linkedinUrl`: your supplied LinkedIn URL is configured.
- `profile.email`: public email; enables email links and Say hello mailto button.
- `profile.resumeUrl`: put the PDF in `public/resume.pdf`, then set `./resume.pdf`.
- Each major project's `github` and `demo`: exact repository and frontend demo URLs.

Empty URLs visibly show Soon and are not clickable. No nonexistent PDF or invented URL is presented as working. Five major-project repository URLs and three README-sourced demo URLs are supplied. Spice Garden still needs a public repository/demo URL. The Actor Biography mini-project links to Informative-Page. Resume downloads work best with a same-origin file; remote hosts control their own downloads.

## Structure

- `src/App.tsx`: section order.
- `src/data/portfolio.ts`: profile links, major projects, mini projects.
- `src/components/portfolio/`: a separate file for each section plus shared elements and scroll animation.
- `src/components/ui/tabs.tsx`: accessible Radix/Shadcn tabs.
- `src/index.css`: theme tokens, Tailwind import and responsive styling.
- `public/favicon.svg`: initials favicon; put your resume PDF here too.
- `CODE.md`: full source, file by file, for reading or copying.
- `DESIGN.md`: visual decisions.

## Behaviour and content

Responsive grids; mobile navigation with Escape dismissal; active sections; 12 mini projects filtered with React state: All 12, AI/Python 6, Web Dev 4, Hackathon 2. Arrow keys switch tabs. Reduced motion, keyboard focus and skip link are included. Inter loads from Google Fonts with a system fallback.

Only supplied metrics are used. No fabricated accuracy, performance or client numbers. Teaching Assistant dates, courses and student counts were not supplied and are omitted. Reference: https://dhruvi-05.github.io/my_portfolio/ for section organisation. The name-first hero and expertise columns also draw on https://adi-1805.github.io/_Portfolio_/. None of the reference owner's qualifications or contact details were copied.
