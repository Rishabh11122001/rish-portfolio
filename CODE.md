# Rishabh Bhagchandani portfolio — full source, file by file

See README.md for setup and LINKS.md for link verification.

## index.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0d0f13" />
    <meta
      name="description"
      content="Rishabh Bhagchandani, MCA student at IIIT Bhopal, focused on data analytics, data science and AI/ML."
    />
    <link rel="icon" type="image/svg+xml" href="./favicon.svg" />
    <title>Rishabh Bhagchandani | Data Analyst &amp; AI/ML Enthusiast</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## package.json

```json
{
  "name": "rish-portfolio",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=22.13.0"
  },
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "19.2.6",
    "react-dom": "19.2.6",
    "lucide-react": "^1.31.0",
    "radix-ui": "^1.6.7",
    "class-variance-authority": "0.7.1",
    "clsx": "2.1.1",
    "tailwind-merge": "3.6.0"
  },
  "devDependencies": {
    "@types/react": "19.2.14",
    "@types/react-dom": "19.2.3",
    "@types/node": "22.19.19",
    "@vitejs/plugin-react": "6.0.2",
    "vite": "8.0.13",
    "typescript": "5.9.3",
    "tailwindcss": "4.2.1",
    "@tailwindcss/postcss": "4.2.1",
    "tw-animate-css": "^1.4.0"
  }
}
```

## tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["DOM", "DOM.Iterable", "ES2021"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "Bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true,
    "types": ["vite/client", "node"],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src", "vite.config.ts"]
}
```

## vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
});
```

## postcss.config.js

```javascript
export default { plugins: { "@tailwindcss/postcss": {} } };
```

## src/App.tsx

```tsx
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import MiniProjects from "@/components/portfolio/MiniProjects";
import Achievements from "@/components/portfolio/Achievements";
import Contact from "@/components/portfolio/Contact";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <MiniProjects />
        <Achievements />
        <Contact />
      </main>
      <ScrollReveal />
    </>
  );
}
```

## src/components/portfolio/About.tsx

```tsx
import { Icon, SectionHeading } from "./Shared";
export default function About() {
  return (
    <section id="about" className="section container reveal">
      <SectionHeading
        label="A LITTLE ABOUT ME"
        title="A curious mind. An analytical approach."
      />
      <div className="about-grid">
        <div className="about-copy">
          <p>
            I&apos;m Rishabh Bhagchandani, an MCA (Information Technology)
            student at <strong>IIIT Bhopal</strong>, currently in my 4th
            semester with a <strong>CGPA of 9.55</strong>.
          </p>
          <p>
            I&apos;m pursuing opportunities in data analysis and data science.
            My projects combine Python, SQL, exploratory analysis, machine
            learning and Power BI to turn raw data into useful insights.
          </p>
          <p>
            Along the way, I&apos;ve worked as a Teaching Assistant and
            participated in <strong>Smart India Hackathon 2024 and 2025</strong>
            . I also build AI-powered tools and web applications that make
            analytical work easier to use.
          </p>
        </div>
        <aside className="education-card">
          <div className="education-top">
            <span className="icon-box">
              <Icon name="graduation" size={27} />
            </span>
            <span className="eyebrow">EDUCATION</span>
          </div>
          <h3>IIIT Bhopal</h3>
          <p>Master of Computer Applications</p>
          <p className="muted">Information Technology</p>
          <div className="education-footer">
            <span>4th semester</span>
            <span>
              <strong>9.55</strong> CGPA
            </span>
          </div>
        </aside>
      </div>
    </section>
  );
}
```

## src/components/portfolio/Achievements.tsx

```tsx
import { Icon, SectionHeading } from "./Shared";
const achievements = [
  {
    icon: "trophy",
    value: "2024 & 2025",
    label: "Smart India Hackathon",
    detail: "Participant · team submissions",
  },
  {
    icon: "graduation",
    value: "9.55",
    label: "Academic CGPA",
    detail: "MCA · IIIT Bhopal",
  },
  {
    icon: "book",
    value: "Teaching Assistant",
    label: "Learning through sharing",
    detail: "Academic teaching experience",
  },
  {
    icon: "layers",
    value: "6 projects",
    label: "Built and shipped",
    detail: "AI/ML · Full stack · Analytics",
  },
];
export default function Achievements() {
  return (
    <section id="achievements" className="section container reveal">
      <SectionHeading label="MILESTONES" title="Progress along the way." />
      <div className="achievements-grid">
        {achievements.map((item) => (
          <article className="achievement" key={item.label}>
            <Icon name={item.icon} size={25} />
            <h3>{item.value}</h3>
            <p>{item.label}</p>
            <span>{item.detail}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
```

## src/components/portfolio/Contact.tsx

