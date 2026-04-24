import type { Metadata } from "next";
import Section from "@/components/Section";
import WritingCard from "@/components/WritingCard";
import { writings } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Writing — Ibekwe Kingsley",
  description:
    "Articles and tutorials on AI, machine learning, and data science by Ibekwe Kingsley.",
};

export default function WritingPage() {
  return (
    <Section
      title="Writing"
      subtitle="Articles, tutorials, and thought pieces on AI and machine learning"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {writings.map((article) => (
          <WritingCard key={article.title} article={article} />
        ))}
      </div>
    </Section>
  );
}
