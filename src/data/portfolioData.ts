import { Project, Certification, ExperienceItem, TimelineMilestone, SkillItem, ProficiencyItem, ToolItem } from '../types';

import heroBoyDock from "../assets/images/72579bcd-b15b-4487-8152-b0de680cf3bd.png";
import aboutDesk from "../assets/images/3ab1fa2e-f740-4152-b888-0d844e731b5b.png";
import toriiSunset from "../assets/images/torii_sunset_anime_1787215212077.jpg";
import faceRecog from "../assets/images/image.png";
import parkVision from "../assets/images/proj_parkvision_1787215264863.jpg";
import foodWise from "../assets/images/proj_foodwise_1787215281276.jpg";
import gradeSys from "../assets/images/proj_grade_sys_1787215298194.jpg";

export const PERSONAL_INFO = {
  name: "Teja Swin Volisetty",
  shortName: "Teja Swin",
  role: "Computer Science Engineering Student",
  focus: "AI, Software & Data Analysis",
  university: "B.Tech CSE KL University",
  location: "Vijayawada, Andhra Pradesh, India",
  email: "tejaswin.volisetty@gmail.com",
  phone: "+91 9121494695",
  linkedin: "https://linkedin.com/in/volisetty-tejaswin",
  github: "https://github.com/TejaVolisetty",
  xTwitter: "https://twitter.com",
  youtube: "https://youtube.com",
  instagram: "https://instagram.com",
  bio: "A Computer Science Engineering student passionate about AI, software, data analysis, and building solutions that create real-world impact.",
  aboutLong: "I'm Teja Swin Volisetty, a Computer Science Engineering student passionate about AI, software, data analysis, and building solutions that create real-world impact. I believe in continuous learning, creative problem-solving, and using technology to make a better tomorrow."
};

// Generated backdrop images
export const IMAGES = {
  heroBoyDock,
  aboutDesk,
  toriiSunset,
  faceRecog,
  parkVision,
  foodWise,
  gradeSys,
};

export const TECHNICAL_SKILLS: SkillItem[] = [
  { name: "Python", icon: "python", color: "#387EB8", category: "core" },
  { name: "SQL", icon: "sql", color: "#00758F", category: "db" },
  { name: "Data Analytics", icon: "bar-chart", color: "#10B981", category: "core" },
  { name: "Excel (Pivot/XLOOKUP)", icon: "excel", color: "#107C41", category: "core" },
  { name: "Data Cleaning", icon: "filter", color: "#34D399", category: "core" },
  { name: "Statistical Analysis", icon: "chart", color: "#8B5CF6", category: "core" },
  { name: "Java", icon: "java", color: "#E76F00", category: "core" },
  { name: "JavaScript", icon: "javascript", color: "#F7DF1E", category: "core" },
  { name: "React", icon: "react", color: "#61DAFB", category: "core" },
  { name: "Machine Learning", icon: "brain", color: "#EC4899", category: "ai" },
  { name: "Deep Learning", icon: "network", color: "#A855F7", category: "ai" },
  { name: "Computer Vision", icon: "eye", color: "#F43F5E", category: "ai" },
  { name: "AWS", icon: "aws", color: "#FF9900", category: "cloud" },
  { name: "Docker", icon: "docker", color: "#2496ED", category: "cloud" },
  { name: "MySQL", icon: "mysql", color: "#00758F", category: "db" },
  { name: "Git", icon: "git", color: "#F05032", category: "tool" },
  { name: "Linux", icon: "linux", color: "#FCC624", category: "tool" },
  { name: "TensorFlow", icon: "tensorflow", color: "#FF6F00", category: "ai" },
  { name: "OpenCV", icon: "opencv", color: "#5C3EE8", category: "ai" },
];

export const SOFT_SKILLS = [
  { name: "Stakeholder Communication", icon: "message-square", desc: "Technical & executive reporting" },
  { name: "Attention to Detail", icon: "search", desc: "Data validation & quality control" },
  { name: "Root-Cause Analysis", icon: "target", desc: "Forensic problem-solving" },
  { name: "Cross-Team Collaboration", icon: "users", desc: "Synergy & collaborative delivery" },
  { name: "Problem Solving", icon: "target", desc: "Analytical mindset & debugging" },
  { name: "Leadership", icon: "shield", desc: "Guiding ideas into execution" },
];

