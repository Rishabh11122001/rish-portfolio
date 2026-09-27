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
