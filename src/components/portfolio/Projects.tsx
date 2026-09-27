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
              <ExternalLink href={project.demo}>
                {project.demoLabel ?? "Live Demo"}
              </ExternalLink>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
