// ═══════════════════════════════════════════════════════════════
// 💼 EXPERIENCE DATA
// ═══════════════════════════════════════════════════════════════
//
// HOW TO USE:
//
//  ✅ ADD an entry      → Copy the template below, paste at the
//                         end of the array (or wherever you want
//                         it ordered).
//
//  ✅ REMOVE an entry   → Delete the entire { ... } block
//                         (including the comma).
//
//  ✅ EDIT an entry     → Change any field value directly.
//
//  ✅ REORDER           → Move the { ... } block up or down.
//                         Experience displays in the order listed.
//
// ───────────────────────────────────────────────────────────────
//  TEMPLATE — Copy this, uncomment, fill in your details:
// ───────────────────────────────────────────────────────────────
//
//  {
//    role: "Your Job Title",
//    company: "Company Name",
//    period: "Jan 2024 – Present",
//    type: "Full-time",               // Full-time | Contract | Internship | Community | Leadership | Program
//    description: [
//      "What you did or achieved in this role.",
//      "Another key responsibility or accomplishment.",
//      "Technologies or tools you used.",
//      "Impact or results you delivered.",
//    ],
//  },
//
// ═══════════════════════════════════════════════════════════════

export interface Experience {
  /** Your job title or role */
  role: string;

  /** Company or organization name */
  company: string;

  /** Date range, e.g. "Sep 2023 – Present" */
  period: string;

  /** Type badge: Full-time, Contract, Internship, Community, Leadership, Program (optional) */
  type?: string;

  /** Short bullet points describing what you did (optional, 3–4 lines recommended) */
  description?: string[];
}

// ─── YOUR EXPERIENCE (edit below) ────────────────────────────

const experience: Experience[] = [
  {
    role: "Data Scientist",
    company: "Periculum",
    period: "Jun 2025 – Present",
    type: "Full-time",
    description: [
      "Optimized data pipelines and automated ETL processes to improve accuracy, efficiency, and scalability of financial data analysis. with cross-functional teams to implement machine learning models for fraud detection, risk assessment, and customer segmentation.",
      "Developed and Refined algorithms for data processing, risk management and credit scoring engine for financial applications.",
      "Maintaining API enabled data analytics and credit scoring engine that provides predictive analysis into customers financial health data.",
    ],
  },
  {
    role: "AI/ML Engineer",
    company: "Nsibidi Fables Ltd",
    period: "May 2025 – Present",
    type: "Contract",
    description: [
      "Implemented text-to-image generative models on cloud GPU infrastructure, supporting scalable image generation for internal animation teams.",
      "Engineered machine learning–based sketch-cleaning pipelines that converted rough artist inputs into production-ready assets, reducing manual cleanup time by 30%.",
      "Fine-tuned Stable Diffusion models using LoRA adapters, improving stylistic consistency and reducing prompt variance for company-specific visual IP",
    ],
  },
  {
    role: "AI/ML Engineer",
    company: "Quantum Side Technologies",
    period: "Nov 2024 – Apr 2025",
    type: "Contract",
    description: [
      "Performed data analysis and visualization to support business decisions.",
      "Built predictive models for customer behavior and churn analysis.",
      "Automated data pipelines using Python and SQL.",
      "Presented findings and insights to senior leadership.",
    ],
  },
  {
    role: "Data Science Intern",
    company: "Wiretooth Technologies",
    period: "Mar 2023 – Sep 2023",
    type: "Internship",
    description: [
      "Performed data analysis and visualization to support business decisions.",
      "Built predictive models for customer behavior and churn analysis.",
      "Automated data pipelines using Python and SQL.",
      "Presented findings and insights to senior leadership.",
    ],
  },
  {
    role: "Virtual Experience Program",
    company: "British Airways",
    period: "Jan 2023 – Feb 2023",
    type: "Program",
    description: [
      "Completed a data science simulation focused on customer review analysis.",
      "Built a predictive model to understand factors influencing buying behavior.",
      "Applied web scraping techniques to gather customer feedback data.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "Omdena",
    period: "Jun 2020 – Jan 2025",
    type: "Community",
    description: [
      "Contributed to global AI projects addressing real-world social challenges.",
      "Collaborated with international teams on NLP and computer vision tasks.",
      "Developed and deployed ML models for healthcare and environmental projects.",
    ],
  },
  {
    role: "AWS Community Builder",
    company: "Amazon Web Services",
    period: "2022",
    type: "Community",
    description: [
      "Selected as an AWS Community Builder for Machine Learning.",
      "Created content and shared knowledge about AWS ML services.",
      "Engaged with the global cloud and AI community.",
    ],
  },
  {
    role: "Lead Data Scientist",
    company: "Network UNN",
    period: "2022 – 2024",
    type: "Leadership",
    description: [
      "Led a team of data science enthusiasts in research and project development.",
      "Organized workshops and bootcamps on Python, ML, and data analysis.",
      "Mentored junior members in building end-to-end data science projects.",
    ],
  },
  {
    role: "Intern",
    company: "Hamoye",
    period: "2020",
    type: "Internship",
    description: [
      "Completed an intensive data science internship program.",
      "Built regression and classification models on real-world datasets.",
      "Gained hands-on experience with Pandas, Scikit-learn, and data visualization.",
    ],
  },

  // ──────────────────────────────────────────────────────────
  // 👇 ADD NEW EXPERIENCE BELOW THIS LINE
  // ──────────────────────────────────────────────────────────
];

export default experience;