export const SKILL_PROFICIENCY: ProficiencyItem[] = [
  { name: "Python & SQL", percentage: 90 },
  { name: "Data Analytics & Excel", percentage: 88 },
  { name: "Data Cleaning & Validation", percentage: 88 },
  { name: "Statistical Analysis", percentage: 85 },
  { name: "Machine Learning", percentage: 85 },
  { name: "Database Management", percentage: 84 },
  { name: "Computer Vision", percentage: 80 },
  { name: "Web Development", percentage: 82 },
  { name: "AI Tools", percentage: 86 },
  { name: "Cloud & DevOps", percentage: 75 },
];

export const TOOLS_I_USE: ToolItem[] = [
  { name: "MS Excel", icon: "excel", category: "Data Analytics" },
  { name: "Google Sheets", icon: "sheets", category: "Data Analytics" },
  { name: "MS PowerPoint", icon: "ppt", category: "Reporting" },
  { name: "MS Word", icon: "word", category: "Documentation" },
  { name: "Jupyter", icon: "jupyter", category: "Data Science" },
  { name: "VS Code", icon: "vscode", category: "IDE" },
  { name: "GitHub", icon: "github", category: "VCS" },
  { name: "Postman", icon: "postman", category: "API" },
  { name: "Linux", icon: "linux", category: "OS" },
  { name: "Figma", icon: "figma", category: "Design" },
];