```tsx
import { profile } from "@/data/portfolio";
import { ExternalLink } from "./Shared";
export default function Contact() {
  return (
    <>
      <section
        id="contact"
        className="section contact-section container reveal"
      >
        <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
        <h2>
          Let&apos;s <span>connect.</span>
        </h2>
        <p>
          Open to data analyst and data science opportunities, AI/ML
          collaborations and conversations about making data useful.
        </p>
        <div className="contact-actions">
          <ExternalLink
            href={profile.email ? `mailto:${profile.email}` : ""}
            className="button button-primary"
            icon="mail"
          >
            Say hello
          </ExternalLink>
          <div className="social-links">
            <ExternalLink
              href={profile.email ? `mailto:${profile.email}` : ""}
              icon="mail"
            >
              {profile.email || "Email"}
            </ExternalLink>
            <ExternalLink
              href={
                profile.githubUsername
                  ? `https://github.com/${profile.githubUsername}`
                  : ""
              }
              icon="github"
            >
              GitHub
            </ExternalLink>
            <ExternalLink href={profile.linkedinUrl} icon="linkedin">
              LinkedIn
            </ExternalLink>
          </div>
        </div>
      </section>
      <footer className="site-footer container">
        <a href="#home" className="wordmark">
          Rishabh <span>Bhagchandani</span>
        </a>
        <p>
          © {new Date().getFullYear()} Rishabh Bhagchandani. Built with React
          &amp; Tailwind CSS.
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
```

## src/components/portfolio/Experience.tsx

```tsx
import { Icon, SectionHeading } from "./Shared";
export default function Experience() {
  return (
    <section id="experience" className="section container reveal">
      <SectionHeading label="EXPERIENCE" title="Learning. Building. Sharing." />
      <div className="experience-card">
        <div className="experience-title">
          <Icon name="book" size={28} />
          <div>
            <h3>Teaching Assistant</h3>
            <span className="muted">Academic experience</span>
          </div>
        </div>
        <p>
          Worked as a Teaching Assistant alongside my studies, bringing a
          learner&apos;s perspective to teaching and technical problem-solving.
        </p>
      </div>
    </section>
  );
}
```

## src/components/portfolio/Hero.tsx

```tsx
import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ExternalLink } from "./Shared";
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-content">
        <div className="hero-socials">
          <ExternalLink
            href={`https://github.com/${profile.githubUsername}`}
            icon="github"
          >
            GitHub
          </ExternalLink>
          <ExternalLink href={profile.linkedinUrl} icon="linkedin">
            LinkedIn
          </ExternalLink>
        </div>
        <p className="hero-greeting">
          <span className="greeting-line" />
          Hi, I&apos;m
        </p>
        <h1 className="hero-name">
          Rishabh
          <br />
          <span className="accent-text">Bhagchandani</span>
          <span className="period">.</span>
        </h1>
        <p className="hero-position">
          Data Analyst <span>|</span> Aspiring Data Scientist <span>|</span>{" "}
          AI/ML Enthusiast
        </p>
        <p className="hero-description">
          Turning data into clear insights, predictive models and AI-powered
          tools with Python, SQL and Power BI.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View Projects <ArrowRight size={18} />
          </a>
          <ExternalLink
            href={profile.resumeUrl}
            className="button button-outline"
            icon="download"
            download
          >
            Download Resume
          </ExternalLink>
        </div>
      </div>
      <div className="hero-bottom">
        <p>Explore the data. Understand the story.</p>
        <a href="#about">
          More about me <ArrowDown size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
