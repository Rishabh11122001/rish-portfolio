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
