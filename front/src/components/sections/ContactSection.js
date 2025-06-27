import { getContact } from "@/lib/api/contact";
import { Mail } from "lucide-react";
import Section from "../layouts/Section";

export const revalidate = 60;

export default async function ContactSection() {
  const contact = await getContact();

  return (
    <Section title="Contact" id="contact">
      <div className="flex flex-col items-center justify-center gap-8 text-lg sm:flex-row">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-2 transition group hover:text-white"
        >
          <Mail size={24} />
          <span className="group-hover:underline">{contact.email}</span>
        </a>

        <a
          href={`https://instagram.com/${contact.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 transition group hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
          <span className="group-hover:underline">@{contact.instagram}</span>
        </a>
      </div>
    </Section>
  );
}
