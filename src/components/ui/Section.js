export default function Section({ title, children, className = "", id }) {
  return (
    <section className={`w-full py-20 ${className}`} id={id}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="mb-8 text-3xl font-bold text-center uppercase">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
}
