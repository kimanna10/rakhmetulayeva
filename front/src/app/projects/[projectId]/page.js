import Section from "@/components/layouts/Section";
import { getAllProjects, getProjectById } from "@/lib/api/projects";

// Генерируем список путей заранее (SSG)
// export async function generateStaticParams() {
//   const projects = await getAllProjects();
//   return projects.map((project) => ({
//     projectId: project.id.toString(), // обязательно строка
//   }));
// }

export async function generateStaticParams() {
  try {
    const res = await getAllProjects();
    const projects = await res.json();

    return projects.map((project) => ({
      projectId: project.id.toString(),
    }));
  } catch (err) {
    console.error("Fetch error:", err);
    return []; // Чтобы не падала сборка
  }
}

export default async function ProjectId({ params }) {
  const { projectId } = await params;

  const project = await getProjectById(projectId);

  if (!project) {
    return <div className="p-6 text-red-600">Проект не найден</div>;
  }

  return (
    <>
      <Section title={project.title}>
        <div className="flex flex-col gap-8">
          {project.type === "youtube" ? (
            <div className="w-full overflow-hidden rounded aspect-video">
              <iframe
                src={project.link}
                title={project.title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          ) : (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden transition shadow-lg group hover:shadow-xl"
            >
              {project.img && (
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full transition aspect-video group-hover:opacity-80"
                />
              )}
            </a>
          )}

          <div className="flex flex-col gap-1">
            <h3 className="text-xl font-semibold uppercase">
              {project.subtitle}
            </h3>
            <p className="whitespace-pre-line text-lg leading-[1.2]">
              {project.description}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
