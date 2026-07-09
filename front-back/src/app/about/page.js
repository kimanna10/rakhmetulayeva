import Section from "@/components/layouts/Section";
import Slider from "@/components/ui/Slider";
import { getProjectsFromSheet } from "@/lib/data";

export const metadata = {
  title: "ABOUT | RAKHMETULAYEVA KAMILA",
};

export default async function About() {
  // const images = await galleryService.getAll();
  // const imagesMain = await galleryService.getAllMain();

  const images = await getProjectsFromSheet("gallery");
  const imagesMain = images.filter(
    (img) => img.type?.trim().toLowerCase() === "main",
  );

  return (
    <Section title="About">
      <div className="space-y-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="w-full overflow-hidden lg:h-full lg:aspect-square">
            <img
              src={imagesMain[0].url}
              alt="about"
              className="object-cover h-full w-full "
            />
          </div>

          <p className="leading-relaxed text-text lg:text-lg text-base">
            <b>
              Kamila Rakhmetulayeva — movement artist, choreographer, dancer,
              and DJ based in Kazakhstan.
            </b>{" "}
            Her journey began in professional rhythmic gymnastics, where she
            earned the title of Master of Sport of the Republic of Kazakhstan.
            This rigorous background laid the essential foundation for her
            profound understanding of the body and her commanding stage
            presence.
          </p>
        </div>

        <Slider images={images} />

        <div className="grid grid-cols-1 gap-12 ">
          <p className="leading-relaxed text-text lg:text-lg text-base">
            Today, Kamila’s work spans commercial projects, stage performances,
            music videos, and film. Beyond the stage, she is an active force in
            the music scene as a DJ — performing at local events and sharing
            mixes on SoundCloud. As a visionary leader, she founded the TOLK
            Platform and TOLK Agency, which serve as vital hubs for the
            Kazakhstani creative community. Through these initiatives, she
            organizes B.Aitys — a unique experimental dance battle — while the
            agency provides a launchpad for artists and innovative projects. In
            her artistic practice, Kamila explores movement as a core form of
            expression, seamlessly blending dance, music, and performance.
          </p>

          <div className="w-full overflow-hidden lg:h-full">
            <img
              src={imagesMain[1].url}
              alt="about"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
