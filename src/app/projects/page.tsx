import type { Metadata } from "next";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Projects — Ibekwe Kingsley",
  description:
    "AI and machine learning projects by Ibekwe Kingsley, including chatbots, ML pipelines, and intelligent systems.",
};

export default function ProjectsPage() {
  return (
    <Section
      title="All Projects"
      subtitle="A collection of AI, ML, and data-driven projects I've built"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
