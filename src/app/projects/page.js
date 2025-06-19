"use client";
import ContactSection from "@/components/sections/ContactSection";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="pt-[104px]">
      <section className="w-full py-20 bg-bg text-text">
        <div className="container px-4 mx-auto">
          <h2 className="mb-10 text-3xl font-bold text-center uppercase">
            Choreo Portfolio
          </h2>
          <div className="flex flex-col gap-20">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex flex-col  gap-2.5 transition"
              >
                {project.type === "youtube" ? (
                  // 👉 если тип YouTube — вставляем iframe
                  <div className="w-full overflow-hidden rounded aspect-video">
                    <iframe
                      height="315"
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
                  // 👉 иначе — просто картинка или превью
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
                    href={`/projects/1`}
                    className="text-lg hover:underline"
                  >
                    More →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-lg text-center">
            <Link
              href="/projects"
              className="inline-block px-6 py-3 text-white transition rounded-full bg-primary hover:bg-opacity-90"
            >
              View all →
            </Link>
          </div>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
