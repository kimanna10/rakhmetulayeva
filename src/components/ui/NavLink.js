"use client";
import Link from "next/link";

export default function NavLink({ href, children, setIsOpen }) {
  const handleClick = () => {
    if (typeof setIsOpen === "function") {
      setTimeout(() => {
        setIsOpen(false);
      }, 100); // даёт время меню красиво закрыться
    }
  };
  return (
    <Link
      href={href}
      onClick={handleClick}
      className="uppercase relative inline-block after:block after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full hover:text-white py-5"
    >
      {children}
    </Link>
  );
}
