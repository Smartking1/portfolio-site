import type { Metadata } from "next";
import Section from "@/components/Section";
import { publications } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Publications — Ibekwe Kingsley",
  description: "Research publications and academic papers by Ibekwe Kingsley.",
};

export default function PublicationsPage() {
  return (
    <Section
      title="Publications"
      subtitle="Research papers and academic contributions"
    >
      <div className="space-y-6">
        {publications.map((pub) => (
          <div
            key={pub.title}
            className="group rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-violet-400">
                  {pub.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-400">{pub.authors}</p>
                <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                  <span className="rounded-md bg-zinc-800 px-2 py-1">
                    {pub.venue}
                  </span>
                  <span>{pub.year}</span>
                </div>
              </div>
              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 rounded-lg border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-400 transition-all hover:border-zinc-500 hover:text-white"
                >
                  View
                </a>
              )}
            </div>
          </div>
        ))}

        {publications.length === 0 && (
          <p className="text-center text-zinc-500">
            Publications coming soon.
          </p>
        )}
      </div>
    </Section>
  );
}
