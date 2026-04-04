"use client";

import Link from "next/link";
import { useState } from "react";

export default function ProjectsClient({ projects, categories }) {
  const [active, setActive] = useState("all");

  const filters = ["all", ...categories.map((c) => c.name)];

  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((p) =>
          p.projects_categories?.some(
            (c) => c.name.toLowerCase() === active.toLowerCase(),
          ),
        );

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActive(filter)}
            className={`
              px-4 py-2 text-sm rounded-full transition-all duration-300 cursor-pointer
              ${
                active === filter
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-gray-300"
              }
            `}
          >
            #{filter}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <Link
            key={project.id}
            href={`/projects/${project.id}`}
            className={`flex flex-col  justify-center  gap-2.5 ${i % 4 === 0 ? "lg:col-span-2 lg:row-span-2" : ""}`}
          >
            <div className="w-full overflow-hidden aspect-video">
              {/* <iframe
                src={project.url}
                title={project.title}
                border="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; "
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
                allowFullScreen
              ></iframe> */}
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="flex flex-col justify-between sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold uppercase">
                  {project.title}
                </h3>
                <p className="text-lg">{project.subtitle}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
