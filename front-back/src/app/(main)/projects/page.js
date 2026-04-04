import Section from "@/components/layouts/Section";
import ProjectSection from "@/components/sections/ProjectSection";
import { categoryService } from "@/services/categories";
import { projectService } from "@/services/projects";

export default async function Projects() {
  const projects = await projectService.getAll();
  const categories = await categoryService.getAll();
  return (
    <main className="pt-[104px]">
      <Section title="Portfolio">
        <ProjectSection projects={projects} categories={categories} />
        {/* <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 ">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className={`flex flex-col justify-center gap-2.5 ${i % 4 === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
            >
              <div className="w-full overflow-hidden aspect-video">
                <iframe
                  src={project.url}
                  title={project.title}
                  border="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="w-full h-full"
                  allowFullScreen
                ></iframe>

                {project.type === "youtube" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${project.url}`}
                    title={project.title}
                    border="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                ) : (
                  // иначе — vimeo
                  <iframe
                    src={`https://player.vimeo.com/video/${project.link}`}
                    // src="https://player.vimeo.com/video/875686258"
                    title={project.title}
                    border="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="w-full h-full"
                    allowFullScreen
                  ></iframe>
                )} 
              </div>
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
        </div> */}
      </Section>
    </main>
  );
}
