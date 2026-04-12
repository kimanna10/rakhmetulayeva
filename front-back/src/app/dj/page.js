"use client";

import Section from "@/components/layouts/Section";

export default function Dj() {
  const mixes = [
    {
      title: "kama.s.utra for Elevate Your Sound",
      type: "soundcloud",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2020083293&color=%23181e24&auto_play=false&hide_related=true&show_comments=false&show_user=false&visual=false",
    },
    {
      title: "KAMA.S.UTRA | CHAIKHANA x Kerege x TOLK",
      type: "youtube",
      url: "https://www.youtube.com/embed/SqZyA_bkJho",
    },
    {
      title: "Unstable Degree w/ kama.s.utra",
      type: "soundcloud",
      url: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2157134286&color=%23181e24&auto_play=false&hide_related=true&show_comments=false&show_user=false&visual=false",
    },
  ];

  return (
    <Section title="DJ">
      <div className="space-y-10">
        {mixes.map((mix, idx) => (
          <div key={idx} className="space-y-3">
            {/* title */}
            <h3 className="text-white lg:text-lg text-base">{mix.title}</h3>

            {/* player */}
            <div className="w-full h-[166px] overflow-hidden bg-black/40 rounded-md">
              {mix.type === "youtube" ? (
                <iframe
                  className="w-full h-full"
                  src={mix.url}
                  title={mix.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  className="w-full h-full"
                  src={mix.url}
                  frameBorder="0"
                  allow="autoplay"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