```

## src/components/portfolio/MiniProjects.tsx

```tsx
"use client";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { categories, miniProjects } from "@/data/portfolio";
import { Icon, SectionHeading, Tags, ExternalLink } from "./Shared";
export default function MiniProjects() {
  const [category, setCategory] = useState("All");
  return (
    <section id="mini-projects" className="section container reveal">
      <SectionHeading
        label="THE EXPLORATION LAB"
        title="Small builds. New possibilities."
        description="Experiments, useful tools and things built together."
      />
      <Tabs value={category} onValueChange={setCategory} className="mini-tabs">
        <TabsList className="filter-tabs" aria-label="Filter mini projects">
          {categories.map((item) => (
            <TabsTrigger value={item} key={item} className="filter-tab">
              {item}
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((item) => {
          const filtered = miniProjects.filter(
            (project) => item === "All" || project.category === item,
          );
          return (
            <TabsContent value={item} key={item}>
              <p className="filter-count" role="status">
                {filtered.length} projects
              </p>
              <div className="mini-grid">
                {filtered.map((project) => (
                  <article className="mini-card" key={project.title}>
                    <span className="mini-icon">
                      <Icon name={project.icon} size={24} />
                    </span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <Tags values={project.tags} />
                    {project.github && (
                      <div className="mini-project-link">
                        <ExternalLink href={project.github} icon="github">
                          GitHub
                        </ExternalLink>
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </section>
  );
}
```

## src/components/portfolio/Navbar.tsx

```tsx
"use client";
import { useEffect, useState, useRef } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navigation, sectionId } from "@/data/portfolio";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries)
          if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-15% 0px -60% 0px" },
    );
    navigation.forEach((label) => {
      const el = document.getElementById(sectionId(label));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const resize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("keydown", close);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", close);
      window.removeEventListener("resize", resize);
    };
  }, [open]);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="Rishabh Bhagchandani home"
        >
          Rishabh <span>Bhagchandani</span>
        </a>
        <button
          ref={buttonRef}
          className="menu-toggle"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "navigation is-open" : "navigation"}
        >
          {navigation.map((label) => (
            <a
              key={label}
              href={`#${sectionId(label)}`}
              aria-current={
                active === sectionId(label) ? "location" : undefined
              }
              onClick={() => setOpen(false)}
            >
              {label}
              {label === "Contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
```

## src/components/portfolio/Projects.tsx

```tsx
import { projects } from "@/data/portfolio";
import { Icon, SectionHeading, Tags, ExternalLink } from "./Shared";
export default function Projects() {
  return (
    <section id="projects" className="section container reveal">
      <div className="heading-with-count">
        <SectionHeading
          label="SELECTED WORK"
          title="Data, models & meaningful outcomes."
          description="Selected work in data analytics, machine learning and AI, supported by hands-on application development."
        />
        <span className="count-label">6 PROJECTS</span>
      </div>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-top">
              <span className="icon-box">
                <Icon name={project.icon} size={28} />
              </span>
              <div className="project-metric">
                <strong>{project.metric}</strong>
                <span>{project.metricLabel}</span>
              </div>
            </div>
            <span className="project-category">{project.category}</span>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-bullets">
              {project.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <Tags values={project.tags} />
            <div className="project-links">
              <ExternalLink href={project.github} icon="github">
                GitHub
              </ExternalLink>
              <ExternalLink href={project.demo}>Live Demo</ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
```

## src/components/portfolio/ScrollReveal.tsx

```tsx
"use client";
import { useEffect } from "react";
export default function ScrollReveal() {
  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    )
      return;
    const elements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.03 },
    );
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight)
        element.classList.add("will-reveal");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => element.classList.remove("will-reveal"));
    };
  }, []);
  return null;
}
```

## src/components/portfolio/Shared.tsx

```tsx
import type { ReactNode } from "react";
import {
  ArrowUpRight,
  BrainCircuit,
  ChartNoAxesCombined,
  Utensils,
  Sparkles,
  Users,
  Database,
  ScanFace,
  Hand,
  Volume2,
  Mic,
  MessageSquare,
  Image,
  Timer,
  Code2,
  Film,
  CalendarDays,
  GraduationCap,
  Trophy,
  BookOpen,
  Layers,
  Braces,
  Server,
  Atom,
  Wind,
  Table2,
  Workflow,
  Binary,
  Zap,
  BarChart3,
  AppWindow,
  GitFork,
  Link,
  Mail,
  Download,
} from "lucide-react";
const icons = {
  brain: BrainCircuit,
  chart: ChartNoAxesCombined,
  restaurant: Utensils,
  sparkles: Sparkles,
  users: Users,
  database: Database,
  scan: ScanFace,
  hand: Hand,
  volume: Volume2,
  mic: Mic,
  message: MessageSquare,
  image: Image,
  timer: Timer,
  code: Code2,
  film: Film,
  calendar: CalendarDays,
  graduation: GraduationCap,
  trophy: Trophy,
  book: BookOpen,
  layers: Layers,
  braces: Braces,
  server: Server,
  atom: Atom,
  wind: Wind,
  table: Table2,
  workflow: Workflow,
  binary: Binary,
  zap: Zap,
  bars: BarChart3,
  app: AppWindow,
  github: GitFork,
  linkedin: Link,
  mail: Mail,
  download: Download,
};
export function Icon({ name, size = 22 }: { name: string; size?: number }) {
  const Component = icons[name as keyof typeof icons] || Code2;
  return <Component size={size} strokeWidth={1.6} aria-hidden="true" />;
}
export function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="section-heading">
      <span className="eyebrow">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}
export function Tags({ values }: { values: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {values.map((value) => (
        <li key={value}>{value}</li>
      ))}
    </ul>
  );
}
export function ExternalLink({
  href,
  children,
  className = "",
  icon,
  download = false,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  icon?: string;
  download?: boolean;
}) {
  if (!href)
    return (
      <span
        className={`unavailable ${className}`}
        aria-disabled="true"
        title="Link not added yet"
      >
        {icon && <Icon name={icon} size={17} />}
        {children}
        <span className="soon">Soon</span>
      </span>
    );
  const external = /^https?:/.test(href);
  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      download={download || undefined}
    >
      {icon && <Icon name={icon} size={17} />}
      {children}
      {!download && <ArrowUpRight size={16} aria-hidden="true" />}
    </a>
  );
}
```

## src/components/portfolio/Skills.tsx

```tsx
import { Icon, SectionHeading } from "./Shared";
const groups = [
  {
    name: "Data Science & Analytics",
    description:
      "Querying data, exploring patterns and communicating insights through clear visualisations.",
    icon: "chart",
    skills: [
      ["SQL", "database"],
      ["PostgreSQL", "database"],
      ["Pandas", "table"],
      ["Power BI", "bars"],
      ["Excel", "table"],
      ["Supabase", "zap"],
    ],
  },
  {
    name: "Machine Learning & AI",
    description:
      "Building predictive models and practical AI tools, from experimentation to an interactive application.",
    icon: "brain",
    skills: [
      ["Python", "code"],
      ["Scikit-learn", "workflow"],
      ["Gemini / Groq APIs", "sparkles"],
      ["Streamlit", "app"],
    ],
  },
  {
    name: "Application Development",
    description:
      "Bringing analytical work to users through responsive interfaces and connected applications.",
    icon: "code",
    skills: [
      ["React", "atom"],
      ["TypeScript", "braces"],
      ["JavaScript", "braces"],
      ["Node.js / Express", "server"],
      ["Tailwind CSS", "wind"],
    ],
  },
];
export default function Skills() {
  return (
    <section id="skills" className="section skills-section container reveal">
      <SectionHeading
        label="EXPERTISE & TOOLKIT"
        title="From raw data to useful decisions."
      />
      <div className="skills-groups">
        {groups.map((group) => (
          <div className="skill-group" key={group.name}>
            <span className="expertise-icon">
              <Icon name={group.icon} size={32} />
            </span>
            <h3>{group.name}</h3>
            <p className="expertise-description">{group.description}</p>
            <div className="skills-grid">
              {group.skills.map(([name, icon]) => (
                <div className="skill" key={name}>
                  <Icon name={icon} size={26} />
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

## src/components/ui/tabs.tsx

```tsx
"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Tabs as TabsPrimitive } from "radix-ui";

import { cn } from "@/lib/utils";

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className,
      )}
      {...props}
    />
  );
}

const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  );
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent",
        "data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants };
```

## src/data/portfolio.ts

```typescript
// PERSONAL LINKS: plug in your GitHub username, LinkedIn URL, email and resume PDF.
// Empty URLs intentionally render as unavailable, never as broken '#' links.
export const profile = {
  name: "Rishabh Bhagchandani",
  githubUsername: "Rishabh11122001", // Replace if needed.
  linkedinUrl: "https://www.linkedin.com/in/rishabh-bhagchandani-1bab46258/", // e.g. https://www.linkedin.com/in/YOUR_USERNAME/
  email: "", // Your public contact email.
  resumeUrl: "", // Put resume.pdf in public/ and set this to '/resume.pdf'.
};
export const navigation = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Mini Projects",
  "Achievements",
  "Contact",
];
export const sectionId = (label: string) =>
  label.toLowerCase().replaceAll(" ", "-");
export type Project = {
  title: string;
  category: string;
  icon: string;
  description: string;
  bullets: string[];
  tags: string[];
  github: string;
  demo: string;
  metric: string;
  metricLabel: string;
};
// PROJECT LINKS: plug in the exact GitHub repository and live demo URLs below.
// Never put API keys or private credentials in this frontend file.
export const projects: Project[] = [
  {
    title: "RecallAI",
    category: "AI STUDY ASSISTANT",
    icon: "brain",
    description:
      "Free-form notes become structured flashcards and quizzes, ready for your next study session.",
    bullets: [
      "2 study formats powered by an Express + Groq backend and stateful React frontend.",
      "Zod validates untrusted LLM output; handles malformed, empty and timed-out responses.",
      "AbortController + request IDs prevent stale responses. Deployed on Render.",
    ],
    tags: ["React", "TypeScript", "Express", "Zod", "Groq"],
    github: "https://github.com/Rishabh11122001/recall-ai",
    demo: "https://recall-ai-vzr9.onrender.com",
    metric: "2",
    metricLabel: "study formats",
  },
  {
    title: "PulseBoard",
    category: "PERFORMANCE & ANALYTICS",
    icon: "chart",
    description:
      "A responsive analytics workspace for exploring large synthetic e-commerce datasets entirely in the browser.",
    bullets: [
      "Handles 50K–250K synthetic transactions with live KPIs and chart-driven cross-filtering.",
      "Single-pass filtering and aggregation, memoization and debounced search.",
      "Virtualized rows keep large transaction tables manageable.",
    ],
    tags: ["React", "TypeScript", "Recharts", "Vite"],
    github:
      "https://github.com/Rishabh11122001/pulseboard-performance-dashboard",
    demo: "https://pulseboard-performance-dashboard.vercel.app",
    metric: "250K",
    metricLabel: "transactions",
  },
  {
    title: "Spice Garden",
    category: "CLIENT PROJECT · FULL STACK",
    icon: "restaurant",
    description:
      "A restaurant management platform built for a real client and everyday operations.",
    bullets: [
      "GST-aware billing, real-time orders, payment analytics and a kitchen display system.",
      "Socket.io connects order updates; resolved connectivity, CORS and timezone issues.",
      "PostgreSQL/Supabase data layer, deployed across Railway + Vercel.",
    ],
    tags: ["React", "Node.js", "Express", "Supabase", "Socket.io"],
    github: "",
    demo: "",
    metric: "Live",
    metricLabel: "order updates",
  },
  {
    title: "Data Analyst Copilot",
    category: "AI-POWERED DATA ANALYSIS",
    icon: "sparkles",
    description:
      "Ask a question in plain English. Get validated PostgreSQL queries, live data, charts and insights.",
    bullets: [
      "Queries a 99K-order warehouse; visualizes results with Plotly.",
      "Gemini-to-Groq fallback, query timeouts and destructive-SQL blocking.",
      "Validated with 24 automated tests.",
    ],
    tags: ["Python", "PostgreSQL", "Streamlit", "Gemini", "Groq", "Plotly"],
    github: "https://github.com/Rishabh11122001/ai-data-analyst-copilot",
    demo: "https://ai-data-analyst-copilot-9dmnh4izbccbpgpuyur8e2.streamlit.app",
    metric: "24",
    metricLabel: "automated tests",
  },
  {
    title: "Customer Churn Analysis",
    category: "MACHINE LEARNING",
    icon: "users",
    description:
      "Exploring customer behaviour and predicting churn with a reproducible machine-learning workflow.",
    bullets: [
      "Analysed a 2,000-customer synthetic dataset stored in SQLite.",
      "Trained 2 model families: Logistic Regression and Random Forest.",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "SQLite"],
    github:
      "https://github.com/Rishabh11122001/customer-churn-analysis-prediction",
    demo: "",
    metric: "2,000",
    metricLabel: "customers analysed",
  },
  {
    title: "E-Commerce Revenue & Operations",
    category: "BUSINESS INTELLIGENCE",
    icon: "database",
    description:
      "Turning the Olist Brazilian e-commerce dataset into a structured view of revenue and operations.",
    bullets: [
      "Built a PostgreSQL star schema for analytics on the Olist dataset.",
      "Created a Power BI dashboard with DAX measures and Excel analysis.",
    ],
    tags: ["PostgreSQL", "Power BI", "DAX", "Excel"],
    github:
      "https://github.com/Rishabh11122001/ecommerce-revenue-operations-analytics",
    demo: "",
    metric: "Olist",
    metricLabel: "e-commerce data",
  },
];
const projectOrder = [
  "Data Analyst Copilot",
  "Customer Churn Analysis",
  "E-Commerce Revenue & Operations",
  "PulseBoard",
  "RecallAI",
  "Spice Garden",
];
projects.sort(
  (a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title),
);

export const categories = [
  "All",
  "AI / Python",
  "Web Dev",
  "Hackathon",
] as const;
export type Category = (typeof categories)[number];
export const miniProjects: {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  icon: string;
  github?: string;
}[] = [
  {
    title: "Face Detection System",
    description:
      "Live webcam face detection with Haar Cascade and local database storage.",
    tags: ["Python", "OpenCV"],
    category: "AI / Python",
    icon: "scan",
  },
  {
    title: "AI Hand Tracking",
    description:
      "21-point hand landmark detection for gesture-based interaction.",
    tags: ["Python", "MediaPipe", "OpenCV"],
    category: "AI / Python",
    icon: "hand",
  },
  {
    title: "Gesture Volume Control",
    description:
      "Real-time volume control through thumb–index finger distance.",
    tags: ["Python", "MediaPipe", "Pycaw"],
    category: "AI / Python",
    icon: "volume",
  },
  {
    title: "AI Personal Assistant",
    description: "Voice-powered web search, app launches and task automation.",
    tags: ["Python", "SpeechRecognition", "NLP"],
    category: "AI / Python",
    icon: "mic",
  },
  {
    title: "WhatsApp Automation Bot",
    description:
      "Scheduled and bulk messaging using a local recipient database.",
    tags: ["Python", "PyWhatKit"],
    category: "AI / Python",
    icon: "message",
  },
  {
    title: "Facial Inpainting System",
    description:
      "Deep-learning image inpainting to restore or remove facial regions.",
    tags: ["Python", "OpenCV", "Deep Learning"],
    category: "AI / Python",
    icon: "image",
  },
  {
    title: "Alumni Platform",
    description:
      "Networking and mentorship matching for our team’s SIH 2024 submission.",
    tags: ["Team Project", "SIH 2024"],
    category: "Hackathon",
    icon: "users",
  },
  {
    title: "DiagnoMate",
    description:
      "Multilingual healthcare chatbot with WhatsApp/SMS for our SIH 2025 submission.",
    tags: ["Rasa", "Dialogflow", "WhatsApp API"],
    category: "Hackathon",
    icon: "message",
  },
  {
    title: "Countdown Timer",
    description: "Real-time interval updates with Django template integration.",
    tags: ["Django", "JavaScript"],
    category: "Web Dev",
    icon: "timer",
  },
  {
    title: "Python Tutorial Website",
    description:
      "A multi-tab learning interface with 5 programming sections and live code examples.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "Web Dev",
    icon: "code",
  },
  {
    title: "Actor Biography Website",
    github: "https://github.com/Rishabh11122001/Informative-Page",
    description:
      "Responsive Flexbox biography cards, hover effects and movie links.",
    tags: ["HTML5", "CSS3"],
    category: "Web Dev",
    icon: "film",
  },
  {
    title: "Age Calculator",
    description:
      "Birth-date validation and accurate age calculations using Python datetime.",
    tags: ["Django", "Python"],
    category: "Web Dev",
    icon: "calendar",
  },
];
```

## src/index.css

```css
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;450;500;550;600;650;700;750;800&display=swap");
@import "tailwindcss";
@import "tw-animate-css";
:root {
  color-scheme: dark;
  --background: #0d0f13;
  --foreground: #f2f4f8;
  --card: #13171e;
  --card-foreground: #f2f4f8;
  --popover: #13171e;
  --popover-foreground: #f2f4f8;
  --primary: #639bff;
  --primary-foreground: #08121f;
  --secondary: #1a202b;
  --secondary-foreground: #f2f4f8;
  --muted: #171d26;
  --muted-foreground: #a5adbd;
  --accent: #639bff;
  --accent-foreground: #08121f;
  --border: #272e39;
  --input: #272e39;
  --ring: #639bff;
  --radius: 0.75rem;
  --scroll-thumb: #414d61;
  --scroll-hover: #639bff;
  --scroll-track: #0d0f13;
}
@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --font-sans: "Inter", Arial, sans-serif;
}
* {
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: var(--scroll-thumb) var(--scroll-track);
}
*::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
*::-webkit-scrollbar-track {
  background: var(--scroll-track);
}
*::-webkit-scrollbar-thumb {
  background: var(--scroll-thumb);
  border: 2px solid var(--scroll-track);
  border-radius: 8px;
}
*::-webkit-scrollbar-thumb:hover,
*::-webkit-scrollbar-thumb:active {
  background: var(--scroll-hover);
}
html {
  scroll-behavior: smooth;
  scroll-padding-top: 104px;
  scrollbar-gutter: stable;
}
body {
  margin: 0;
  background: var(--background);
  color: var(--foreground);
  font-family: "Inter", Arial, sans-serif;
  font-size: 16px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}
::selection {
  background: var(--primary);
  color: var(--primary-foreground);
}
a {
  color: inherit;
  text-decoration: none;
  transition:
    color 0.2s,
    background 0.2s,
    border-color 0.2s,
    transform 0.2s;
  cursor: pointer;
}
button {
  font: inherit;
  cursor: pointer;
}
a:focus-visible,
button:focus-visible,
[role="tabpanel"]:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 5px;
}
button:disabled,
[aria-disabled="true"] {
  cursor: default;
}
h1,
h2,
h3,
p {
  margin: 0;
}
h1,
h2,
h3 {
  line-height: 1.2;
}
ul {
  margin: 0;
  padding: 0;
}
.container {
  max-width: 1240px;
  padding-inline: 40px;
  margin-inline: auto;
}
.accent-text,
.wordmark span {
  color: var(--primary);
}
.muted {
  color: var(--muted-foreground);
}
.skip-link {
  position: fixed;
  z-index: 100;
  top: -100px;
  left: 16px;
  padding: 12px 20px;
  background: var(--primary);
  color: var(--primary-foreground);
  border-radius: 6px;
}
.skip-link:focus {
  top: 12px;
}
.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgb(13 15 19 / 94%);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--border);
}
.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 82px;
  gap: 28px;
}
.wordmark {
  font-size: 30px;
  font-weight: 800;
  letter-spacing: -1.8px;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 27px;
}
.navigation a {
  font-size: 14px;
  font-weight: 500;
  color: var(--muted-foreground);
  display: flex;
  align-items: center;
  gap: 6px;
  min-height: 44px;
}
.navigation a:hover,
.navigation a[aria-current] {
  color: var(--primary);
}
.navigation a:last-child {
  color: var(--foreground);
  border: 1px solid var(--border);
  border-radius: 7px;
  padding: 0 14px;
}
.navigation a:last-child:hover {
  border-color: var(--primary);
  color: var(--primary);
}
.menu-toggle {
  display: none;
}
.hero {
  padding-top: 100px;
}
.hero-content {
  padding-bottom: 88px;
}
.hero-greeting {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 26px;
}
.greeting-line {
  width: 30px;
  height: 2px;
  background: var(--primary);
}
.hero-role {
  font-size: clamp(20px, 2.6vw, 30px);
  font-weight: 450;
  letter-spacing: -0.8px;
  display: block;
  margin-bottom: 15px;
  color: var(--muted-foreground);
}
.hero-role span {
  color: #566071;
  padding-left: 8px;
}
.hero-main {
  display: block;
  font-size: clamp(45px, 6.6vw, 82px);
  font-weight: 650;
  letter-spacing: -4px;
  line-height: 1.1;
}
.period {
  color: var(--foreground);
}
.hero-description {
  font-size: 18px;
  max-width: 600px;
  color: var(--muted-foreground);
  margin: 27px 0 31px;
  line-height: 1.8;
}
.hero-actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 50px;
  border: 1px solid transparent;
  border-radius: 7px;
  padding: 12px 21px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.5;
}
.button-primary {
  color: var(--primary-foreground);
  background: var(--primary);
}
.button-primary:hover {
  filter: brightness(1.09);
  transform: translateY(-2px);
}
.button-outline {
  border-color: #3b4c65;
  color: var(--foreground);
  background: transparent;
}
.button-outline:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-2px);
}
.button:active {
  transform: translateY(0);
}
.button.unavailable {
  color: var(--muted-foreground);
  background: transparent;
  border-color: var(--border);
  filter: none;
  transform: none;
}
.soon {
  font-size: 11px;
  letter-spacing: 0.03em;
  font-weight: 500;
  border: 1px solid var(--border);
  padding: 1px 5px;
  border-radius: 4px;
  color: var(--muted-foreground);
}
.hero-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px 0;
  border-top: 1px solid var(--border);
  color: var(--muted-foreground);
  font-size: 13px;
}
.hero-bottom a {
  display: flex;
  align-items: center;
  gap: 12px;
}
.hero-bottom a:hover {
  color: var(--primary);
}
.section {
  padding-top: 96px;
  padding-bottom: 10px;
  scroll-margin-top: 15px;
}
.section-heading {
  margin-bottom: 36px;
}
.eyebrow {
  color: var(--primary);
  font-size: 12px;
  letter-spacing: 0.17em;
  font-weight: 600;
}
.section-heading h2 {
  font-size: clamp(28px, 3vw, 38px);
  letter-spacing: -1.2px;
  font-weight: 600;
  margin-top: 12px;
}
.section-heading p {
  color: var(--muted-foreground);
  margin-top: 14px;
  max-width: 660px;
}
.about-grid {
  display: grid;
  grid-template-columns: 1.45fr 1fr;
  gap: 80px;
  align-items: start;
}
.about-copy {
  color: var(--muted-foreground);
}
.about-copy p + p {
  margin-top: 18px;
}
.about-copy strong {
  font-weight: 550;
  color: var(--foreground);
}
.education-card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 28px;
}
.education-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 23px;
}
.icon-box {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--primary);
  background: #639bff0b;
  border: 1px solid #639bff24;
  border-radius: 10px;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
}
.education-card h3 {
  font-size: 23px;
  margin-bottom: 8px;
  letter-spacing: -0.5px;
}
.education-card p {
  font-size: 14px;
}
.education-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid var(--border);
  padding-top: 20px;
  margin-top: 24px;
  font-size: 13px;
  color: var(--muted-foreground);
  gap: 15px;
}
.education-footer strong {
  color: var(--primary);
  font-size: 23px;
  padding-right: 5px;
  font-weight: 600;
}
.skills-groups {
  display: grid;
  grid-template-columns: 1fr 1fr 1.55fr;
  gap: 32px;
}
.skill-group h3 {
  font-size: 14px;
  font-weight: 500;
  color: var(--muted-foreground);
  margin-bottom: 18px;
}
.skills-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px;
}
.skill {
  min-height: 105px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--card);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 14px 7px;
  text-align: center;
}
.skill svg {
  color: var(--primary);
}
.skill span {
  font-size: 12px;
  line-height: 1.4;
}
.skill:hover {
  border-color: #639bff60;
}
.experience-card {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 60px;
  padding: 30px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  align-items: center;
}
.experience-title {
  display: flex;
  align-items: center;
  gap: 20px;
}
.experience-title > svg {
  color: var(--primary);
}
.experience-title h3 {
  font-size: 21px;
  margin-bottom: 5px;
}
.experience-title span {
  font-size: 14px;
}
.experience-card > p {
  color: var(--muted-foreground);
  font-size: 15px;
}
.heading-with-count {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
}
.count-label {
  font-size: 12px;
  letter-spacing: 0.1em;
  color: var(--muted-foreground);
  margin-top: 35px;
  white-space: nowrap;
}
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}
.project-card {
  padding: 30px;
  border: 1px solid var(--border);
  background: var(--card);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s,
    border-color 0.2s;
}
.project-card:hover {
  transform: translateY(-4px);
  border-color: #639bff66;
}
.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 27px;
}
.project-metric {
  text-align: right;
  display: flex;
  flex-direction: column;
}
.project-metric strong {
  font-size: 26px;
  color: var(--foreground);
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 1.2;
}
.project-metric span {
  color: var(--muted-foreground);
  font-size: 12px;
}
.project-category {
  color: var(--primary);
  font-size: 11px;
  letter-spacing: 0.1em;
  font-weight: 500;
  margin-bottom: 10px;
}
.project-card h3 {
  font-size: 24px;
  letter-spacing: -0.6px;
  margin-bottom: 15px;
}
.project-description {
  color: var(--muted-foreground);
  font-size: 15px;
  line-height: 1.75;
  margin-bottom: 19px;
}
.project-bullets {
  list-style: none;
  margin-bottom: 24px;
}
.project-bullets li {
  position: relative;
  padding-left: 15px;
  font-size: 14px;
  color: #b8c0cf;
  line-height: 1.7;
}
.project-bullets li + li {
  margin-top: 9px;
}
.project-bullets li:before {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--primary);
  position: absolute;
  top: 10px;
  left: 0;
}
.tags {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: auto;
}
.tags li {
  color: #b9c3d4;
  font-size: 12px;
  line-height: 1.6;
  border: 1px solid var(--border);
  background: #19202a;
  padding: 3px 9px;
  border-radius: 4px;
}
.project-links {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
  padding-top: 20px;
  border-top: 1px solid var(--border);
  margin-top: 22px;
}
.project-links > *,
.social-links > * {
  display: inline-flex;
  gap: 7px;
  align-items: center;
  font-size: 13px;
}
.project-links a {
  color: var(--primary);
}
.project-links a:hover,
.social-links a:hover {
  color: var(--primary);
  text-decoration: underline;
  text-underline-offset: 4px;
}
.unavailable {
  color: #909aab;
}
.mini-tabs .filter-tabs {
  display: flex;
  max-width: 100%;
  gap: 6px;
  height: auto;
  padding: 5px;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.mini-tabs .filter-tab {
  padding: 10px 18px;
  min-height: 44px;
  font-size: 14px;
  border-radius: 5px;
  color: var(--muted-foreground);
}
.mini-tabs .filter-tab[data-state="active"] {
  color: var(--primary);
  background: #639bff18;
}
.mini-tabs .filter-tab:hover {
  color: var(--foreground);
}
.filter-count {
  font-size: 12px;
  color: var(--muted-foreground);
  margin: 12px 0 18px;
}
.mini-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 17px;
}
.mini-card {
  border: 1px solid var(--border);
  border-radius: 10px;
  background: var(--card);
  padding: 25px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s,
    border-color 0.2s;
}
.mini-card:hover {
  transform: translateY(-3px);
  border-color: #639bff66;
}
.mini-icon {
  color: var(--primary);
  margin-bottom: 20px;
}
.mini-card h3 {
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.3px;
  margin-bottom: 12px;
}
.mini-card p {
  font-size: 14px;
  color: var(--muted-foreground);
  margin-bottom: 23px;
  line-height: 1.75;
}
.mini-card .tags li {
  font-size: 11px;
  padding: 2px 7px;
}
.achievements-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}
.achievement {
  padding: 26px 20px;
  border-top: 1px solid var(--border);
}
.achievement > svg {
  color: var(--primary);
  margin-bottom: 23px;
}
.achievement h3 {
  font-size: 23px;
  letter-spacing: -0.6px;
  margin-bottom: 10px;
  font-weight: 600;
}
.achievement p {
  font-size: 14px;
  margin-bottom: 5px;
}
.achievement span {
  font-size: 12px;
  color: var(--muted-foreground);
}
.contact-section {
  margin-top: 90px;
  padding-top: 65px;
  padding-bottom: 72px;
  border-top: 1px solid var(--border);
}
.contact-section h2 {
  font-size: clamp(45px, 6vw, 70px);
  letter-spacing: -3px;
  margin: 15px 0 20px;
  font-weight: 600;
}
.contact-section h2 span {
  color: var(--primary);
}
.contact-section > p {
  color: var(--muted-foreground);
  max-width: 510px;
}
.contact-actions {
  display: flex;
  align-items: center;
  gap: 35px;
  margin-top: 30px;
  flex-wrap: wrap;
}
.social-links {
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
}
.site-footer {
  padding-top: 25px;
  padding-bottom: 28px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
.site-footer .wordmark {
  font-size: 24px;
}
.site-footer p,
.site-footer > a:last-child {
  color: var(--muted-foreground);
  font-size: 12px;
}
.site-footer > a:last-child:hover {
  color: var(--primary);
}
.will-reveal {
  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.55s ease,
    transform 0.55s ease;
}
.will-reveal.is-visible {
  opacity: 1;
  transform: none;
}
@media (min-width: 1400px) {
  .hero {
    padding-top: 115px;
  }
  .hero-content {
    padding-bottom: 104px;
  }
}
@media (max-width: 1023px) {
  .container {
    padding-inline: 30px;
  }
  .nav-inner {
    min-height: 72px;
  }
  .menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: 1px solid var(--border);
    border-radius: 7px;
    background: var(--card);
    color: var(--foreground);
  }
  .navigation {
    display: none;
    position: absolute;
    top: 71px;
    left: 0;
    right: 0;
    padding: 18px 30px 24px;
    background: var(--background);
    border-bottom: 1px solid var(--border);
    box-shadow: 0 10px 20px #0005;
    max-height: calc(100dvh - 72px);
    overflow-y: auto;
  }
  .navigation.is-open {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 2px;
  }
  .navigation a {
    padding: 8px 12px;
  }
  .navigation a:last-child {
    margin-top: 8px;
    width: fit-content;
  }
  .hero {
    padding-top: 72px;
  }
  .hero-main {
    letter-spacing: -2.5px;
  }
  .about-grid {
    gap: 36px;
  }
  .skills-groups {
    grid-template-columns: 1fr 1fr;
  }
  .skill-group:last-child {
    grid-column: 1 / -1;
  }
  .skill-group:last-child .skills-grid {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .experience-card {
    gap: 30px;
  }
  .mini-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .achievements-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .project-card {
    padding: 24px;
  }
}
@media (max-width: 639px) {
  .container {
    padding-inline: 22px;
  }
  .hero {
    padding-top: 58px;
  }
  .hero-content {
    padding-bottom: 54px;
  }
  .hero-greeting {
    font-size: 16px;
    margin-bottom: 23px;
  }
  .hero-role {
    font-size: 19px;
    letter-spacing: -0.5px;
  }
  .hero-main {
    font-size: clamp(37px, 10vw, 59px);
    letter-spacing: -1.7px;
  }
  .hero-description {
    font-size: 16px;
    margin-top: 24px;
  }
  .hero-actions {
    gap: 10px;
  }
  .button {
    padding: 12px 15px;
    font-size: 13px;
  }
  .hero-bottom {
    font-size: 11px;
    gap: 20px;
  }
  .hero-bottom p {
    max-width: 145px;
  }
  .section {
    padding-top: 65px;
  }
  .section-heading {
    margin-bottom: 28px;
  }
  .section-heading h2 {
    font-size: 28px;
    letter-spacing: -1px;
  }
  .section-heading p {
    font-size: 15px;
  }
  .about-grid {
    grid-template-columns: 1fr;
    gap: 28px;
  }
  .about-copy {
    font-size: 15px;
  }
  .skills-groups {
    grid-template-columns: 1fr;
    gap: 26px;
  }
  .skill-group:last-child {
    grid-column: auto;
  }
  .skill-group:last-child .skills-grid,
  .skills-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .skill {
    min-height: 100px;
  }
  .skill span {
    font-size: 13px;
  }
  .experience-card {
    grid-template-columns: 1fr;
    gap: 22px;
  }
  .projects-grid,
  .mini-grid {
    grid-template-columns: 1fr;
  }
  .count-label {
    display: none;
  }
  .project-card {
    padding: 24px;
  }
  .project-card h3 {
    font-size: 23px;
  }
  .mini-tabs .filter-tab {
    font-size: 12px;
    padding: 9px 11px;
  }
  .mini-tabs .filter-tabs {
    gap: 0;
  }
  .mini-card {
    padding: 24px;
  }
  .achievement {
    padding: 20px 5px;
  }
  .achievement h3 {
    font-size: 21px;
  }
  .achievement p {
    font-size: 13px;
  }
  .achievement span {
    font-size: 12px;
  }
  .contact-section {
    margin-top: 55px;
    padding-top: 45px;
    padding-bottom: 45px;
  }
  .contact-section h2 {
    letter-spacing: -2px;
  }
  .contact-actions {
    gap: 25px;
  }
  .social-links {
    gap: 20px;
  }
  .site-footer {
    flex-wrap: wrap;
    gap: 15px;
  }
  .site-footer p {
    order: 3;
    width: 100%;
  }
  .navigation {
    padding-inline: 22px;
  }
}
@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
  }
  .will-reveal {
    opacity: 1;
    transform: none;
  }
}
@media (forced-colors: active) {
  * {
    scrollbar-color: auto;
  }
  .button,
  .skill,
  .project-card,
  .mini-card {
    border: 1px solid CanvasText;
  }
}
/* Data-focused identity: name-first hierarchy and expertise columns. */
.wordmark {
  font-size: 19px;
  letter-spacing: -0.65px;
  line-height: 1.25;
  font-weight: 650;
}
.nav-inner {
  gap: 22px;
}
.navigation {
  gap: 22px;
}
.navigation a {
  font-size: 13px;
}
.hero {
  padding-top: 75px;
}
.hero-content {
  padding-bottom: 65px;
}
.hero-socials {
  display: flex;
  gap: 22px;
  margin-bottom: 37px;
}
.hero-socials a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: var(--muted-foreground);
}
.hero-socials a:hover {
  color: var(--primary);
}
.hero-greeting {
  margin-bottom: 15px;
}
.hero-name {
  font-size: clamp(46px, 6.5vw, 80px);
  font-weight: 650;
  letter-spacing: -3px;
  line-height: 1.1;
}
.hero-position {
  font-size: clamp(16px, 1.9vw, 23px);
  font-weight: 500;
  line-height: 1.7;
  margin-top: 25px;
  max-width: 950px;
}
.hero-position span {
  color: #687386;
  padding: 0 8px;
}
.hero-description {
  max-width: 660px;
  margin-top: 17px;
}
.skills-groups {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 36px;
}
.skill-group h3 {
  color: var(--foreground);
  font-size: 20px;
  margin-bottom: 13px;
  letter-spacing: -0.4px;
}
.expertise-icon {
  color: var(--primary);
  display: block;
  margin-bottom: 22px;
}
.expertise-description {
  color: var(--muted-foreground);
  font-size: 14px;
  line-height: 1.8;
  min-height: 100px;
  margin-bottom: 22px;
}
.skills-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
.mini-project-link {
  margin-top: 17px;
}
.mini-project-link a {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  color: var(--primary);
  font-size: 13px;
}
.mini-project-link a:hover {
  text-decoration: underline;
}
.site-footer .wordmark {
  font-size: 17px;
}
@media (max-width: 1100px) and (min-width: 1024px) {
  .navigation {
    gap: 14px;
  }
  .wordmark {
    max-width: 150px;
  }
}
@media (max-width: 1023px) {
  .navigation {
    gap: 2px;
  }
  .hero-name {
    font-size: clamp(44px, 8vw, 70px);
  }
  .skills-groups {
    grid-template-columns: 1fr;
    gap: 42px;
  }
  .skill-group:last-child {
    grid-column: auto;
  }
  .skill-group:last-child .skills-grid,
  .skills-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .expertise-description {
    min-height: 0;
    max-width: 600px;
  }
  .skill {
    min-height: 95px;
  }
  .hero {
    padding-top: 58px;
  }
}
@media (max-width: 639px) {
  .wordmark {
    font-size: 17px;
    max-width: 230px;
  }
  .hero-name {
    font-size: clamp(35px, 8.8vw, 54px);
    letter-spacing: -1.4px;
  }
  .hero-position {
    font-size: 16px;
  }
  .hero-position span {
    padding-inline: 3px;
  }
  .hero-socials {
    margin-bottom: 28px;
  }
  .hero-content {
    padding-bottom: 45px;
  }
  .hero {
    padding-top: 44px;
  }
  .hero-description {
    font-size: 16px;
  }
  .hero-bottom p {
    max-width: 190px;
  }
  .site-footer .wordmark {
    font-size: 16px;
  }
  .experience-title h3 {
    font-size: 20px;
  }
}
```

## src/lib/utils.ts

```typescript
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
```

## src/main.tsx

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

## public/favicon.svg

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="#0d0f13"/><text x="9" y="41" fill="#639bff" font-family="Arial,sans-serif" font-weight="700" font-size="29">RB</text></svg>
```
