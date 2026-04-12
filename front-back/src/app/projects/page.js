import Section from "@/components/layouts/Section";
import ProjectSection from "@/components/sections/ProjectSection";
import { categoryService } from "@/services/categories";
import { projectService } from "@/services/projects";

export const revalidate = 0;
export default async function Projects() {
  const projects = await projectService.getAll();
  const categories = await categoryService.getAll();
  return (
    <Section title="Projects">
      <ProjectSection projects={projects} categories={categories} />
    </Section>
  );
}
