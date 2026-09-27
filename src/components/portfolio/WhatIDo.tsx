import { Icon, SectionHeading } from "./Shared";

const pillars = [
  {
    icon: "chart",
    title: "Data Analytics",
    description:
      "Cleaning, modelling and visualizing data — SQL, Power BI dashboards, and DAX-driven reporting on real-world datasets.",
  },
  {
    icon: "brain",
    title: "AI & Machine Learning",
    description:
      "Building predictive models and AI-powered tools — from churn prediction to LLM-backed copilots that reason over live data.",
  },
  {
    icon: "code",
    title: "Full-Stack Development",
    description:
      "Shipping production-grade apps end to end — React/TypeScript frontends on Node.js/Express and PostgreSQL backends.",
  },
];

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="section container reveal">
      <SectionHeading
        label="WHAT I DO"
        title="Where data, models and products meet."
        description="Three areas I keep coming back to, across coursework, hackathons and real client work."
      />
      <div className="what-i-do-grid">
        {pillars.map((item) => (
          <article className="what-i-do-card" key={item.title}>
            <span className="icon-box">
              <Icon name={item.icon} size={26} />
            </span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
