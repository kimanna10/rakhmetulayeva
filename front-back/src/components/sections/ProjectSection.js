"use client";

import DesktopGrid from "@/components/sections/projects/DesktopGrid";
import MobileGrid from "@/components/sections/projects/MobileGrid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProjectsClient({ projects, categories }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [active, setActive] = useState("all");

  const filters = ["all", ...categories.map((c) => c.name)];

  useEffect(() => {
    const urlFilter = searchParams.get("filter") || "all";
    setActive(urlFilter);
  }, [searchParams]);

  const handleFilterChange = (filter) => {
    const params = new URLSearchParams(searchParams.toString());

    if (filter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }

    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

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
            onClick={() => handleFilterChange(filter)}
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

      <div className="lg:hidden">
        <MobileGrid projects={filteredProjects} />
      </div>

      <div className="hidden lg:block">
        <DesktopGrid projects={filteredProjects} />
      </div>
    </div>
  );
}
