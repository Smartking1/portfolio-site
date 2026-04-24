// ═══════════════════════════════════════════════════════════════
// 📁 PROJECTS DATA
// ═══════════════════════════════════════════════════════════════
//
// HOW TO USE:
//
//  ✅ ADD a project    → Copy the template below and paste it
//                        at the end of the array.
//
//  ✅ REMOVE a project → Delete the entire { ... } block for
//                        that project (including the comma).
//
//  ✅ EDIT a project   → Change any field value directly.
//
//  ✅ REORDER          → Move the { ... } block up or down.
//                        Projects display in the order listed.
//
// ───────────────────────────────────────────────────────────────
//  TEMPLATE — Copy this, uncomment, fill in your details:
// ───────────────────────────────────────────────────────────────
//
//  {
//    title: "Project Name",
//    description: "A short description of what this project does.",
//    image: "/images/your-image.jpg",
//    tags: ["Tag1", "Tag2", "Tag3"],
//    link: "https://github.com/your-repo",         // optional
//    featured: true,                                // shows on homepage
//  },
//
// ───────────────────────────────────────────────────────────────
//  IMAGES:
//    • Drop project images into: public/images/
//    • Reference them as: "/images/filename.jpg"
//    • Supported formats: .jpg, .jpeg, .png, .webp
// ═══════════════════════════════════════════════════════════════

export interface Project {
  /** Project name displayed as the card title */
  title: string;

  /** Brief description (2-3 sentences recommended) */
  description: string;

  /** Path to image in /public folder, e.g. "/images/photo.jpg" */
  image: string;

  /** Technology tags shown as badges on the card */
  tags: string[];

  /** Link to GitHub repo or live demo (optional) */
  link?: string;

  /** If true, shows on the homepage "Selected Work" section */
  featured?: boolean;
}

// ─── YOUR PROJECTS (edit below) ──────────────────────────────

const projects: Project[] = [
  {
    title: "AI Powered Educational Chatbot",
    description:
      "An AI conversational chatbot that helps you in your personal study and research. Upload a PDF file and the bot allows you to query the PDF and get answers tailored to your question.",
    image: "/images/EduBot.jpeg",
    tags: ["LangChain", "NLP", "Python", "RAG"],
    link: "https://github.com/Smartking1/edubot-v2",
    featured: true,
  },
  {
    title: "AI Resume Builder",
    description:
      "An AI-powered resume builder that helps users create a professional resume in minutes. The tool uses AI to generate a resume based on the user's input and preferences.",
    image: "/images/resume.PNG",
    tags: ["AI", "Python", "Generative AI"],
    link: "https://github.com/Smartking1/AI-Resume-Builder",
    featured: true,
  },
  {
    title: "AI Powered Customer Support Chatbot",
    description:
      "A customer support chatbot that helps users with their queries and provides them with relevant information.",
    image: "/images/csagent.png",
    tags: ["NLP", "AI Agents", "Chatbot"],
    link: "https://github.com/Smartking1/AI-CustomerSupport-Agent",
    featured: true,
  },
  {
    title: "Electric Load Demand Forecasting",
    description:
      "Forecasting energy consumption demand for 2020–2030 using LSTM neural networks across Residential, Commercial, and Industrial sectors.",
    image: "/images/project 4.jpg",
    tags: ["LSTM", "Deep Learning", "Time Series"],
    link: "https://github.com/Smartking1/Load-demand-forecasting-for-the-year-2020-2030-using-Artificial-Intelligence-Neural-Network",
    featured: true,
  },
  {
    title: "MarketSense AI",
    description:
      "Advanced multi-agent AI system for comprehensive cryptocurrency market analysis using specialized AI agents with access to real-time on-chain data and news sources.",
    image: "/images/Marketsense.png",
    tags: ["AI Agents", "Crypto", "Market Analysis"],
    link: "https://github.com/Smartking1/MarketSenseAI",
    featured: true,
  },
  {
    title: "Facial Recognition Attendance System",
    description:
      "A smart automated attendance system utilizing face recognition technology and ESP32 microcontroller to seamlessly track student attendance in educational institutions.",
    image: "/images/project 6.jpeg",
    tags: ["Computer Vision", "IoT", "ESP32"],
    link: "https://github.com/Smartking1/Facial-Recognition-attendance-system-utilizing-ESP32-Micro-controller",
    featured: true,
  },
  {
    title: "Realtime AI Health Translation System",
    description:
      "A real-time AI-powered health translation and transcription system for seamless interaction between health professionals and patients with language differences.",
    image: "/images/translation.PNG",
    tags: ["NLP", "Healthcare", "Real-time"],
    link: "https://github.com/Smartking1/health_translation_app",
    featured: false,
  },

  // ──────────────────────────────────────────────────────────
  // 👇 ADD NEW PROJECTS BELOW THIS LINE
  // ──────────────────────────────────────────────────────────
];

// ─── Helper exports (don't edit below) ───────────────────────

/** All projects */
export default projects;

/** Only projects marked as featured (for homepage) */
export const featuredProjects = projects.filter((p) => p.featured);
