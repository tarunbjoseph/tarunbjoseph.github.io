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

export const workedAt = [
  { src: "assets/logos/vector_institute.png", alt: "Vector Institute", url: "https://vectorinstitute.ai/" },
  { src: "assets/logos/safealign.png", alt: "SafeAlign AI", url: "https://safealignai.io/" },
  { src: "assets/logos/tcs_logo.svg", alt: "Tata Consultancy Services", url: "https://www.tcs.com/" },
  { src: "assets/logos/university_of_toronto.svg", alt: "University of Toronto", url: "https://www.utoronto.ca/" },
];

export const intro = {
  headline: "I build AI agents, and the checks that keep them in line.",
  paragraphs: [
    "I'm finishing my MEng in Industrial Engineering at the University of Toronto this December. At SafeAlign AI, through the Vector Institute, I work on runtime monitoring for multi-agent AI systems: deciding, step by step, whether an agent's action should go ahead, wait for a person, or be stopped.",
    "Before graduate school I was a machine learning engineer at Tata Consultancy Services, where I built RAG chatbots and a support-ticket agent for a learning platform used by 600,000 employees.",
  ],
  lookingFor: "Looking for AI engineering roles in Toronto from January 2027.",
};

// Every figure here comes from Tarun's resume. Do not add numbers that are not in his documents.
export const stats = [
  { value: 600000, decimals: 0, suffix: "", label: "employees on the learning platform I built chatbots and agents for at TCS" },
  { value: 5, decimals: 0, suffix: "+ hrs", label: "saved per developer each week by my support-ticket agent" },
  { value: 9.0, decimals: 1, suffix: "/10", label: "participant rating for the agentic AI bootcamp I helped lead at Vector" },
  { value: 3.8, decimals: 1, suffix: "/4.0", label: "GPA in my MEng at the University of Toronto" },
];

export const skills = [
  { group: "Agents", items: ["Tool calling", "Multi-agent orchestration", "RAG", "Knowledge graphs", "MCP", "LangChain", "OPA policy rules", "Guardrails"] },
  { group: "Fine-tuning and evaluation", items: ["QLoRA (Unsloth)", "PyTorch", "Hugging Face", "Macro-F1", "Calibration", "Cohen's kappa", "Grouped cross-validation"] },
  { group: "AI governance", items: ["OWASP LLM Top 10", "MITRE ATLAS", "EU AI Act", "OSFI E-23"] },
  { group: "Languages and infrastructure", items: ["Python", "SQL", "REST APIs", "FastAPI", "Docker", "Git", "GCP", "AWS", "Azure", "CI/CD"] },
];

