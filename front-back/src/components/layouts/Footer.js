"use client";
import { usePathname } from "next/navigation";
import NavLink from "../ui/Navlink";
export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const isContact = usePathname() === "/contacts";
  return (
    <footer
      className={`w-full text-text ${isHome ? "hidden" : ""} ${isContact ? "fixed bottom-0 left-0 z-50" : ""} `}
    >
      <div className="container flex flex-col-reverse items-center justify-between gap-4 px-4 py-8 mx-auto lg:flex-row ">
        <span className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Kamila Rakhmetulayeva. All rights
          reserved.
        </span>

        <div className="flex sm:gap-6 gap-2 sm:text-base text-xs flex-row ">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/bio">Bio</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/dj">DJ</NavLink>
          <NavLink href="/contacts">Contacts</NavLink>
        </div>
      </div>
    </footer>
  );
}
