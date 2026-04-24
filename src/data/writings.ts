// ═══════════════════════════════════════════════════════════════
// ✍️ WRITING DATA
// ═══════════════════════════════════════════════════════════════
//
// HOW TO USE:
//
//  ✅ ADD an article    → Copy the template below, paste at the
//                         end of the array.
//
//  ✅ REMOVE an article → Delete the entire { ... } block
//                         (including the comma).
//
//  ✅ EDIT an article   → Change any field value directly.
//
//  ✅ REORDER           → Move the { ... } block up or down.
//                         Articles display in the order listed.
//
// ───────────────────────────────────────────────────────────────
//  TEMPLATE — Copy this, uncomment, fill in your details:
// ───────────────────────────────────────────────────────────────
//
//  {
//    title: "Article Title",
//    excerpt: "A short summary of what the article covers.",
//    date: "2024",
//    link: "https://medium.com/your-article-link",
//    platform: "Medium",              // Medium | Dev.to | Hashnode | Personal Blog | etc.
//  },
//
// ═══════════════════════════════════════════════════════════════

export interface Writing {
  /** Article title */
  title: string;

  /** Short summary / excerpt (1-2 sentences) */
  excerpt: string;

  /** Year or date published */
  date: string;

  /** URL to the full article */
  link: string;

  /** Platform where it's published (shown as a badge) */
  platform: string;
}

// ─── YOUR ARTICLES (edit below) ──────────────────────────────

const writings: Writing[] = [
  {
    title: "How to Scrape Millions of Tweets Using SNScraper",
    excerpt:
      "A comprehensive guide on leveraging the SNScraper library to collect large-scale Twitter data for analysis and research.",
    date: "2023",
    link: "https://medium.com/machine-learning-mastery/how-to-scrape-millions-of-tweets-using-snscraper-aa47cee400ec",
    platform: "Medium",
  },
  {
    title: "Building Intelligent Agents with LangChain",
    excerpt:
      "Exploring how to construct autonomous AI agents using LangChain's agent framework, tool integrations, and memory systems.",
    date: "2024",
    link: "https://medium.com/machine-learning-mastery",
    platform: "Medium",
  },
  {
    title: "Understanding RAG: Retrieval-Augmented Generation",
    excerpt:
      "A deep dive into the RAG architecture pattern and how it enhances LLM responses with external knowledge retrieval.",
    date: "2024",
    link: "https://medium.com/machine-learning-mastery",
    platform: "Medium",
  },

  // ──────────────────────────────────────────────────────────
  // 👇 ADD NEW ARTICLES BELOW THIS LINE
  // ──────────────────────────────────────────────────────────
];

export default writings;