// Work without a public demo. Each one gets a diagram instead of a link.
export type Logo = { src: string; alt: string; url?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  context: string;
  year: string;
  why: string;
  problem: string;
  did: string[];
  result?: string;
  steps?: string[];
  diagram?: "monitor";
  logos?: Logo[];
  link?: { label: string; href: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "runtime-monitoring",
    title: "Runtime monitoring for AI agents",
    context: "Project OSPREY · SafeAlign AI, through the Vector Institute",
    year: "2026 – Present",
    why: "Private repository",
    problem:
      "An agent that reads documents and calls tools can be steered by text hidden in what it reads. Ordinary monitoring watches latency and errors, and misses that.",
    did: [
      "Fine-tuned the two small language models in the pipeline with QLoRA: one screens user prompts for injection, the other names the kind of attack in a flagged tool output.",
      "Built the training data with an LLM labeller, kept attacker goals and customers apart across train and test, and found and fixed label leakage in an earlier dataset.",
      "Built the threat taxonomy and the crosswalk that links each threat to controls, regulations, OWASP and MITRE ATLAS.",
    ],
    diagram: "monitor",
    logos: [{ src: "assets/logos/vector_institute.png", alt: "Vector Institute", url: "https://vectorinstitute.ai/" }, { src: "assets/logos/safealign.png", alt: "SafeAlign AI", url: "https://safealignai.io/" }],
    link: { label: "See the public governance portal", href: "https://tarunbjoseph.github.io/osprey-portal/" },
  },
  {
    slug: "ticket-agent",
    title: "Support-ticket agent",
    context: "Tata Consultancy Services",
    year: "2025",
    why: "Internal company system",
    problem:
      "Developers on a learning platform used by 600,000 employees were spending hours each week closing the same kinds of user tickets.",
    did: [
      "Built a proof of concept with Llama 3, then took it to an MVP over three sprints of feedback from the developers who used it.",
      "The agent handles the repetitive tickets on its own; a chatbot helps developers close the rest.",
    ],
    result: "Saved each developer more than five hours a week.",
    logos: [{ src: "assets/logos/tcs_logo.svg", alt: "Tata Consultancy Services", url: "https://www.tcs.com/" }],
    steps: ["A ticket comes in", "Semantic routing picks a path", "Vector-store memory adds context", "Tool calls to internal APIs do the fix", "Closed, or handed to a developer through the chatbot"],
  },
  {
    slug: "minementor",
    title: "MineMentor: when should an AI tutor help?",
    context: "ECE1786, University of Toronto · two-person project",
    year: "2026 – Present",
    why: "Private course repository",
    problem:
      "A Minecraft tutor made of cooperating agents has to decide when to give a hint and when to let the player struggle. That decision is only as good as its read of the player.",
    did: [
      "I own calibration, data labelling, evaluation and testing.",
      "Designed the protocol that checks the tutor's read of the player against what people see in screen recordings, with a second labeller and a held-out test.",
    ],
    logos: [{ src: "assets/logos/university_of_toronto.svg", alt: "University of Toronto", url: "https://www.utoronto.ca/" }],
    steps: ["Record play sessions", "Cut into 30-second windows", "Two people label them blind", "Measure agreement (Cohen's kappa)", "Tune the detector's thresholds", "Score once on held-out sessions"],
  },
];

export const alsoBuilt = [
  { title: "RAG chatbots for coding help and Q&A", where: "TCS, 2023 – 2025", text: "GPT-3.5 and Llama 3 chatbots on the same 600,000-user learning platform." },
  { title: "Web-scraping and OCR extraction tool", where: "TCS, 2023 – 2025", text: "Pulled structured data out of scanned documents and web pages." },
  { title: "Deepfake detection hackathon challenge", where: "TCS, 2024", text: "Designed the challenge for a company-wide learning festival; about 5,000 people took part." },
];

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
  logos?: Logo[];
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
    logos: [{ src: "assets/logos/safealign.png", alt: "SafeAlign AI", url: "https://safealignai.io/" }],
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
    logos: [{ src: "assets/logos/university_of_toronto.svg", alt: "University of Toronto", url: "https://www.utoronto.ca/" }],
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
  logos?: Logo[];
  period: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Machine Learning Associate",
    org: "Vector Institute × SafeAlign AI",
    logos: [{ src: "assets/logos/vector_institute.png", alt: "Vector Institute", url: "https://vectorinstitute.ai/" }, { src: "assets/logos/safealign.png", alt: "SafeAlign AI", url: "https://safealignai.io/" }],
    period: "Aug 2026 – Present",
    points: [
      "Building runtime monitoring for multi-agent AI systems, designed for banks and other regulated firms, on-premises and in the cloud. Every agent step gets a PASS, ESCALATE or QUARANTINE verdict from fine-tuned small models, OPA policy rules and a knowledge-graph lookup.",
      "Fine-tuned two small language models with QLoRA: one names the kind of attack in a flagged tool output, the other screens user prompts for injection.",
      "Built the threat taxonomy and the crosswalk that links each threat to controls, regulations, OWASP and MITRE ATLAS, and found and fixed label leakage in an earlier dataset.",
    ],
  },
  {
    role: "AI Program Design and Delivery Intern",
    org: "Vector Institute",
    logos: [{ src: "assets/logos/vector_institute.png", alt: "Vector Institute", url: "https://vectorinstitute.ai/" }],
    period: "May – Aug 2026",
    points: [
      "Led delivery of the Agentic AI Forecasting and Evaluation bootcamp (9.0/10 participant rating) for industry teams from CIBC, PwC and Roche.",
      "Automated the bootcamp lifecycle with the Slack API and Google Apps Script, saving more than five hours of preparation per bootcamp.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    org: "Tata Consultancy Services",
    logos: [{ src: "assets/logos/tcs_logo.svg", alt: "Tata Consultancy Services", url: "https://www.tcs.com/" }],
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
    logos: [{ src: "assets/logos/tcs_logo.svg", alt: "Tata Consultancy Services", url: "https://www.tcs.com/" }],
    period: "Jan – Dec 2022",
    points: [
      "Built PL/SQL pipelines, Informatica ETL and Tableau reporting for talent-development programs, cutting manual reporting effort by about half.",
      "Received the TCS On the Spot Award for enrollment insights presented to senior management.",
    ],
  },
];

