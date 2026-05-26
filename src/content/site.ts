import {
  Binary,
  BookOpenCheck,
  Bug,
  Cloud,
  FileCheck2,
  Fingerprint,
  KeyRound,
  LockKeyhole,
  Network,
  Radar,
  ScanSearch,
  ServerCog,
  ShieldCheck,
  Skull,
  TerminalSquare,
  Trophy,
  Waypoints,
} from "lucide-react";

export const siteConfig = {
  name: "Cyber security Academy",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pruthvicyberacademy.com",
  description:
    "Industry-oriented cybersecurity training in India covering SOC operations, VAPT, ethical hacking, cloud security, and bug bounty workflows.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "training@pruthvicyberacademy.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/919740781976",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/pruthvicyberacademy",
  linkedin: "https://www.linkedin.com/in/pruthvi-krishna-chowdary-3b5622208",
  enrollmentForm:
    process.env.NEXT_PUBLIC_GOOGLE_FORM_URL ||
    "https://docs.google.com/forms/d/e/1FAIpQLScoXyN2EDoq-9c9pn1SLag7vMq8BEqn0ugBwJACrf57CDTQMg/viewform",
  phone: "+91 9740781976",
  twitter: "https://x.com/pruthvicyber",
  github: "https://github.com/pruthvicyber",
};

export const trainer = {
  name: "Pruthvi Krishna Chowdary",
  role: "Security Engineer at Flipkart",
  experience: ["3+ years of cybersecurity experience", "2+ years of cybersecurity teaching experience"],
  linkedin: siteConfig.linkedin,
  bio: "Pruthvi Krishna Chowdary is a Security Engineer with hands-on experience in SOC operations, SIEM, endpoint security, threat analysis, vulnerability management, and offensive security methodologies. He has trained students and professionals with practical real-world cybersecurity scenarios and industry-oriented training.",
  specialties: ["SOC operations", "SIEM", "Endpoint security", "Threat analysis", "Vulnerability management", "Offensive security"],
};

export const mentors = [
  {
    name: trainer.name,
    role: trainer.role,
    experience: trainer.experience,
    bio: trainer.bio,
    specialties: trainer.specialties,
    linkedin: trainer.linkedin,
  },
  {
    name: "Rambabu",
    role: "VAPT Expert",
    experience: ["3+ years experience in VAPT"],
    bio: "Rambabu is a VAPT specialist with strong expertise in penetration testing, vulnerability assessment, web application security, and API security testing with 3+ years of hands-on experience.",
    specialties: ["Web Application Security", "API Security Testing", "Vulnerability Assessment", "Penetration Testing", "Security Reporting"],
  },
];

