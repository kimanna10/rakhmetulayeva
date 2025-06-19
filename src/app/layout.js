import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
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
  title: "Rakhmetulayeva Kamila",
  description: "Rakhmetulayeva Kamila - choreographer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lexendSans.variable} ${manropeSans.variable}  antialiased bg-bg text-text font-manrope`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
