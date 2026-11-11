// All site content lives here. Edit this file to update the portfolio; no component changes needed.
// Writing rules: plain first person, no em dashes, no claims that are not in Tarun's own documents.

export const person = {
  name: "Tarun Joseph",
  role: "AI Engineer",
  focus: "AI agents, agent security and evaluation",
  location: "Toronto, Canada",
  email: "tarunbjoseph@gmail.com",
  linkedin: "https://www.linkedin.com/in/tarunjoseph25/",
  github: "https://github.com/tarunbjoseph",
  huggingface: "https://huggingface.co/TarunJoseph101",
  resume: "assets/resumes/Tarun_Joseph_Resume.pdf",
  cv: "assets/resumes/Tarun_Joseph_CV.pdf",
};

export const intro = {
  headline: "I build AI agents, and the checks that keep them in line.",
  paragraphs: [
    "I'm finishing my MEng in Industrial Engineering at the University of Toronto this December. At SafeAlign AI, through the Vector Institute, I work on runtime monitoring for multi-agent AI systems: deciding, step by step, whether an agent's action should go ahead, wait for a person, or be stopped.",
    "Before graduate school I was a machine learning engineer at Tata Consultancy Services, where I built RAG chatbots and a support-ticket agent for a learning platform used by 600,000 employees.",
  ],
  lookingFor: "Looking for AI engineering roles in Toronto from January 2027.",
};

export const now = [
  {
    title: "Runtime monitoring for agents",
    where: "SafeAlign AI, through the Vector Institute",
    text: "Fine-tuning small language models, writing policy rules and building the threat taxonomy behind a system that watches AI agents while they work.",
  },
  {
    title: "Testing an AI tutor against real play",
    where: "MineMentor, ECE1786 at the University of Toronto",
    text: "A two-person project on a Minecraft tutor made of cooperating agents. I own calibration, data labelling, evaluation and testing.",
  },
  {
    title: "Teaching",
    where: "University of Toronto",
    text: "Teaching assistant for MIE429 Machine Intelligence Capstone Design this fall.",
  },
];

export type Project = {
  slug: string;
  title: string;
  oneLiner: string;
  context: string;
  year: string;
  image: string;
  imageAlt: string;
  summary: string;
  how: string[];
  tools: string[];
  links: { label: string; href: string }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "osprey-portal",
    title: "OSPREY Governance Portal",
    oneLiner: "A public reference for what an agent-monitoring platform detects, and which governance controls each detection supports.",
    context: "Project OSPREY, SafeAlign AI",
    year: "2026",
    image: "assets/shots/osprey.jpg",
    imageAlt: "Home page of the OSPREY Governance Portal",
    summary:
      "Enterprise agents plan, call tools and take actions on their own, and ordinary monitoring misses the failures that matter. This site is the reference layer for Project OSPREY: the agent behaviours the platform detects, the governance and security controls each detection gives evidence for, and how each detection is meant to be tested.",
    how: [
      "Every threat, control, framework and benchmark is a YAML file checked against a schema at build time, so a broken framework reference fails the build instead of going stale.",
      "Framework versions are pinned in one place, so upgrading a framework produces an exact list of anchors to re-check.",
      "Each anchor carries a verification state (verified, pending, gap or superseded), so readers can tell which references are safe to quote.",
    ],
    tools: ["Astro", "Zod schemas", "YAML", "Node.js", "GitHub Pages"],
    links: [
      { label: "Visit the site", href: "https://tarunbjoseph.github.io/osprey-portal/" },
      { label: "Source", href: "https://github.com/tarunbjoseph/osprey-portal" },
    ],
  },
  {
    slug: "asl",
    title: "ASL Fingerspelling Translator",
    oneLiner: "Turns a video of American Sign Language fingerspelling into a spoken sentence.",
    context: "MIE1517 Deep Learning, University of Toronto",
    year: "2026",
    image: "assets/shots/asl.jpg",
    imageAlt: "The ASL Fingerspelling Translator app on Hugging Face Spaces",
    summary:
      "Our MIE1517 final project, built by a team of four that I led. You upload a short fingerspelling video and choose a context (emergency or everyday conversation). The app reads the letters, turns them into a natural sentence and speaks it aloud.",
    how: [
      "MediaPipe finds 21 landmarks on each hand in every frame. The points are centred on the wrist, so it does not matter how far the signer stands from the camera.",
      "A Conformer encoder picks up the quick finger movements, a Transformer decoder predicts the letters one by one, and beam search chooses the most likely spelling.",
      "A language model then turns the raw letters into the sentence the signer meant, using the chosen context, and the result is read out as audio.",
    ],
    tools: ["PyTorch", "MediaPipe", "Conformer-Transformer", "Groq LLM", "Gradio", "Hugging Face Spaces"],
    links: [
      { label: "Try the app", href: "https://huggingface.co/spaces/TarunJoseph101/MIE1517_ASL_Project" },
      { label: "Source", href: "https://github.com/tarunbjoseph/MIE1517_ASL_Fingerspelling_Recognition" },
    ],
    note: "Hosted on a free Hugging Face Space, so it can take about 30 seconds to wake up.",
  },
  {
    slug: "digital-twin",
    title: "Digital Twin",
    oneLiner: "A chat agent that answers questions about my work, grounded in my own documents.",
    context: "Personal project",
    year: "2026",
    image: "assets/shots/twin.jpg",
    imageAlt: "Tarun's Digital Twin chat app on Hugging Face Spaces",
    summary:
      "Ask it about my background, my current work or how to reach me. It answers from my own documents rather than from what a general model happens to know, and it lets me know when a visitor would like to connect.",
    how: [
      "A RAG pipeline splits my documents into chunks, embeds them and stores them in a FAISS index; each answer is grounded in the passages it retrieves.",
      "GPT-4.1 mini writes the answers and can call tools in parallel or in sequence, including one that alerts me when someone asks to get in touch.",
      "Guardrails keep system and user prompts separate, manage the conversation history and track token and API costs.",
    ],
    tools: ["Python", "RAG", "FAISS", "GPT-4.1 mini", "Tool calling", "Gradio", "Hugging Face Spaces"],
    links: [{ label: "Chat with it", href: "https://huggingface.co/spaces/TarunJoseph101/digital-twin" }],
    note: "Hosted on a free Hugging Face Space, so it can take about 30 seconds to wake up.",
  },
];