export type MentorProfile = (typeof mentors)[number];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/curriculum", label: "Curriculum" },
  { href: "/pricing", label: "Pricing" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export const stats = [
  { value: "3+", label: "Years Industry Experience" },
  { value: "2+", label: "Years Teaching Experience" },
  { value: "SOC + VAPT", label: "Real SOC & VAPT Training" },
  { value: "Labs", label: "Practical Hands-On Labs" },
];

export const technologies = [
  "Linux",
  "Kali Linux",
  "Burp Suite",
  "Nmap",
  "Wireshark",
  "Metasploit",
  "OWASP",
  "SIEM",
  "Cloud IAM",
  "Docker",
  "MITRE ATT&CK",
  "Report Writing",
];

export const curriculumModules = [
  { title: "Networking", icon: Network, summary: "TCP/IP, DNS, ports, routing, packet analysis, and troubleshooting fundamentals." },
  { title: "Linux", icon: TerminalSquare, summary: "Shell workflows, permissions, processes, logs, services, and secure administration." },
  { title: "Kali Linux", icon: Skull, summary: "Tooling discipline, lab setup, safe testing methodology, and evidence capture." },
  { title: "Burp Suite", icon: Radar, summary: "Proxying, repeater, intruder strategy, extensions, and clean vulnerability validation." },
  { title: "Recon", icon: ScanSearch, summary: "Passive and active reconnaissance, asset discovery, fingerprinting, and scope control." },
  { title: "XSS", icon: Binary, summary: "Reflected, stored, DOM-based XSS, context analysis, payload design, and remediation." },
  { title: "SQL Injection", icon: ServerCog, summary: "Error, union, blind, time-based testing, exploitation safety, and parameterized fixes." },
  { title: "Authentication Flaws", icon: Fingerprint, summary: "Session attacks, weak flows, reset abuse, MFA bypass patterns, and defenses." },
  { title: "JWT Attacks", icon: KeyRound, summary: "Algorithm confusion, weak secrets, claims abuse, token storage, and signing hygiene." },
  { title: "API Security", icon: Waypoints, summary: "OWASP API risks, BOLA, mass assignment, throttling, schema validation, and logging." },
  { title: "Cloud Security", icon: Cloud, summary: "IAM, storage exposure, workload hardening, logging, and incident-ready cloud posture." },
  { title: "SOC Operations", icon: ShieldCheck, summary: "Triage, alert handling, escalation, evidence collection, and playbook execution." },
  { title: "SIEM", icon: LockKeyhole, summary: "Detection logic, parsing, dashboards, correlation rules, and investigation workflows." },
  { title: "Malware Analysis", icon: Bug, summary: "Static and dynamic basics, indicators, sandboxing safety, and defensive reporting." },
  { title: "Bug Bounty Hunting", icon: BookOpenCheck, summary: "Target selection, methodology, impact proof, duplicate reduction, and ethics." },
  { title: "Report Writing", icon: FileCheck2, summary: "Executive summaries, technical evidence, CVSS thinking, and practical remediation." },
];

export const pricingPlans = [
  {
    name: "Beginner",
    price: "INR 9,999",
    description: "Start safely with cybersecurity foundations and guided labs.",
    features: ["Networking and Linux basics", "Kali setup guidance", "Weekly live doubt sessions", "Private community access", "Completion certificate"],
  },
  {
    name: "Professional",
    price: "INR 24,999",
    description: "For learners who want SOC plus offensive security depth.",
    featured: true,
    features: ["Everything in Beginner", "Burp Suite and OWASP labs", "SOC and SIEM workflows", "Bug bounty methodology", "Portfolio-ready reports"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Team training with custom scenarios and reporting.",
    features: ["Role-based learning tracks", "Private batch scheduling", "Cloud security workshops", "Progress reporting", "Custom lab scenarios"],
  },
];

export const whyChooseProgram = [
  { title: "Industry-Oriented Roadmap", icon: ShieldCheck, summary: "Training follows how SOC, VAPT, cloud, and application security teams investigate real risks." },
  { title: "Real Practical Labs", icon: TerminalSquare, summary: "Learners practice recon, exploitation validation, SIEM triage, reporting, and remediation evidence." },
  { title: "Mentor-Led Feedback", icon: Radar, summary: "Trainers review methodology, proof quality, report clarity, and professional security communication." },
  { title: "Career-Focused Outcomes", icon: Trophy, summary: "The program is mapped to entry and junior roles across SOC, VAPT, security engineering, and cloud security." },
];

export const careerOutcomes = [
  "SOC Analyst",
  "Security Engineer",
  "VAPT Analyst",
  "Bug Bounty Hunter",
  "Cloud Security Engineer",
  "SIEM Engineer",
];

export const studentBenefits = [
  "Beginner-friendly foundation before advanced testing",
  "Hands-on labs for SOC and offensive security",
  "Report writing and evidence collection practice",
  "Mentor guidance for career direction",
  "Industry terminology and workflow exposure",
  "Practical interview discussion points",
];

export const realWorldProjects = [
  { title: "SOC Alert Investigation", icon: ShieldCheck, summary: "Triage suspicious endpoint and network activity, collect indicators, and write analyst notes." },
  { title: "Web App VAPT Report", icon: Radar, summary: "Test authentication, XSS, SQL injection, access control, and API security with professional evidence." },
  { title: "Cloud Exposure Review", icon: Cloud, summary: "Review IAM, logging, exposed assets, and security misconfiguration patterns in cloud environments." },
  { title: "SIEM Detection Workflow", icon: ServerCog, summary: "Create investigation logic, dashboards, and escalation-ready summaries for security monitoring." },
];

export const liveSessionTopics = [
  "Live Burp Suite walkthroughs",
  "SOC investigation drills",
  "VAPT methodology reviews",
  "Bug bounty report feedback",
  "Cloud security misconfiguration analysis",
  "Career and interview preparation",
];

export const testimonials = [
  {
    quote:
      "The course connected every topic to real investigation and exploitation workflows. It felt like training for the job, not only for notes.",
    name: "Ananya Rao",
    role: "SOC Analyst",
  },
  {
    quote:
      "Pruthvi's report-writing feedback changed how I submit bugs. My findings became clearer, more reproducible, and easier to defend.",
    name: "Rahul Nair",
    role: "Bug Bounty Learner",
  },
  {
    quote:
      "The labs were practical and safe. I finally understood how recon, API security, and cloud misconfigurations connect.",
    name: "Meera Iyer",
    role: "Cloud Security Associate",
  },
];

export const faqs = [
  { q: "Is this beginner friendly?", a: "Yes. The program starts with networking, Linux, and lab safety before moving into offensive and defensive workflows." },
  { q: "Do I need a powerful laptop?", a: "A modern laptop with 8 GB RAM is enough for most lessons. Cloud or Docker-based options are documented for lighter machines." },
  { q: "Is this only offensive security?", a: "No. The curriculum blends SOC operations, SIEM, malware analysis, cloud security, API security, VAPT, and bug bounty methodology." },
  { q: "Will I get practical assignments?", a: "Yes. Each module includes guided exercises, evidence capture, and reporting tasks based on realistic scenarios." },
];

export const blogPosts = [
  {
    slug: "building-a-cybersecurity-lab",
    title: "How to Build a Safe Cybersecurity Lab",
    excerpt: "A practical lab checklist for beginners learning Linux, Kali, Burp Suite, and SIEM workflows safely.",
    date: "2026-05-20",
  },
  {
    slug: "soc-vs-bug-bounty",
    title: "SOC Operations vs Bug Bounty: Which Path Fits You?",
    excerpt: "Understand the mindset, tools, and daily workflows behind defensive monitoring and offensive testing.",
    date: "2026-05-18",
  },
  {
    slug: "api-security-first-steps",
    title: "API Security First Steps for New Testers",
    excerpt: "Start with auth, object-level authorization, schema validation, and clean evidence collection.",
    date: "2026-05-12",
  },
];