export const PROJECTS: Project[] = [
  {
    id: "discovery-engine-ai",
    title: "Discovery-Engine-Ai",
    category: "AI & Recommendation Systems",
    tags: ["FAISS", "SentenceTransformers", "FastAPI", "Two-Tower Scoring", "PyTorch", "React 19"],
    description: "Modular, high-performance e-commerce recommendation engine with sub-80ms real-time session adaptation, 35% category diversity cap, and deterministic explainability.",
    fullDescription: "Discovery Engine addresses modern e-commerce recommendation challenges—lack of real-time session adaptation, category echo chambers, and opaque black-box outputs—through a modular, high-performance architecture featuring FAISS vector search (<5ms), Two-Tower session scoring, a 35% category diversity guardrail, deterministic explainability, and DPDP privacy compliance.",
    image: IMAGES.faceRecog,
    features: [
      "Sub-80ms Real-Time Inference: Vector candidate retrieval via FAISS IndexFlatIP (<5ms)",
      "Two-Tower Session Scorer: Blends cosine similarity, exponential recency decay over 5 events, & popularity priors",
      "35% Category Diversity Guardrail: Re-orders feeds so no category exceeds 35% without discarding items",
      "Explainability & DPDP Privacy: Plain-English reason captions with SHA-256 PII pseudonymization & consent checks"
    ],
    techStack: [
      "Python 3.11", "FastAPI", "PyTorch", "FAISS", "SentenceTransformers", "React 19", "Vite", "Tailwind CSS v4", "Docker", "Redis"
    ],
    techStackCategorized: {
      backend: ["Python 3.11", "FastAPI", "Uvicorn", "PyTorch", "FAISS (faiss-cpu)", "SentenceTransformers", "Pandas", "PyArrow", "PyTest", "HTTPX"],
      frontend: ["React 19", "Vite", "Tailwind CSS v4", "Axios", "Plus Jakarta Sans Typography"],
      infrastructure: ["Docker (multi-stage builds)", "Docker Compose", "Nginx", "Redis"]
    },
    githubUrl: "https://github.com/TejaVolisetty/Discovery-Engine-Ai",
    liveUrl: "https://github.com/TejaVolisetty/Discovery-Engine-Ai",
    metrics: "Sub-80ms Inference Latency (<5ms FAISS Vector Search) | 35% Category Diversity Cap",
    problemStatement: {
      challenges: [
        {
          title: "Lack of Real-Time Session Adaptation",
          desc: "Recommendations fail to update dynamically as users browse within a single session."
        },
        {
          title: "Category Echo Chambers",
          desc: "Oversaturated feeds bombard shoppers with repetitive product categories."
        },
        {
          title: "Opaque Black-Box Outputs",
          desc: "Users cannot understand why specific items are recommended to them, diminishing trust."
        }
      ],
      solutions: [
        {
          title: "Sub-80ms Real-Time Inference",
          desc: "Vector retrieval via FAISS (IndexFlatIP) in under 5ms."
        },
        {
          title: "Two-Tower Session Scorer",
          desc: "Blends base cosine similarity, exponential recency decay over the last 5 session events, and log-scaled popularity priors."
        },
        {
          title: "35% Category Diversity Guardrail",
          desc: "Re-orders feeds so no single product category exceeds 35% of the returned set, demoting overrepresented items down the list instead of discarding them."
        },
        {
          title: "Explainability & DPDP Privacy",
          desc: "Attaches plain-English reason captions without LLM latency, while pseudonymizing customer IDs into SHA-256 hashes and enforcing consent checks."
        }
      ]
    },
    workflow: {
      pipeline: ["1. Embeddings", "2. Vector Retrieval", "3. Two-Tower Scoring", "4. Diversity Cap", "5. Explainability"],
      equation: "Final Score = 0.50 · Sim_recent + 0.40 · ∑(w_i · Sim_i) + 0.10 · [ln(1 + Pop) / ln(1 + MaxPop)]",
      equationNote: "where w_i = e^(-0.4(5 - i)) applies exponential decay to session events over the last 5 user actions.",
      stages: [
        {
          name: "Multimodal Embeddings",
          desc: "Text representations (Title + Category + Attributes + Description) are encoded using sentence-transformers (all-MiniLM-L6-v2) into normalized 384-dimensional vectors."
        },
        {
          name: "FAISS Vector Retrieval",
          desc: "Candidate items are retrieved in <5ms using inner-product similarity (IndexFlatIP d=384)."
        },
        {
          name: "Two-Tower Session Scoring",
          desc: "Combines recent vector similarity, weighted historical session embeddings with exponential recency decay, and log-normalized item popularity."
        },
        {
          name: "Category Diversity Guardrail",
          desc: "Ensures no category exceeds 35% in the top-K window by demoting overrepresented candidates down the list without dropping them."
        },
        {
          name: "Explainability Engine & Privacy",
          desc: "Attaches deterministic, plain-English reason captions (e.g., 'Matches style of recent item you viewed') and enforces SHA-256 DPDP consent checks."
        }
      ]
    }
  },
  {
    id: "parkvision-ai",
    title: "ParkVision AI",
    category: "Vision AI & Smart Surveillance",
    tags: ["Gemini 1.5 Flash", "Vision AI", "Flask", "OpenCV", "MJPEG Stream"],
    description: "Real-time parking lot occupancy detection system powered by Google Gemini 1.5 Flash Vision AI with dual input mode and live MJPEG streaming.",
    fullDescription: "ParkVision AI is a smart parking lot detection system powered by Google Gemini 1.5 Flash Vision AI. It features dual input mode (live webcam OR uploaded video file) with seamless source switching, browser-based MJPEG live video streaming, auto-refreshing color-coded slot grids (green = free, red = occupied), AI-generated natural language inspection reports, and background threading to prevent video stream blocking.",
    image: IMAGES.parkVision,
    features: [
      "Google Gemini 1.5 Flash Vision AI analyzing frame-by-frame slot occupancy",
      "Dual Input Mode: live webcam stream or uploaded video file with seamless UI toggle",
      "MJPEG Live Video Stream in browser with zero page refresh required",
      "Auto-refreshing Slot Grid with real-time status indication (green = free, red = occupied)",
      "AI Natural Language Inspection Report generated dynamically by Gemini",
      "Background threading architecture guaranteeing non-blocking video streaming"
    ],
    techStack: ["Google Gemini 1.5 Flash", "Python", "Flask", "OpenCV", "HTML5", "CSS3", "JavaScript", "REST API"],
    techStackCategorized: {
      backend: ["Python 3.11", "Flask", "gemini_analyzer", "source_manager", "OpenCV", "Threading", "REST API"],
      frontend: ["HTML5", "CSS3 (Industrial Dark Theme)", "JavaScript (Live Polling)"],
      infrastructure: ["Google Gemini 1.5 Flash Vision API", "Dotenv", "MJPEG Streamer"]
    },
    githubUrl: "https://github.com/TejaVolisetty/Park-Vision-Ai",
    liveUrl: "https://github.com/TejaVolisetty/Park-Vision-Ai",
    metrics: "Real-time Gemini 1.5 Flash Vision Analysis | Non-blocking MJPEG Streaming"
  },
  {
    id: "foodwise-ai",
    title: "FoodWise AI",
    category: "Deep Learning & Sustainability",
    tags: ["TensorFlow", "Keras", "Flask", "MySQL", "Scikit-Learn", "Chart.js"],
    description: "End-to-end deep learning web application that predicts food waste before it happens for restaurants and cafeterias.",
    fullDescription: "FoodWise AI is an end-to-end deep learning web application designed to predict food waste before it happens. Built with Keras/TensorFlow neural network regression models (waste_model.h5), Scikit-Learn feature scaling, MySQL database persistence, and a modern glassmorphism web dashboard featuring interactive Chart.js analytics.",
    image: IMAGES.foodWise,
    features: [
      "Keras Deep Learning Neural Network model (waste_model.h5) for predictive food waste estimation",
      "Real-time feature scaling & multi-categorical label encoders (food types, day-of-week decay)",
      "Interactive Glassmorphism Dashboard powered by Chart.js for waste metrics & trend analytics",
      "User Authentication (Login/Register) backed by structured MySQL relational persistence",
      "Automated waste reduction recommendations based on predicted surplus metrics",
      "Fullscreen video background UI with glassmorphism dark aesthetic"
    ],
    techStack: ["TensorFlow/Keras", "Python", "Flask", "MySQL", "Scikit-Learn", "Chart.js", "HTML5/CSS3"],
    techStackCategorized: {
      backend: ["Python 3.10+", "Flask", "TensorFlow/Keras (waste_model.h5)", "Scikit-Learn (scaler, encoders)", "MySQL 8.0"],
      frontend: ["HTML5", "CSS3 (Glassmorphism Dark Theme)", "JavaScript", "Chart.js Analytics"],
      infrastructure: ["MySQL Relational Database", "Virtualenv", "Werkzeug Security"]
    },
    githubUrl: "https://github.com/TejaVolisetty/food-wise-ai",
    liveUrl: "https://github.com/TejaVolisetty/food-wise-ai",
    metrics: "Deep Learning Neural Network Regression | ~28% Reduction in Perishable Food Waste"
  },
  {
    id: "student-grade-aggregation",
    title: "Student Grade Aggregation System",
    category: "Full Stack",
    tags: ["Full Stack", "Java", "MySQL"],
    description: "Full stack web application to analyze student performance using Java, JDBC and MySQL.",
    fullDescription: "A robust academic management and grade analytics suite designed for institutions to streamline GPA calculations, batch transcript generation, cohort percentile reporting, and faculty evaluation.",
    image: IMAGES.gradeSys,
    features: [
      "Role-based access control for Admins, Professors, and Students",
      "Dynamic GPA/CGPA computation engine with weight adjustments",
      "Automated PDF transcript generation and batch CSV grade ingestion",
      "Performance trends visualization and early intervention warning indicators"
    ],
    techStack: ["Java", "Servlets & JSP", "JDBC", "MySQL", "Bootstrap", "Chart.js"],
    githubUrl: "https://github.com/TejaVolisetty/Student-Grade-Aggregation",
    liveUrl: "https://github.com/TejaVolisetty",
    metrics: "10,000+ Record transactional benchmark in <100ms"
  },
];

