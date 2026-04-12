import Link from "next/link";

export default function ProjectCard({
  project,
  className = "",
  aspect = "aspect-video",
}) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className={`group flex flex-col justify-center gap-2.5 ${className}`}
    >
      <div className={`w-full overflow-hidden ${aspect}`}>
        <img
          src={project.preview}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="lg:text-xl font-semibold uppercase text-sm leading-tight">
          {project.title}
        </h3>
        {/* <p className="lg:text-lg hidden lg:block text-base">
            {project.subtitle}
          </p> */}
        <p className="hidden lg:inline-block text-base  text-neutral-400">
          {project.subtitle}
        </p>
      </div>
    </Link>
  );
}
