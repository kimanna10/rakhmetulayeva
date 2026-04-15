"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollDown() {
  const handleScroll = () => {
    const nextSection = document.getElementById("next-section");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
      <button onClick={handleScroll}>
        <ChevronDown
          size={80}
          strokeWidth={1.2}
          className="animate-bounce cursor-pointer text-white opacity-80 hover:opacity-100 transition "
        />
      </button>
    </div>
  );
}
