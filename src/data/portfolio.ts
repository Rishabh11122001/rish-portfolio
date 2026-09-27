// PERSONAL LINKS: plug in your GitHub username, LinkedIn URL, email and resume PDF.
// Empty URLs intentionally render as unavailable, never as broken '#' links.
export const profile = {
  name: "Rishabh Bhagchandani",
  githubUsername: "Rishabh11122001", // Replace if needed.
  linkedinUrl: "https://www.linkedin.com/in/rishabh-bhagchandani-1bab46258/", // e.g. https://www.linkedin.com/in/YOUR_USERNAME/
  email: "rishabhbhagchandani29@gmail.com", // Your public contact email.
  resumeUrl: "/resume.pdf", // Put resume.pdf in public/ and set this to '/resume.pdf'.
};
export const navigation = [
  "Home",
  "About",
  "Experience",
  "Projects",
  "Mini Projects",
  "Achievements",
  "Contact",
];
export const sectionId = (label: string) =>
  label.toLowerCase().replaceAll(" ", "-");
export type Project = {
  title: string;
  category: string;
  icon: string;
  description: string;
  demoLabel?: string; // Override the "Live Demo" button label (e.g. "Case Study").
  bullets: string[];
  tags: string[];
  github: string;
  demo: string;
  metric: string;
  metricLabel: string;
};
// PROJECT LINKS: plug in the exact GitHub repository and live demo URLs below.
// Never put API keys or private credentials in this frontend file.
export const projects: Project[] = [
  {
    title: "RecallAI",
    category: "AI STUDY ASSISTANT",
    icon: "brain",
    description:
      "Free-form notes become structured flashcards and quizzes, ready for your next study session.",
    bullets: [
      "2 study formats powered by an Express + Groq backend and stateful React frontend.",
      "Zod validates untrusted LLM output; handles malformed, empty and timed-out responses.",
      "AbortController + request IDs prevent stale responses. Deployed on Render.",
    ],
    tags: ["React", "TypeScript", "Express", "Zod", "Groq"],
    github: "https://github.com/Rishabh11122001/recall-ai",
    demo: "https://recall-ai-vzr9.onrender.com",
    metric: "2",
    metricLabel: "study formats",
  },
  {
    title: "PulseBoard",
    category: "PERFORMANCE & ANALYTICS",
    icon: "chart",
    description:
      "A responsive analytics workspace for exploring large synthetic e-commerce datasets entirely in the browser.",
    bullets: [
      "Handles 50K–250K synthetic transactions with live KPIs and chart-driven cross-filtering.",
      "Single-pass filtering and aggregation, memoization and debounced search.",
      "Virtualized rows keep large transaction tables manageable.",
    ],
    tags: ["React", "TypeScript", "Recharts", "Vite"],
    github:
      "https://github.com/Rishabh11122001/pulseboard-performance-dashboard",
    demo: "https://pulseboard-performance-dashboard.vercel.app",
    metric: "250K",
    metricLabel: "transactions",
  },
  {
    title: "Spice Garden",
    category: "CLIENT PROJECT · FULL STACK",
    icon: "restaurant",
    description:
      "A restaurant management platform built for a real client and everyday operations.",
    bullets: [
      "GST-aware billing, real-time orders, payment analytics and a kitchen display system.",
      "Socket.io connects order updates; resolved connectivity, CORS and timezone issues.",
      "PostgreSQL/Supabase data layer, deployed across Railway + Vercel.",
    ],
    tags: ["React", "Node.js", "Express", "Supabase", "Socket.io"],
    github: "",
    demo: "/spice-garden-case-study.html",
    demoLabel: "Case Study",
    metric: "Live",
    metricLabel: "order updates",
  },
  {
    title: "Data Analyst Copilot",
    category: "AI-POWERED DATA ANALYSIS",
    icon: "sparkles",
    description:
      "Ask a question in plain English. Get validated PostgreSQL queries, live data, charts and insights.",
    bullets: [
      "Queries a 99K-order warehouse; visualizes results with Plotly.",
      "Gemini-to-Groq fallback, query timeouts and destructive-SQL blocking.",
      "Validated with 24 automated tests.",
    ],
    tags: ["Python", "PostgreSQL", "Streamlit", "Gemini", "Groq", "Plotly"],
    github: "https://github.com/Rishabh11122001/ai-data-analyst-copilot",
    demo: "https://ai-data-analyst-copilot-9dmnh4izbccbpgpuyur8e2.streamlit.app",
    metric: "24",
    metricLabel: "automated tests",
  },
  {
    title: "Customer Churn Analysis",
    category: "MACHINE LEARNING",
    icon: "users",
    description:
      "Exploring customer behaviour and predicting churn with a reproducible machine-learning workflow.",
    bullets: [
      "Analysed a 2,000-customer synthetic dataset stored in SQLite.",
      "Trained 2 model families: Logistic Regression and Random Forest.",
    ],
    tags: ["Python", "Pandas", "Scikit-learn", "SQLite"],
    github:
      "https://github.com/Rishabh11122001/customer-churn-analysis-prediction",
    demo: "/churn_analysis.html",
    metric: "2,000",
    metricLabel: "customers analysed",
  },
  {
    title: "E-Commerce Revenue & Operations",
    category: "BUSINESS INTELLIGENCE",
    icon: "database",
    description:
      "Turning the Olist Brazilian e-commerce dataset into a structured view of revenue and operations.",
    bullets: [
      "Built a PostgreSQL star schema for analytics on the Olist dataset.",
      "Created a Power BI dashboard with DAX measures and Excel analysis.",
    ],
    tags: ["PostgreSQL", "Power BI", "DAX", "Excel"],
    github:
      "https://github.com/Rishabh11122001/ecommerce-revenue-operations-analytics",
    demo: "/ecommerce-dashboard-demo.html",
    metric: "Olist",
    metricLabel: "e-commerce data",
  },
];
const projectOrder = [
  "Data Analyst Copilot",
  "Customer Churn Analysis",
  "E-Commerce Revenue & Operations",
  "PulseBoard",
  "RecallAI",
  "Spice Garden",
];
projects.sort(
  (a, b) => projectOrder.indexOf(a.title) - projectOrder.indexOf(b.title),
);

