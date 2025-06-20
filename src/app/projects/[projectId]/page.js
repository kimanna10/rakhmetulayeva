import ContactSection from "@/components/sections/ContactSection";
import Section from "@/components/ui/Section";
export default async function ProjectId({ params }) {
  const awaitedParams = await params; // ← обязательно!
  const id = awaitedParams.projectId;

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${baseUrl}/api/projects/${id}`);
  const project = await res.json();

  if (!project) {
    return <div>Проект не найден</div>;
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

      <ContactSection />
    </>
  );
}
