"use client";
import { useEffect } from "react";

export default function InstagramWrapper({ url, onReady }) {
  // 1. Загрузка скрипта Instagram один раз при монтировании
  useEffect(() => {
    if (!document.querySelector('script[src="//www.instagram.com/embed.js"]')) {
      const script = document.createElement("script");
      script.src = "//www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // 2. Обработка встраивания, когда URL меняется или скрипт загрузился
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // Имитация готовности (если это нужно для лоадера)
    if (onReady) {
      const timer = setTimeout(onReady, 1500);
      return () => clearTimeout(timer);
    }
  }, [url, onReady]);

  return (
    <div className="flex justify-center my-4">
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      ></blockquote>
    </div>
  );
}
