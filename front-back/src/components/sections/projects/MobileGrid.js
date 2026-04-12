import ProjectCard from "@/components/sections/projects/ProjectCard";

export default function MobileGrid({ projects }) {
  const items = [];
  let i = 0;
  let step = 0;

  while (i < projects.length) {
    const pattern = step % 3;

    if (pattern === 0 && projects[i + 1]) {
      items.push(
        <div key={i} className="col-span-2 grid grid-cols-[2fr_1fr]">
          <ProjectCard
            project={projects[i]}
            className=""
            aspect="aspect-[4/3]"
          />

          <ProjectCard project={projects[i + 1]} aspect="aspect-[2/3]" />
        </div>,
      );
      i += 2;
      step++;
      continue;
    }
    if (pattern === 1 && projects[i + 1]) {
      items.push(
        <div key={i} className="col-span-2 grid grid-cols-[1fr_2fr]">
          <ProjectCard
            project={projects[i]}
            className=""
            aspect="aspect-[2/3]"
          />

          <ProjectCard project={projects[i + 1]} aspect="aspect-[4/3]" />
        </div>,
      );
      i += 2;
      step++;
      continue;
    }
    if (pattern === 2 && projects[i + 1]) {
      items.push(
        <div key={i} className="col-span-2 grid grid-cols-2">
          <ProjectCard
            project={projects[i]}
            className="col-span-2"
            aspect="aspect-[2/1]"
          />
        </div>,
      );
      i += 1;
      step++;
      continue;
    }
    // fallback
    items.push(
      <div key={i} className="col-span-2 grid grid-cols-2">
        <ProjectCard
          project={projects[i]}
          className="col-span-2"
          aspect="aspect-[2/1]"
        />
      </div>,
    );

    i++;
    step++;
  }
  return <div className="grid grid-cols-2 ">{items}</div>;
}