export const categories = [
  "All",
  "AI / Python",
  "Web Dev",
  "Hackathon",
] as const;
export type Category = (typeof categories)[number];
export const miniProjects: {
  title: string;
  description: string;
  tags: string[];
  category: Category;
  icon: string;
  github?: string;
}[] = [
  {
    title: "Face Detection System",
    description:
      "Live webcam face detection with Haar Cascade and local database storage.",
    tags: ["Python", "OpenCV"],
    category: "AI / Python",
    icon: "scan",
  },
  {
    title: "AI Hand Tracking",
    description:
      "21-point hand landmark detection for gesture-based interaction.",
    tags: ["Python", "MediaPipe", "OpenCV"],
    category: "AI / Python",
    icon: "hand",
  },
  {
    title: "Gesture Volume Control",
    description:
      "Real-time volume control through thumb–index finger distance.",
    tags: ["Python", "MediaPipe", "Pycaw"],
    category: "AI / Python",
    icon: "volume",
  },
  {
    title: "AI Personal Assistant",
    description: "Voice-powered web search, app launches and task automation.",
    tags: ["Python", "SpeechRecognition", "NLP"],
    category: "AI / Python",
    icon: "mic",
  },
  {
    title: "WhatsApp Automation Bot",
    description:
      "Scheduled and bulk messaging using a local recipient database.",
    tags: ["Python", "PyWhatKit"],
    category: "AI / Python",
    icon: "message",
  },
  {
    title: "Facial Inpainting System",
    description:
      "Deep-learning image inpainting to restore or remove facial regions.",
    tags: ["Python", "OpenCV", "Deep Learning"],
    category: "AI / Python",
    icon: "image",
  },
  {
    title: "Alumni Platform",
    description:
      "Networking and mentorship matching for our team’s SIH 2024 submission.",
    tags: ["Team Project", "SIH 2024"],
    category: "Hackathon",
    icon: "users",
  },
  {
    title: "DiagnoMate",
    description:
      "Multilingual healthcare chatbot with WhatsApp/SMS for our SIH 2025 submission.",
    tags: ["Rasa", "Dialogflow", "WhatsApp API"],
    category: "Hackathon",
    icon: "message",
  },
  {
    title: "Countdown Timer",
    description: "Real-time interval updates with Django template integration.",
    tags: ["Django", "JavaScript"],
    category: "Web Dev",
    icon: "timer",
  },
  {
    title: "Python Tutorial Website",
    description:
      "A multi-tab learning interface with 5 programming sections and live code examples.",
    tags: ["HTML5", "CSS3", "JavaScript"],
    category: "Web Dev",
    icon: "code",
  },
  {
    title: "Actor Biography Website",
    github: "https://github.com/Rishabh11122001/Informative-Page",
    description:
      "Responsive Flexbox biography cards, hover effects and movie links.",
    tags: ["HTML5", "CSS3"],
    category: "Web Dev",
    icon: "film",
  },
  {
    title: "Age Calculator",
    description:
      "Birth-date validation and accurate age calculations using Python datetime.",
    tags: ["Django", "Python"],
    category: "Web Dev",
    icon: "calendar",
  },
];
