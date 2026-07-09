import Section from "@/components/layouts/Section";
import InstagramWrapper from "@/components/sections/InstagramWrapper";
import { getProjectsFromSheet } from "@/lib/data";

export const metadata = {
  title: "PROJECT DETAILS | RAKHMETULAYEVA KAMILA",
};

export default async function ProjectId({ params }) {
  const { projectId } = await params;

  // const project = await projectService.getById(projectId);
  const rawProjects = await getProjectsFromSheet("projects");
  const project = rawProjects.find(
    (p) => String(p.id).trim() === String(projectId).trim(),
  );

  if (!project) {
    return <div className="p-6 text-red-600">Проект не найден</div>;
  }

  return (
    <Section title={project.title || "Проект"}>
      <div className="flex flex-col gap-8">
        {project.url ? (
          <div className="w-full overflow-hidden rounded aspect-video">
            {project.url.includes("instagram.com") ? (
              // Если это инстаграм — используем твой компонент
              <InstagramWrapper url={project.url} />
            ) : (
              // Если это другое видео — используем обычный iframe
              <iframe
                src={project.url}
                title={project.title || "Проект"}
                className="w-full h-full"
                allowFullScreen
              />
            )}
          </div>
        ) : (
          <div className="w-full aspect-video bg-neutral-800 flex items-center justify-center text-neutral-500">
            Видео отсутствует
          </div>
        )}
      </div>
    </Section>
  );
}
