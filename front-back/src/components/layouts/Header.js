"use client";

import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
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

  // const pathname = usePathname();
  // const isHome = pathname === "/";
  const pathname = usePathname();
  // По умолчанию ставим true, чтобы сразу был прозрачным
  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    // Как только JS загрузился, проверяем реальный путь
    setIsHome(pathname === "/");
  }, [pathname]);
  console.log("isHome:", isHome);
  console.log("path:", pathname);

  // const [scrolled, setScrolled] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header
      className={`top-0 left-0 z-50 w-full py-5 transition-all duration-300 ${
        isHome ? "absolute bg-transparent" : "relative"
      }`}
    >
      <div className="container flex items-center justify-end px-4 mx-auto ">
        {/* Логотип */}
        {/* <NavLink href="/">Rakhmetulayeva</NavLink> */}

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
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/dj">DJ</NavLink>
          <NavLink href="/contacts">Contacts</NavLink>
          <NavLink href="/booking">Booking</NavLink>
        </nav>
      </div>

      {/* Мобильное меню */}
      <div
        className={`fixed inset-0 z-[999] h-vh w-screen bg-bg flex items-center justify-center flex-col gap-1 text-2xl transition-all duration-300 ease-in-out transform ${
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
        <NavLink href="/" setIsOpen={setIsOpen}>
          Home
        </NavLink>
        <NavLink href="/about" setIsOpen={setIsOpen}>
          About
        </NavLink>
        <NavLink href="/projects" setIsOpen={setIsOpen}>
          Projects
        </NavLink>
        <NavLink href="/dj" setIsOpen={setIsOpen}>
          DJ
        </NavLink>
        <NavLink href="/contacts" setIsOpen={setIsOpen}>
          Contacts
        </NavLink>
        <NavLink href="/booking" setIsOpen={setIsOpen}>
          Booking
        </NavLink>
      </div>
    </header>
  );
}
