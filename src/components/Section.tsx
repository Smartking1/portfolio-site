interface SectionProps {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-24 px-6 ${className}`}>
      <div className="mx-auto max-w-6xl">
        {title && (
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
              <span className="text-violet-500">.</span>
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-zinc-400">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