export const teaching = [
  { role: "Teaching Assistant", logo: "assets/logos/university_of_toronto.svg", url: "https://www.utoronto.ca/", org: "University of Toronto", period: "2025 – Present", text: "MIE429 Machine Intelligence Capstone Design, APS106 Fundamentals of Computer Programming (500+ students) and MIE1628 Cloud-Based Big Data Analytics." },
  { role: "Subject Matter Expert, Corporate Training", logo: "assets/logos/tcs_logo.svg", url: "https://www.tcs.com/", org: "Tata Consultancy Services", period: "2023 – 2025", text: "Taught AI, NLP, generative AI and data science programs across the company." },
  { role: "Lead Trainer and Mentor", logo: "assets/logos/sure_trust_logo.png", url: "https://www.suretrustforruralyouth.com/", org: "TATA ProEngage, SURE Trust", period: "2025", text: "Ran a six-month Python and machine learning bootcamp for 20 final-year CS and IT students." },
  { role: "VP of Professional Development", logo: "assets/logos/university_of_toronto.svg", url: "https://www.mie.utoronto.ca/", org: "MIE Graduate Student Association", period: "2025 – Present", text: "Industry events and professional development for MIE graduate students." },
  { role: "Departmental Steward", logo: "", url: "https://www.cupe3902.org/", org: "CUPE 3902 Unit 1", period: "2025 – Present", text: "Liaison between the union and the department." },
  { role: "Academic Support Volunteer", logo: "assets/logos/make_a_difference_logo.png", url: "https://www.makeadiff.in/", org: "Make A Difference", period: "2019 – 2021", text: "Tutored children in shelter homes in Math and English." },
];

export const education = [
  {
    degree: "MEng, Industrial Engineering",
    school: "University of Toronto",
    logo: "assets/logos/university_of_toronto.svg",
    url: "https://www.utoronto.ca/",
    period: "2025 – Dec 2026",
    detail: "GPA 3.8/4.0. Emphasis in Data Analytics and Machine Learning.",
    courses: "Statistical Learning (A+), Deep Learning (A), Foundations of Data Analytics and ML (A), Reinforcement Learning, Applications of NLP (in progress)",
  },
  {
    degree: "B.Tech, Industrial Engineering",
    school: "College of Engineering Trivandrum",
    logo: "assets/logos/cet_logo.jpg",
    url: "https://www.cet.ac.in/",
    period: "2017 – 2021",
    detail: "First Class with Distinction (8.0/10 CGPA).",
    courses: "Operations Research, Data Analysis with R and Python",
  },
];

export const certifications = [
  { name: "Generative AI Leader", logo: "assets/logos/google_cert.svg", issuer: "Google", year: "2026" },
  { name: "AWS Certified AI Practitioner", logo: "assets/logos/aws_certified.svg", issuer: "Amazon Web Services", year: "2024" },
  { name: "Azure Data Scientist Associate", logo: "assets/logos/azure_certified.svg", issuer: "Microsoft", year: "2024" },
  { name: "Generative AI and Large Language Models", logo: "assets/logos/iimb_logo.svg", issuer: "IIM Bangalore", year: "2024" },
  { name: "AI4ICPS Certificate Program", logo: "assets/logos/iit_logo.svg", issuer: "IIT Kharagpur", year: "2024" },
  { name: "AWS Certified Cloud Practitioner", logo: "assets/logos/aws_certified.svg", issuer: "Amazon Web Services", year: "2023" },
];
