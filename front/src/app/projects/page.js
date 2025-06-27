import Section from "@/components/layouts/Section";
import { getAllProjects } from "@/lib/api/projects";
import Link from "next/link";

export default async function Projects() {
  const projects = await getAllProjects();
  return (
    <>
      <Section title="Choreo Portfolio">
        <div className="flex flex-col gap-20">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col  gap-2.5 transition">
              {project.type === "youtube" ? (
                // если тип YouTube — вставляем iframe
                <div className="w-full overflow-hidden rounded aspect-video">
                  <iframe
                    src={project.link}
                    title={project.title}
                    border="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                </div>
              ) : (
                // иначе — просто картинка или превью
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
                      width={800}
                      height={600}
                      className="object-cover w-full transition aspect-video group-hover:opacity-80"
                    />
                  )}
                </a>
              )}

              <div className="flex flex-col justify-between sm:flex-row sm:items-end sm:justify-between">
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-semibold uppercase">
                    {project.title}
                  </h3>
                  <p className="text-lg">{project.subtitle}</p>
                </div>
                <Link
                  href={`/projects/${project.id}`}
                  className="text-lg hover:underline"
                >
                  More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
