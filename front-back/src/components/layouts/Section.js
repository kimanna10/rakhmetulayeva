import GoBack from "@/components/ui/GoBack";
import TopButton from "@/components/ui/TopButton";

export default function Section({ title, children, className = "", id }) {
  return (
    <section className={`w-full md:py-20 py-14 ${className}`} id={id}>
      <div className="container mx-auto px-4">
        <GoBack />
        {title && (
          <h2 className="mb-10 text-2xl font-bold text-center uppercase lg:text-3xl">
            {title}
          </h2>
        )}
        {children}
        <TopButton />
      </div>
    </section>
  );
}
