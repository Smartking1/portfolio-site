// ═══════════════════════════════════════════════════════════════
// 🗂️ SITE DATA — Central Hub
// ═══════════════════════════════════════════════════════════════
//
// All data is managed in separate files for easy editing:
//
//   📁 projects.ts        → Your projects (featured flag for homepage)
//   📁 experience.ts      → Work experience timeline
//   📁 writings.ts        → Blog articles and tutorials
//   📁 publications.ts    → Research papers
//   📁 speaking.ts        → Talks and workshops
//   📁 certifications.ts  → Professional credentials
//
// Edit those files directly to add, remove, or update entries.
// This file handles profile info, skills, and re-exports.
// ═══════════════════════════════════════════════════════════════

// ─── Re-exports from dedicated data files ────────────────────
export { default as projects, featuredProjects } from "./projects";
export type { Project } from "./projects";

export { default as experience } from "./experience";
export type { Experience } from "./experience";

export { default as writings } from "./writings";
export type { Writing } from "./writings";

export { default as publications } from "./publications";
export type { Publication } from "./publications";

export { default as speaking } from "./speaking";
export type { Speaking } from "./speaking";

export { default as certifications } from "./certifications";
export type { Certification } from "./certifications";

// ─── Profile ─────────────────────────────────────────────────

export const profile = {
  name: "Ibekwe Kingsley",
  title: "AI Engineer",
  subtitle: "AI Engineer | Applied AI Systems | Intelligent Agents",
  bio: `A knowledge-driven AI/ML Engineer and Python Developer with deep expertise in building applied AI systems, intelligent agents, and data-driven solutions. Passionate about leveraging machine learning, deep learning, and NLP to solve complex real-world problems across industries.`,
  email: "kingsleyibekwe.c@gmail.com",
  whatsapp: "https://wa.link/nd0qk2",
  social: {
    github: "https://github.com/Smartking1",
    linkedin: "https://www.linkedin.com/in/ibekwe-kingsley-ba0b0516a",
    twitter: "https://twitter.com/Ibekwekingsley0",
    medium: "https://medium.com/machine-learning-mastery",
  },
};

// ─── Skills ──────────────────────────────────────────────────

export const skills = [
  { category: "AI / ML", items: ["Machine Learning", "Deep Learning", "NLP", "AI Engineering", "Computer Vision"] },
  { category: "Languages", items: ["Python", "TypeScript", "HTML/CSS"] },
  { category: "Frameworks", items: ["LangChain", "CrewAI", "LlamaIndex", "TensorFlow", "Scikit-learn", "FastAPI", "Cohere"] },
  { category: "Cloud", items: ["AWS", "GCP", "Azure"] },
  { category: "Other", items: ["Data Scraping", "Sentiment Analysis", "Technical Writing", "Team Leadership"] },
];
