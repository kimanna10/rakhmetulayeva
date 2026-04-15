import Section from "@/components/layouts/Section";
import ScrollDown from "@/components/ui/ScrollDown";
import { projectService } from "@/services/projects";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
export default async function Home() {
  const projects = await projectService.getAllFrom("home");
  return (
    <>
      <div className="relative w-screen h-screen overflow-hidden ">
        {/* <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/backvideo.webm" type="video/webm" />
        </video> */}

        <iframe
          src="https://player.vimeo.com/video/875686258?background=1&autoplay=1&loop=1&muted=1"
          className="
      absolute top-1/2 left-1/2
      w-[177.78vh] h-[100vh]
      md:w-[100vw] md:h-[56.25vw]
      -translate-x-1/2 -translate-y-1/2
      pointer-events-none
    "
          allow="autoplay; fullscreen"
        />
        <ScrollDown />
      </div>

      <Section title="" id="next-section">
        <div className="text-lg text-center space-y-14">
          <div className="flex flex-col gap-14">
            {projects.map((project, i) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="group flex flex-col justify-center gap-6"
              >
                <h3 className="lg:text-xl font-semibold uppercase text-base leading-tight">
                  {project.title}
                </h3>
                <div className="w-full">
                  <div className="mx-auto max-w-5xl overflow-hidden">
                    <img
                      src={project.preview}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 text-base uppercase transition rounded-full bg-primary hover:bg-opacity-90"
          >
            View all <ChevronRight />
          </Link>
        </div>
      </Section>
    </>
  );
}
