"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import NavLink from "../ui/Navlink";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Блокируем скролл при открытом меню
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 z-50 w-full py-5 backdrop-blur-md bg-white/0">
      <div className="container flex items-center justify-between px-4 mx-auto ">
        {/* Логотип */}
        <NavLink href="/">Rakhmetulayeva</NavLink>

        {/* Бургер-кнопка */}
        <button
          onClick={() => setIsOpen(true)}
          className="text-text sm:hidden"
          aria-label="Open menu"
        >
          <Menu size={28} />
        </button>

        {/* Десктоп-навигация */}
        <nav className="hidden gap-10 sm:flex">
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
      </div>

      {/* Мобильное меню */}
      <div
        className={`fixed inset-0 z-[999] h-screen w-screen bg-bg flex items-center justify-center flex-col gap-1 text-2xl transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute text-white top-10 right-4"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>

        <NavLink href="/about" setIsOpen={setIsOpen}>
          About
        </NavLink>
        <NavLink href="/projects" setIsOpen={setIsOpen}>
          Projects
        </NavLink>
        <NavLink href="#contact" setIsOpen={setIsOpen}>
          Contact
        </NavLink>
      </div>
    </header>
  );
}
