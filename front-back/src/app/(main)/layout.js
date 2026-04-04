import Footer from "@/components/layouts/Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-dvh flex flex-col">
      {children}
      <Footer />
    </div>
  );
}
