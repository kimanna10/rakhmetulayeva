import Section from "@/components/layouts/Section";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className=""></section>

      <Section title="Choreo Portfolio">
        <div className="flex gap-2.5 flex-col">
          <div className="flex flex-col  gap-2.5 transition">
            <a
              href="https://www.instagram.com/reel/CnCaZJoJ8Ko/"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden transition shadow-lg group hover:shadow-xl"
            >
              <img
                src="/images/portfolio2.png"
                alt="Instagram preview"
                width={800}
                height={600}
                className="object-cover w-full transition aspect-video group-hover:opacity-80"
              />
            </a>
            <div className="flex flex-col justify-between sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold uppercase">
                  Sweet dreams
                </h3>
                <p className="text-lg">
                  Creative Director / Art Director / Choreography
                </p>
              </div>
              <Link href={`/projects/1`} className="text-lg hover:underline">
                More →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-lg text-center">
          <Link
            href="/projects"
            className="inline-block px-6 py-3 transition rounded-full bg-primary hover:bg-opacity-90"
          >
            View all →
          </Link>
        </div>
      </Section>
    </>
  );
}
