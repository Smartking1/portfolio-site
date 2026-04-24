// ═══════════════════════════════════════════════════════════════
// 📄 PUBLICATIONS DATA
// ═══════════════════════════════════════════════════════════════
//
// HOW TO USE:
//
//  ✅ ADD a publication  → Copy the template below, paste at the
//                          end of the array.
//
//  ✅ REMOVE one         → Delete the entire { ... } block
//                          (including the comma).
//
//  ✅ EDIT one           → Change any field value directly.
//
//  ✅ REORDER            → Move the { ... } block up or down.
//                          Publications display in the order listed.
//
// ───────────────────────────────────────────────────────────────
//  TEMPLATE — Copy this, uncomment, fill in your details:
// ───────────────────────────────────────────────────────────────
//
//  {
//    title: "Full Paper Title",
//    authors: "Author1, Author2, et al.",
//    venue: "Conference or Journal Name",
//    year: "2024",
//    link: "https://link-to-paper.com",     // optional
//  },
//
// ═══════════════════════════════════════════════════════════════

export interface Publication {
  /** Full title of the paper */
  title: string;

  /** Author list */
  authors: string;

  /** Conference, journal, or venue name */
  venue: string;

  /** Year of publication */
  year: string;

  /** URL to the paper (optional) */
  link?: string;
}

// ─── YOUR PUBLICATIONS (edit below) ──────────────────────────

const publications: Publication[] = [
  {
    title: "Electric Load Demand Forecasting for 2020–2030 Using Artificial Neural Networks",
    authors: "Ibekwe Kingsley et al.",
    venue: "Undergraduate Research Publication",
    year: "2023",
    link: "https://github.com/Smartking1/Load-demand-forecasting-for-the-year-2020-2030-using-Artificial-Intelligence-Neural-Network",
  },

  // ──────────────────────────────────────────────────────────
  // 👇 ADD NEW PUBLICATIONS BELOW THIS LINE
  // ──────────────────────────────────────────────────────────
];

export default publications;
