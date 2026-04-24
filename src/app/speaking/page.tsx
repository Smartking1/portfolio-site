import type { Metadata } from "next";
import Section from "@/components/Section";
import SpeakingCard from "@/components/SpeakingCard";
import { speaking } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Speaking — Ibekwe Kingsley",
  description:
    "Talks, workshops, and speaking engagements by Ibekwe Kingsley on AI and machine learning topics.",
};

export default function SpeakingPage() {
  return (
    <Section
      title="Speaking"
      subtitle="Talks, workshops, and community events"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speaking.map((talk) => (
          <SpeakingCard key={talk.title} talk={talk} />
        ))}
      </div>
    </Section>
  );
}