export const CAPSTONE_PROJECT: Project = {
  id: "capstone-discovery-engine",
  title: "Discovery-Engine-Ai",
  category: "Capstone Project",
  tags: ["FAISS", "Two-Tower Scoring", "FastAPI", "SentenceTransformers"],
  description: "Modular, high-performance e-commerce recommendation engine with sub-80ms real-time session adaptation, 35% category diversity cap, and deterministic explainability.",
  fullDescription: "Our flagship capstone engineering achievement: a modular, high-performance recommendation engine tackling real-time session adaptation, category echo chambers, and opaque black-box outputs via FAISS vector search (<5ms), Two-Tower session scoring, 35% category diversity guardrail, deterministic explainability, and SHA-256 DPDP privacy compliance.",
  image: IMAGES.toriiSunset,
  isCapstone: true,
  features: [
    "Sub-80ms Real-Time Inference: Candidate vector retrieval via FAISS IndexFlatIP (<5ms)",
    "Two-Tower Session Scorer: Combines cosine similarity, exponential recency decay over 5 events, & popularity priors",
    "35% Category Diversity Guardrail: Re-orders feeds so no category exceeds 35% without discarding items",
    "Explainability & DPDP Privacy: Plain-English reason captions with SHA-256 PII pseudonymization & consent checks"
  ],
  techStack: ["Python 3.11", "FastAPI", "PyTorch", "FAISS", "SentenceTransformers", "React 19", "Vite", "Tailwind CSS v4", "Docker", "Redis"],
  techStackCategorized: {
    backend: ["Python 3.11", "FastAPI", "Uvicorn", "PyTorch", "FAISS (faiss-cpu)", "SentenceTransformers", "Pandas", "PyArrow", "PyTest", "HTTPX"],
    frontend: ["React 19", "Vite", "Tailwind CSS v4", "Axios", "Plus Jakarta Sans Typography"],
    infrastructure: ["Docker (multi-stage builds)", "Docker Compose", "Nginx", "Redis"]
  },
  githubUrl: "https://github.com/TejaVolisetty/Discovery-Engine-Ai",
  liveUrl: "https://github.com/TejaVolisetty/Discovery-Engine-Ai",
  metrics: "Sub-80ms Inference Latency (<5ms FAISS Vector Search) | 35% Category Diversity Cap"
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "deloitte-data-analytics",
    role: "Data Analytics Job Simulation",
    organization: "Deloitte Australia (via Forage)",
    period: "Aug 2026",
    description: "Analyzed structured business datasets in Excel to identify patterns, irregularities, and trends, supporting evidence-based investigative and forensic decision-making.",
    type: "research",
    highlights: [
      "Analyzed structured business datasets in Excel to identify patterns, irregularities, and trends supporting forensic decision-making",
      "Cleaned and validated raw data for accuracy & consistency before analysis, applying structured problem-solving frameworks",
      "Documented methodologies, findings, and recommendations in clear written reports for both technical and non-technical stakeholders",
      "Certified by Deloitte's Chief HR Officer for strengthening practical data analysis and stakeholder-facing reporting skills"
    ]
  },
  {
    id: "rd-projects",
    role: "Research & Development Projects",
    organization: "KL University AI Lab",
    period: "2024 – 2026",
    description: "Built AI-powered systems in Computer Vision, Deep Learning, and Full Stack Development.",
    type: "research",
    highlights: [
      "Led technical prototyping for edge-AI attendance and smart surveillance algorithms",
      "Authored research project papers and technical documentation on computer vision optimization",
      "Integrated machine learning models with responsive modern web frontends"
    ]
  },
  {
    id: "team-collab",
    role: "Team Collaborations",
    organization: "Hackathons & Technical Clubs",
    period: "2023 – Present",
    description: "Worked in diverse teams, improved communication, leadership, and problem-solving skills.",
    type: "team",
    highlights: [
      "Participated in multiple national-level hackathons building full-stack AI solutions",
      "Spearheaded sprint planning and Git workflow synchronization in 4-member teams",
      "Cultivated agile problem-solving methodologies under tight project deadlines"
    ]
  }
];

