import Section from "@/components/layouts/Section";
import Slider from "@/components/ui/Slider";

export default async function About() {
  const images = [
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.png",
    "/images/10.jpeg",
  ];

  return (
    <main className="pt-[104px]">
      <Section title="About">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-12">
          <div className="w-full overflow-hidden lg:h-full">
            <img
              src="/images/1.jpg"
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-6 lg:text-lg text-base">
            <p className="leading-relaxed text-text">
              <b>
                Kamila Rakhmetulayeva — movement artist, choreographer, dancer,
                and DJ based in Kazakhstan.
              </b>{" "}
              Her journey began in professional rhythmic gymnastics, where she
              earned the title of Master of Sport of the Republic of Kazakhstan.
              This rigorous background laid the essential foundation for her
              profound understanding of the body and her commanding stage
              presence. <br />
              Today, Kamila’s work spans commercial projects, stage
              performances, music videos, and film. Beyond the stage, she is an
              active force in the music scene as a DJ — performing at local
              events and sharing mixes on SoundCloud. As a visionary leader, she
              founded the TOLK Platform and TOLK Agency, which serve as vital
              hubs for the Kazakhstani creative community. Through these
              initiatives, she organizes B.Aitys — a unique experimental dance
              battle — while the agency provides a launchpad for artists and
              innovative projects. In her artistic practice, Kamila explores
              movement as a core form of expression, seamlessly blending dance,
              music, and performance.
            </p>
          </div>
        </div>

        <Slider images={images} />
      </Section>
    </main>
  );
}
