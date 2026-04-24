// ═══════════════════════════════════════════════════════════════
// 🎤 SPEAKING DATA
// ═══════════════════════════════════════════════════════════════
//
// HOW TO USE:
//
//  ✅ ADD a talk         → Copy the template below, paste at the
//                          end of the array.
//
//  ✅ REMOVE a talk      → Delete the entire { ... } block
//                          (including the comma).
//
//  ✅ EDIT a talk        → Change any field value directly.
//
//  ✅ REORDER            → Move the { ... } block up or down.
//                          Talks display in the order listed.
//
// ───────────────────────────────────────────────────────────────
//  TEMPLATE — Copy this, uncomment, fill in your details:
// ───────────────────────────────────────────────────────────────
//
//  {
//    title: "Talk Title",
//    event: "Event or Conference Name",
//    date: "2024",
//    images: [
//      "/images/talk-stage.jpg",
//      "/images/talk-audience.jpg",
//      "/images/talk-slides.jpg",
//    ],
//    description: "Brief description of the talk.",   // optional
//    link: "https://youtube.com/your-talk",           // optional — video, slides, event page, or blog
//  },
//
// ───────────────────────────────────────────────────────────────
//  IMAGES:
//    • Drop talk images into: public/images/
//    • Reference them as: "/images/filename.jpg"
//    • Use 1 image or multiple — the card auto-adapts
// ═══════════════════════════════════════════════════════════════

export interface Speaking {
  /** Title of the talk or workshop */
  title: string;

  /** Event, conference, or meetup name */
  event: string;

  /** Year or date of the talk */
  date: string;

  /** Array of image paths in /public folder. Displays as a carousel if multiple. */
  images: string[];

  /** Brief description of the talk (optional) */
  description?: string;

  /** URL to video, slides, event page, or blog recap (optional) */
  link?: string;
}

// ─── YOUR TALKS (edit below) ─────────────────────────────────

const speaking: Speaking[] = [
  {
    title: "Catalyzing Africa DeepTech Ecosystem",
    event: "DeepTech Africa Summit",
    date: "2026",
    images: [
      "/images/deeptechfly.jpeg",
      "/images/deeptech.jpeg",
    ],
    description:
      "I gave a detailed talk on how we are building cutting edge tools for African animation ecosystem.",
  },
  {
    title: "Breaking Tech barriers",
    event: "Arbitrum",
    date: "2024",
    images: [
      "/images/arbitrumfly.jpeg",
      "/images/arbitrum.jpeg",
      "/images/arbitrum2.jpeg",
    ],
    description:
      "I spoke on how to get started with Data Science and how to build a career in Data Science.",
  },
  {
    title: "Career Symposium",
    event: "AIESEC in Enugu",
    date: "2024",
    images: [
      "/images/aiesecfly2.jpeg",
      "/images/aiesec1.jpeg",
      "/images/aiesec.jpeg",
    ],
    description:
      "I spoke on the challenges faced by begineers in tech and how to overcome them.",
  },

  {
    title: "Breaking into Tech",
    event: "NACOSS UNN",
    date: "2024",
    images: [
      "/images/breakinttech.jpeg",
      "/images/bitech.jpeg",
    ],
    description:
      "I handled a breakout session on how to get started with Data Science and how to build a career in Data Science.",
  },

  {
    title: "TechXcel",
    event: "Google developer student club UNN",
    date: "2024",
    images: [
      "/images/techexcefly.jpeg",
      "/images/techexcel.jpeg",
    ],
    description:
      "I spoke on the challenges faced by students in tech and how to overcome them.",
  },

  // ──────────────────────────────────────────────────────────
  // 👇 ADD NEW TALKS BELOW THIS LINE
  // ──────────────────────────────────────────────────────────
];

export default speaking;
