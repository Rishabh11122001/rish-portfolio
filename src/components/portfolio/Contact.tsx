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
          © {new Date().getFullYear()} Rishabh Bhagchandani. Built with 🤍.
          
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}
