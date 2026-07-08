import Section from "@/components/layouts/Section";
import ProjectSection from "@/components/sections/ProjectSection";
import { getProjectsFromSheet } from "@/lib/data";

export const revalidate = 0;

export default async function Projects() {
  // const projects = await projectService.getAll();
  // const categories = await categoryService.getAll();
  // Получаем сырые данные
  const rawProjects = await getProjectsFromSheet("projects");
  const rawCategories = await getProjectsFromSheet("categories");

  // Объединяем их прямо здесь, на сервере
  const projects = rawProjects.map((p) => ({
    ...p,
    // Создаем структуру, которую ждет твой компонент
    projects_categories: p.category_id
      ? p.category_id
          .split(",")
          .map((id) => {
            const cat = rawCategories.find((c) => c.id === id.trim());
            return cat ? { name: cat.name } : null;
          })
          .filter(Boolean)
      : [],
  }));

  return (
    <Section title="Projects">
      <ProjectSection projects={projects} categories={rawCategories} />
    </Section>
  );
}