export type Job = {
  role: string;
  org: string;
  logo?: string;
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Machine Learning Associate",
    org: "Vector Institute × SafeAlign AI",
    logo: "assets/logos/vector_institute.png",
    period: "Aug 2026 – Present",
    points: [
      "Building runtime monitoring for multi-agent AI systems at financial clients, on-premises and in the cloud. Every agent step gets a PASS, ESCALATE or QUARANTINE verdict from fine-tuned small models, OPA policy rules and a knowledge-graph lookup.",
      "Fine-tuned two small language models with QLoRA: one names the kind of attack in a flagged tool output, the other screens user prompts for injection.",
      "Built the threat taxonomy and the crosswalk that links each threat to controls, regulations, OWASP and MITRE ATLAS, and found and fixed label leakage in an earlier dataset.",
    ],
  },
  {
    role: "AI Program Design and Delivery Intern",
    org: "Vector Institute",
    logo: "assets/logos/vector_institute.png",
    period: "May – Aug 2026",
    points: [
      "Led delivery of the Agentic AI Forecasting and Evaluation bootcamp (9.0/10 participant rating) for industry teams from CIBC, PwC and Roche.",
      "Automated the bootcamp lifecycle with the Slack API and Google Apps Script, saving more than five hours of preparation per bootcamp.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Tata Consultancy Services",
    logo: "assets/logos/tcs_logo.svg",
    period: "Jan 2023 – May 2025",
    points: [
      "Deployed GPT-3.5 and Llama 3 RAG chatbots and AI agents on an internal learning platform used by 600,000 employees.",
      "Built a support-ticket agent from proof of concept to MVP, plus a chatbot developers used to close user tickets, saving each developer more than five hours a week.",
      "Built a web-scraping and OCR tool for data extraction, and ran GenAI bootcamps that raised platform learning hours by 13%.",
    ],
  },
  {
    role: "Data Engineer and Data Analyst",
    org: "Tata Consultancy Services",
    logo: "assets/logos/tcs_logo.svg",
    period: "Jan – Dec 2022",
    points: [
      "Built PL/SQL pipelines, Informatica ETL and Tableau reporting for talent-development programs, cutting manual reporting effort by about half.",
      "Received the TCS On the Spot Award for enrollment insights presented to senior management.",
    ],
  },
];

export const teaching = [
  { role: "Teaching Assistant", org: "University of Toronto", period: "2025 – Present", text: "MIE429 Machine Intelligence Capstone Design, APS106 Fundamentals of Computer Programming (500+ students) and MIE1628 Cloud-Based Big Data Analytics." },
  { role: "Subject Matter Expert, Corporate Training", org: "Tata Consultancy Services", period: "2023 – 2025", text: "Taught AI, NLP, generative AI and data science programs across the company." },
  { role: "Lead Trainer and Mentor", org: "TATA ProEngage, SURE Trust", period: "2025", text: "Ran a six-month Python and machine learning bootcamp for 20 final-year CS and IT students." },
  { role: "VP of Professional Development", org: "MIE Graduate Student Association", period: "2025 – Present", text: "Industry events and professional development for MIE graduate students." },
  { role: "Departmental Steward", org: "CUPE 3902 Unit 1", period: "2025 – Present", text: "Liaison between the union and the department." },
  { role: "Academic Support Volunteer", org: "Make A Difference", period: "2019 – 2021", text: "Tutored children in shelter homes in Math and English." },
];

export const education = [
  {
    degree: "MEng, Industrial Engineering",
    school: "University of Toronto",
    logo: "assets/logos/university_of_toronto.svg",
    period: "2025 – Dec 2026",
    detail: "GPA 3.8/4.0. Emphasis in Data Analytics and Machine Learning.",
    courses: "Statistical Learning (A+), Deep Learning (A), Foundations of Data Analytics and ML (A), Reinforcement Learning, Applications of NLP (in progress)",
  },
  {
    degree: "B.Tech, Industrial Engineering",
    school: "College of Engineering Trivandrum",
    logo: "assets/logos/cet_logo.jpg",
    period: "2017 – 2021",
    detail: "First Class with Distinction (8.0/10 CGPA).",
    courses: "Operations Research, Data Analysis with R and Python",
  },
];

export const certifications = [
  { name: "Generative AI Leader", issuer: "Google", year: "2026" },
  { name: "AWS Certified AI Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Azure Data Scientist Associate", issuer: "Microsoft", year: "2024" },
  { name: "Generative AI and Large Language Models", issuer: "IIM Bangalore", year: "2024" },
  { name: "AI4ICPS Certificate Program", issuer: "IIT Kharagpur", year: "2024" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
];
