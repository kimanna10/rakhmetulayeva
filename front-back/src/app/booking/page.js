import Section from "@/components/layouts/Section";
import BookingForm from "@/components/sections/BookingForm";
export const metadata = {
  title: "BOOKING | RAKHMETULAYEVA KAMILA",
};

export default function Booking() {
  return (
    <Section title="Booking" id="booking">
      <BookingForm />
    </Section>
  );
}
