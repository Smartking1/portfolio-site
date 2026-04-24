import { Writing } from "@/data/siteData";

interface WritingCardProps {
  article: Writing;
}

export default function WritingCard({ article }: WritingCardProps) {
  return (
    <a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900 hover:shadow-lg hover:shadow-violet-500/5"
    >
      <div className="flex items-center gap-3 text-xs text-zinc-500">
        <span className="rounded-md bg-violet-500/10 px-2 py-1 font-medium text-violet-400">
          {article.platform}
        </span>
        <span>{article.date}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-violet-400">
        {article.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-zinc-400">
        {article.excerpt}
      </p>
      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-violet-400 transition-colors group-hover:text-violet-300">
        Read article
        <svg
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </div>
    </a>
  );
}
