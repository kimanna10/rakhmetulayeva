"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-text">
      <div className="container flex flex-col-reverse items-center justify-between gap-4 px-4 py-8 mx-auto sm:flex-row ">
        <span className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Kamila Rakhmetulayeva. All rights
          reserved.
        </span>

        <div className="flex gap-6">
          <Link
            href="/about"
            className="text-sm uppercase transition-colors duration-300 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="text-sm uppercase transition-colors duration-300 hover:text-white"
          >
            Projects
          </Link>
          <Link
            href="/contact"
            className="text-sm uppercase transition-colors duration-300 hover:text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
