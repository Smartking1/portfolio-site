import type { Metadata } from "next";
import Section from "@/components/Section";
import CertificationCard from "@/components/CertificationCard";
import { certifications } from "@/data/siteData";

export const metadata: Metadata = {
  title: "Certifications — Ibekwe Kingsley",
  description:
    "Professional certifications and credentials earned by Ibekwe Kingsley in AI, cloud, and data science.",
};

export default function CertificationsPage() {
  return (
    <Section
      title="Certifications"
      subtitle="Professional credentials and continuous learning"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert) => (
          <CertificationCard key={cert.name} cert={cert} />
        ))}
      </div>
    </Section>
  );
}
