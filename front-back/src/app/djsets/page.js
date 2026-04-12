"use client";

import Section from "@/components/layouts/Section";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function Djsets() {
  const [openIndex, setOpenIndex] = useState(null);

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
    <Section title="DJ sets">
      <div className="space-y-4">
        {mixes.map((mix, idx) => (
          <div key={idx} className="border-b border-white/10 pb-4">
            {/* header */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <h3 className="text-white text-lg">{mix.title}</h3>

              <span className="text-white/40 text-xs uppercase">
                {openIndex === idx ? (
                  <ChevronUp size={18} className="text-white/40" />
                ) : (
                  <ChevronDown size={18} className="text-white/40" />
                )}
              </span>
            </div>

            {/* animated player */}
            <AnimatePresence>
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3"
                >
                  {/* unified player box */}
                  <div className="w-full overflow-hidden bg-black/40">
                    {mix.type === "youtube" ? (
                      <div className="aspect-video">
                        <iframe
                          className="w-full h-full"
                          src={mix.url}
                          title={mix.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    ) : (
                      <div className="h-[140px]">
                        <iframe
                          className="w-full h-full"
                          src={mix.url}
                          frameBorder="0"
                          allow="autoplay"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
}
