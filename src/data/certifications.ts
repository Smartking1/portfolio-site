// ═══════════════════════════════════════════════════════════════
// 🏅 CERTIFICATIONS DATA
// ═══════════════════════════════════════════════════════════════
//
// HOW TO USE:
//
//  ✅ ADD a cert         → Copy the template below, paste at the
//                          end of the array.
//
//  ✅ REMOVE a cert      → Delete the entire { ... } block
//                          (including the comma).
//
//  ✅ EDIT a cert        → Change any field value directly.
//
//  ✅ REORDER            → Move the { ... } block up or down.
//                          Certifications display in the order listed.
//
// ───────────────────────────────────────────────────────────────
//  TEMPLATE — Copy this, uncomment, fill in your details:
// ───────────────────────────────────────────────────────────────
//
//  {
//    name: "Certification Name",
//    issuer: "Issuing Organization",
//    date: "2024",
//    credentialLink: "https://verify-link.com",     // optional
//  },
//
// ═══════════════════════════════════════════════════════════════

export interface Certification {
  /** Name of the certification */
  name: string;

  /** Organization that issued it */
  issuer: string;

  /** Year or date earned */
  date: string;

  /** URL to verify the credential (optional) */
  credentialLink?: string;
}

// ─── YOUR CERTIFICATIONS (edit below) ────────────────────────

const certifications: Certification[] = [
  {
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialLink: "https://learn.microsoft.com/en-us/users/ibekwekingsley-7472/credentials/eb3630cb90220d1a",
  },
  {
    name: "Fundamentals of Deep Learning",
    issuer: "Nvidia Deep Learning Institute",
    date: "2022",
    credentialLink: "https://drive.google.com/file/d/105KLVQ7zXXWk9LltJ8Xhnb93u0meywth/view?usp=sharing",
  },
  {
    name: "AI Ethics & Governance",
    issuer: "Securiti education",
    date: "2025",
    credentialLink: "https://education.securiti.ai/verification/1331D4CEF-1331D4B5E-12CF92F3D/",
  },
  {
    name: "Machine Learning A-Z",
    issuer: "Udemy",
    date: "2022",
    credentialLink: "https://www.udemy.com/certificate/UC-b8d3a868-a150-4132-938c-19e8922a3e72/",
  },
 

  // ──────────────────────────────────────────────────────────
  // 👇 ADD NEW CERTIFICATIONS BELOW THIS LINE
  // ──────────────────────────────────────────────────────────
];

export default certifications;