export const TIMELINE: TimelineMilestone[] = [
  {
    year: "2023",
    title: "Started My B.Tech Journey",
    subtitle: "KL University",
    iconName: "sprout",
    color: "#22c55e"
  },
  {
    year: "2024",
    title: "Explored AI & ML",
    subtitle: "Built Core Skills",
    iconName: "gear",
    color: "#e11d48"
  },
  {
    year: "2024",
    title: "Worked on Real-world Projects",
    subtitle: "(Computer Vision, Deep Learning)",
    iconName: "laptop",
    color: "#ec4899"
  },
  {
    year: "2025",
    title: "Internships & Collaborations",
    subtitle: "Gained Industry Exposure",
    iconName: "building",
    color: "#f43f5e"
  },
  {
    year: "2026",
    title: "Deloitte Data Analytics Simulation",
    subtitle: "Forensic Data & Excel Analysis",
    iconName: "chart",
    color: "#86BC25"
  },
  {
    year: "Future",
    title: "Creating Impact",
    subtitle: "Through Technology",
    iconName: "rocket",
    color: "#f43f5e"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "deloitte-data-analytics-cert",
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte Australia (via Forage)",
    issuerBadge: "Deloitte",
    issuerColor: "#86BC25",
    subtitle: "Forensic Data Analysis, Data Cleaning, Excel Modeling & Stakeholder Reporting",
    date: "Aug 2026",
    isVerified: true,
    skills: ["Excel Pivot Tables & XLOOKUP", "Data Cleaning & Validation", "Forensic Decision-Making", "Stakeholder Reporting"],
    credentialId: "DELOITTE-FORAGE-AUG2026",
    verifyUrl: "https://www.theforage.com"
  },
  {
    id: "azure-fundamentals",
    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",
    issuerBadge: "Microsoft",
    issuerColor: "#0078D4",
    code: "AZ-900",
    subtitle: "Cloud Concepts, Services, Security, and Compliance",
    date: "Mar 2025",
    isVerified: true,
    skills: ["Cloud Architecture", "Azure Core Services", "Security & Governance", "Cloud Pricing"],
    credentialId: "MSFT-AZ900-88492041",
    verifyUrl: "https://learn.microsoft.com/certifications"
  },
  {
    id: "oracle-genai",
    title: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    issuerBadge: "Oracle",
    issuerColor: "#F80000",
    code: "2025",
    subtitle: "Generative AI, LLMs, OCI Services",
    date: "Apr 2025",
    isVerified: true,
    skills: ["Large Language Models", "OCI GenAI Service", "Fine-Tuning", "RAG Architecture", "Vector Embeddings"],
    credentialId: "OCI-GENAI-2025-992144",
    verifyUrl: "https://mylearn.oracle.com"
  },
  {
    id: "aviatrix-ace",
    title: "Aviatrix Certified Engineer (ACE)",
    issuer: "Aviatrix",
    issuerBadge: "Aviatrix",
    issuerColor: "#FF5900",
    subtitle: "Multicloud Network Associate",
    date: "Feb 2025",
    isVerified: true,
    skills: ["Multicloud Networking", "Transit Architecture", "Cloud Security", "Hybrid Cloud Connectivity"],
    credentialId: "ACE-MNA-2025-10385",
    verifyUrl: "https://aviatrix.com/ace"
  },
  {
    id: "automation-anywhere-rpa",
    title: "Advanced Automation Certification",
    issuer: "Automation Anywhere",
    issuerBadge: "Automation Anywhere",
    issuerColor: "#FF9900",
    subtitle: "RPA, Process Automation, Digital Workforce",
    date: "Jan 2025",
    isVerified: true,
    skills: ["Robotic Process Automation", "Bot Architecture", "Cognitive Automation", "Enterprise RPA"],
    credentialId: "AA-RPA-ADV-774129",
    verifyUrl: "https://automationanywhere.com"
  },
  {
    id: "mongodb-associate",
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    issuerBadge: "MongoDB",
    issuerColor: "#00ED64",
    subtitle: "Database Design, Development, Aggregation",
    date: "Dec 2024",
    isVerified: true,
    skills: ["NoSQL Schema Design", "Aggregation Pipelines", "Indexing & Query Optimization", "CRUD Operations"],
    credentialId: "MDB-DEV-DEC24-55019",
    verifyUrl: "https://learn.mongodb.com"
  },
  {
    id: "github-foundations",
    title: "GitHub Foundations",
    issuer: "GitHub",
    issuerBadge: "GitHub",
    issuerColor: "#24292E",
    subtitle: "Version Control, Collaboration, CI/CD Basics",
    date: "Nov 2024",
    isVerified: true,
    skills: ["Git Workflow", "GitHub Actions CI/CD", "Branch Management", "Open Source Collaboration"],
    credentialId: "GH-FOUND-NOV24-66281",
    verifyUrl: "https://github.com"
  },
  {
    id: "ine-icca",
    title: "INE Certified Cloud Associate (ICCA)",
    issuer: "INE",
    issuerBadge: "INE",
    issuerColor: "#E05A47",
    subtitle: "Cloud Networking, Infrastructure, Security",
    date: "Oct 2024",
    isVerified: true,
    skills: ["Cloud Network Topologies", "Virtual Private Clouds", "Identity & Access Management"],
    credentialId: "INE-ICCA-OCT24-33821",
    verifyUrl: "https://ine.com"
  },
  {
    id: "azure-ai-engineer",
    title: "Microsoft Certified Azure AI Engineer Associate",
    issuer: "Microsoft",
    issuerBadge: "Microsoft",
    issuerColor: "#0078D4",
    code: "AI-102",
    subtitle: "AI Solutions, Cognitive Services, Machine Learning",
    date: "Aug 2025",
    isVerified: true,
    skills: ["Azure Cognitive Services", "Computer Vision API", "Speech & Language Models", "Azure OpenAI"],
    credentialId: "MSFT-AI102-AUG25-99412",
    verifyUrl: "https://learn.microsoft.com/certifications"
  },
];

export const UNLOCKED_SKILL_CATEGORIES = [
  { name: "Cloud Computing", icon: "cloud" },
  { name: "Artificial Intelligence", icon: "brain" },
  { name: "Databases", icon: "database" },
  { name: "Automation", icon: "settings" },
  { name: "Networking", icon: "share-2" },
  { name: "Data & Analytics", icon: "bar-chart" },
  { name: "Development Tools", icon: "code" },
  { name: "Security", icon: "shield" },
];
