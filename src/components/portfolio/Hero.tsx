import { ArrowDown, ArrowRight } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ExternalLink } from "./Shared";
export default function Hero() {
  return (
    <section id="home" className="hero container">
      <div className="hero-grid">
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
        <div className="hero-photo-wrap">
          <div className="hero-photo-ring">
            <img
              src="/profile.jpg"
              alt="Rishabh Bhagchandani"
              className="hero-photo"
            />
          </div>
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
