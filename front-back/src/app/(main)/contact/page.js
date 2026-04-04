import Section from "@/components/layouts/Section";
import ContactSection from "@/components/sections/ContactSection";
export default function Contact() {
  return (
    <main className="pt-[104px] flex-1">
      <Section title="Contacts" id="contact">
        <ContactSection />
      </Section>
    </main>
  );
}
