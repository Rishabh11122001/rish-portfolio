import { Icon, SectionHeading } from "./Shared";
const achievements = [
  {
    icon: "trophy",
    value: "AIR 631",
    label: "NIMCET",
    detail: "National entrance rank securing MCA seat at IIIT Bhopal",
  },
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
