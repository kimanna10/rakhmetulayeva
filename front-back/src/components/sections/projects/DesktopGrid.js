import ProjectCard from "@/components/sections/projects/ProjectCard";

export default function DesktopGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          className={i % 4 === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
        />
      ))}
    </div>
  );
}
