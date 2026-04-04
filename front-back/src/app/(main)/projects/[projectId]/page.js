import Section from "@/components/layouts/Section";
import { projectService } from "@/services/projects";

// Генерируем список путей заранее (SSG)
// SSG (генерация страниц)
export async function generateStaticParams() {
  try {
    const projects = await projectService.getAll();

    return projects.map((project) => ({
      projectId: project.id.toString(),
    }));
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}

export default async function ProjectId({ params }) {
  const { projectId } = await params;

  const project = await projectService.getById(projectId);

  if (!project) {
    return <div className="p-6 text-red-600">Проект не найден</div>;
  }

  return (
    <main className="pt-[104px]">
      <Section title={project.title}>
        <div className="flex flex-col gap-8">
          <div className="w-full overflow-hidden rounded aspect-video">
            <iframe
              src={project.url}
              title={project.title}
              className="w-full h-full"
              allowFullScreen
            />
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold uppercase">
              {project.subtitle}
            </h3>
            <p className="whitespace-pre-line text-lg leading-[1.2]">
              {project.desc}
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
