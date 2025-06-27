import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import ContactSection from "@/components/sections/ContactSection";
import { Lexend, Manrope } from "next/font/google";
import "./globals.css";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});
const lexendSans = Lexend({
  variable: "--font-lexend-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "RAKHMETULAYEVA KAMILA",
  description:
    "AKHMETULAYEVA KAMILA - Foun der of TOLK Company | Director | Creative Director | Choreoprapher | Movement Director",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexendSans.variable} ${manropeSans.variable}  antialiased bg-bg text-text font-manrope`}
      >
        <Header />
        <main className="pt-[104px]">
          {children}
          <ContactSection />
        </main>
        <Footer />
      </body>
    </html>
  );
}
