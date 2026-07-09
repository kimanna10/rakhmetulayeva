import Section from "@/components/layouts/Section";
import ContactSection from "@/components/sections/ContactSection";
export const metadata = {
  title: "CONTACTS | RAKHMETULAYEVA KAMILA",
};
export const revalidate = 10;

export default function Contact() {
  return (
    <Section title="Contacts" id="contact">
      <ContactSection />
    </Section>
  );
}
