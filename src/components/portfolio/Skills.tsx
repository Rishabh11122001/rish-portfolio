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
