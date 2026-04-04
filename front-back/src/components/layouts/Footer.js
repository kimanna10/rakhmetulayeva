"use client";
import NavLink from "../ui/Navlink";
export default function Footer() {
  return (
    <footer className="w-full text-text">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 px-4 py-8 mx-auto sm:flex-row ">
        <span className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Kamila Rakhmetulayeva. All rights
          reserved.
        </span>

        <div className="flex sm:gap-6 sm:text-base text-sm gap-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/contact">Contacts</NavLink>
        </div>
      </div>
    </footer>
  );
}
