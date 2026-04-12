import Section from "@/components/layouts/Section";
import { projectService } from "@/services/projects";

export default async function ProjectId({ params }) {
  const { projectId } = await params;

  const project = await projectService.getById(projectId);

  if (!project) {
    return <div className="p-6 text-red-600">Проект не найден</div>;
  }

  return (
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
          <h3 className="lg:text-xl text-base lg:font-semibold uppercase">
            {project.subtitle}
          </h3>
          <p className="whitespace-pre-line lg:text-lg text-sm leading-[1.2]">
            {project.desc}
          </p>
        </div>
      </div>
    </Section>
  );
}
