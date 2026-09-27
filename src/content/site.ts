import { Bug, Cloud, Code2, LockKeyhole, Radar, ServerCog, ShieldCheck, TerminalSquare, Trophy } from "lucide-react";

export const siteConfig = {
  name: "CyberVSI",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://pruthvicyberacademy.com",
  description:
    "Four industry-oriented career programs in India: cybersecurity, full stack development, Microsoft business applications, and cloud DevSecOps.",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "connect@cybervsi.com",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_URL ?? "https://wa.me/919180399906",
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL ?? "https://t.me/pruthvicyberacademy",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL ?? "",
  enrollmentForm: "/enroll",
  phone: "+91 9180399906",
  twitter: "https://x.com/pruthvicyber",
  github: "https://github.com/pruthvicyber",
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL ?? "https://www.facebook.com/share/19EEZP6EGw/",
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL ?? "https://www.instagram.com/cybervsi?stkn=MXBwdm1hNmF1YzhzbA==",
  syllabusLeadEndpoint: process.env.SYLLABUS_LEAD_ENDPOINT ?? "https://script.google.com/macros/s/AKfycbxL0LdKmPoTWTCM80BKIp_I8MfWjazFNU8yyPu8Kq2XAGtmq-9FaiYblDyJm6UsH1d0/exec",
};

export const trainer = {
  name: "N Durga Prasad",
  role: "Head of Business Development",
  experience: ["CyberVSI business development and learner engagement"],
  linkedin: "",
  bio: "N Durga Prasad leads business development at CyberVSI, helping learners discover the right career program and connect with practical, industry-oriented training opportunities.",
  specialties: ["Industry partnerships", "Learner engagement", "Program outreach", "Career guidance"],
};

export const mentors = [
  {
    name: "N Pruthvi Krishna",
    role: "Cybersecurity Mentor",
    experience: ["5+ years of cybersecurity work experience", "5+ years of cybersecurity teaching experience"],
    bio: "N Pruthvi Krishna is a cybersecurity mentor who helps students build practical skills across SOC operations, SIEM, endpoint security, threat analysis, vulnerability management, and offensive security methodologies.",
    specialties: ["SOC operations", "SIEM", "Endpoint security", "Threat analysis", "Vulnerability management", "Offensive security"],
    linkedin: "https://www.linkedin.com/in/pruthvi-krishna-chowdary-3b5622208",
    program: "Cybersecurity Program",
  },
  {
    name: "Rambabu",
    role: "VAPT Expert",
    experience: ["3+ years experience in VAPT"],
    bio: "Rambabu is a VAPT specialist with strong expertise in penetration testing, vulnerability assessment, web application security, and API security testing with 3+ years of hands-on experience.",
    specialties: ["Web Application Security", "API Security Testing", "Vulnerability Assessment", "Penetration Testing", "Security Reporting"],
    program: "Cybersecurity Program",
  },
  {
    name: "Naga Haneesh",
    role: "Full Stack Developer Mentor",
    experience: ["Full stack development mentor", "Guided project and deployment support"],
    bio: "Naga Haneesh mentors learners through the full stack developer pathway, with practical guidance across JavaScript, backend APIs, databases, React interfaces, deployment, and portfolio projects.",
    specialties: ["JavaScript", "Node.js & Express", "React", "PostgreSQL", "API Development", "Deployment"],
    program: "Full Stack Developer Program",
  },
  {
    name: "Shivaramakrishna M",
    role: "Senior Corporate Trainer & SME - Microsoft Dynamics 365 & Power Platform",
    experience: ["7 years of total industry experience", "Corporate trainer and technical mentor"],
    bio: "Shivaramakrishna M is a Microsoft Dynamics 365 and Power Platform subject matter expert who bridges enterprise consulting, architecture, and practical training. He delivers project-centric learning across Dataverse, Power Apps, Power Automate, Copilot Studio, AI Builder, Azure Functions, C# plugins, JavaScript, REST APIs, and Azure DevOps ALM.",
    specialties: ["Dynamics 365 CE and Dataverse", "Power Apps and Power Automate", "C# plugins and JavaScript", "Copilot Studio and AI Builder", "Azure DevOps ALM", "REST API and Azure Functions"],
    program: "Dynamics 365 & Power Platform Program",
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
  { value: "4", label: "Career Programs" },
  { value: "5+", label: "Years Mentor Experience" },
  { value: "SOC + VAPT", label: "Cybersecurity Practical Training" },
  { value: "Full Stack", label: "Build and Deploy Projects" },
];

export const technologies = [
  "Linux",
  "Kali Linux",
  "Burp Suite",
  "Nmap",
  "Wireshark",
  "tcpdump",
  "Nessus",
  "OpenVAS",
  "Snort",
  "Wazuh",
  "Splunk",
  "ELK Stack",
  "OWASP ZAP",
  "SQLMap",
  "Bandit",
  "Snyk",
  "Python",
  "TheHive",
  "SIEM",
  "scikit-learn",
  "TensorFlow",
  "Google AutoML",
  "Report Writing",
];

export const curriculumModules = [
  { title: "Cybersecurity Foundations & Evolving Threat Landscapes", icon: ShieldCheck, summary: "CIA triad, security principles, frameworks, networking, Wireshark, threat intelligence, and emerging risks." },
  { title: "Ethical Hacking, Footprinting & Vulnerability Assessment", icon: Radar, summary: "Kali lab setup, hacking lifecycle, OSINT, Nmap, DNS enumeration, vulnerability scanning, CVSS, and reporting." },
  { title: "Advanced Network Security & Incident Response", icon: LockKeyhole, summary: "Firewalls, IDS/IPS, SIEM, SOC workflows, event correlation, incident response, forensics, and crisis management." },
  { title: "Secure Coding Practices, AppSec & AI Automation", icon: Code2, summary: "Threat modeling, secure SDLC, OWASP Top 10, API security, secure code review, cryptography, and Python automation." },
  { title: "AI-Driven Cybersecurity: Detection, Automation & Defense", icon: Bug, summary: "ML security use cases, SOAR, anomaly detection, adversarial AI, defensive ML techniques, TensorFlow, and AutoML." },
];

export const curriculumTracks = [
  {
    module: 1,
    name: "Cybersecurity Foundations & Evolving Threat Landscapes",
    weeks: "Weeks 1-3",
    summary: "Build the security foundation: CIA triad, threat actors, frameworks, TCP/IP, secure networking, Wireshark analysis, and threat intelligence.",
    sessions: [
      "Core Security Concepts",
      "Principles and Threat Actors",
      "Introduction to Cybersecurity Frameworks",
      "Networking Essentials - Protocols",
      "Network Devices and Topologies",
      "Networking Architecture for Security",
      "Traffic Analysis with Wireshark",
      "Applied Network Security Analysis",
      "Network Traffic Forensics Concepts",
      "Threat Landscape and Trends",
      "Threat Intelligence and Case Studies",
      "Understanding Evolving Threats",
      "Module 1 Review, Lab Practice, Assessment Prep, and Evaluation",
    ],
  },
  {
    module: 2,
    name: "Ethical Hacking, Footprinting & Vulnerability Assessment",
    weeks: "Weeks 4-6",
    summary: "Practice authorized offensive security: Kali setup, hacking methodology, legal boundaries, OSINT, active scanning, vulnerability management, CVSS, and reporting.",
    sessions: [
      "Ethical Hacking Tools Setup",
      "The Hacking Lifecycle",
      "Legal and Ethical Frameworks",
      "Passive Reconnaissance and OSINT",
      "OSINT Tools and Techniques",
      "Reconnaissance Strategy",
      "Active Scanning with Nmap",
      "Enumeration and DNS Analysis",
      "Scanning Methodologies",
      "Vulnerability Management",
      "Automated Vulnerability Scanning",
      "Vulnerability Analysis and CVSS",
      "Module 2 Review, Capstone Lab, Reporting, Portfolio, and Evaluation",
    ],
  },
  {
    module: 3,
    name: "Advanced Network Security & Incident Response",
    weeks: "Weeks 7-8",
    summary: "Learn defensive operations: firewall rules, IDS/IPS, Wazuh, Snort, SIEM deployment, Splunk/ELK, SOC workflows, IR playbooks, forensics, and crisis communication.",
    sessions: [
      "Firewall Implementation",
      "Intrusion Detection Systems",
      "Network Defense Architecture",
      "SIEM Deployment",
      "SOC Operations",
      "Event Correlation Logic",
      "Incident Response Playbooks",
      "Digital Forensics Essentials",
      "Crisis Management",
      "Module 3 End Module Evaluation",
    ],
  },
  {
    module: 4,
    name: "Secure Coding Practices, AppSec & AI Automation",
    weeks: "Weeks 9-10",
    summary: "Move into AppSec and automation: threat modeling, secure design, OWASP Top 10, API security, SAST/SCA, cryptography, Python, log parsing, scanning, and API integrations.",
    sessions: [
      "Threat Modeling",
      "Secure Design Integration",
      "Secure SDLC Frameworks",
      "Web Vulnerability Exploitation",
      "API Security",
      "Web Defense Mechanisms",
      "Secure Code Review",
      "Applied Cryptography",
      "Secure Coding Standards",
      "Python Fundamentals for Security",
      "Python Libraries and Modules",
      "Scripting Logic for Cybersecurity",
      "Network Automation with Python",
      "Automating Security Tasks",
      "Python for APIs and Integration",
      "Module 4 End Module Evaluation",
    ],
  },
  {
    module: 5,
    name: "AI-Driven Cybersecurity: Detection, Automation & Defense",
    weeks: "Weeks 11-12",
    summary: "Understand AI in security: ML fundamentals, phishing and malware detection, SOAR, TheHive, data requirements, adversarial ML, AI defenses, TensorFlow, and Google AutoML.",
    sessions: [
      "Introduction to AI/ML in Security",
      "Security Orchestration (SOAR)",
      "Data Science for Cybersecurity",
      "Adversarial AI Attacks",
      "Defending AI Systems",
      "TensorFlow and Google AutoML for Cybersecurity",
    ],
  },
];

export const fullStackModules = [
  { title: "JavaScript & Backend Foundations", icon: Code2, weeks: "Weeks 1-4", summary: "Understand the web request lifecycle, build strong JavaScript fundamentals, and create Node.js and Express REST APIs.", sessions: ["Internet & Web Fundamentals", "JavaScript Fundamentals", "Advanced JavaScript", "Introduction to Node.js", "Express.js Fundamentals"] },
  { title: "Database Development", icon: ServerCog, weeks: "Weeks 5-8", summary: "Design relational data models with PostgreSQL, then build authentication and production-ready backend security controls.", sessions: ["PostgreSQL Fundamentals", "Database Design", "Authentication with bcrypt, JWT and RBAC", "Backend Security with Helmet, CORS, rate limiting and Multer"] },
  { title: "Frontend Development", icon: TerminalSquare, weeks: "Weeks 9-11", summary: "Build responsive React interfaces, connect APIs, and create protected dashboards with practical application flows.", sessions: ["React Fundamentals", "Routing & API Integration", "Authentication UI & Dashboard"] },
  { title: "Production Deployment", icon: Cloud, weeks: "Week 12", summary: "Use Git and GitHub confidently, then deploy applications through VPS, Vercel, Nginx and PM2 workflows.", sessions: ["Deployment & Git"] },
  { title: "Capstone Project", icon: Trophy, weeks: "Week 13", summary: "Ship a portfolio-ready full stack project that demonstrates frontend, backend, database and deployment skills.", sessions: ["Capstone Project"] },
];

export const d365Modules = [
  { title: "Microsoft Power Platform", weeks: "8-10 weeks", icon: Cloud, summary: "Power Platform foundations, Dataverse, Canvas and Model-Driven Apps, Power Automate, Power BI, solutions, ALM, Copilot Studio and Power Pages." },
  { title: "Dynamics 365 Sales", weeks: "4-5 weeks", icon: Radar, summary: "CRM fundamentals, lead-to-order sales processes, product catalogs, pipeline management, sales productivity, configuration and automation." },
  { title: "Dynamics 365 Customer Service", weeks: "4-5 weeks", icon: ServerCog, summary: "Case management, queues, routing, SLAs, entitlements, knowledge bases, omnichannel support, Copilot and service analytics." },
  { title: "Dynamics 365 Finance & Operations", weeks: "8-10 weeks", icon: Trophy, summary: "ERP fundamentals, finance, supply chain, GST configuration, data entities, OData, Power BI, Power Automate and optional X++ foundations." },
];

export const cloudDevSecOpsModules = [
  { title: "Cloud Foundations & IAM", weeks: "Weeks 1-3", icon: Cloud, summary: "Build secure cloud foundations across networking, identity, access policies, secrets, logging, and least-privilege design.", sessions: ["Cloud service models", "VPC and network security", "IAM and least privilege", "Secrets and key management"] },
  { title: "DevSecOps & CI/CD Security", weeks: "Weeks 4-6", icon: Code2, summary: "Integrate security into delivery pipelines with Git, SAST, dependency checks, container scanning, and release gates.", sessions: ["Secure Git workflows", "SAST and SCA", "Container image security", "Pipeline security gates"] },
  { title: "Cloud Detection & Response", weeks: "Weeks 7-9", icon: ShieldCheck, summary: "Monitor cloud workloads, investigate alerts, centralize logs, and create response playbooks for realistic incidents.", sessions: ["Cloud audit logs", "Detection engineering", "SIEM integration", "Incident response playbooks"] },
  { title: "Infrastructure as Code & Capstone", weeks: "Weeks 10-12", icon: TerminalSquare, summary: "Automate repeatable infrastructure and ship a secure cloud deployment with evidence, documentation, and a security review.", sessions: ["Terraform fundamentals", "Policy as code", "Secure deployment review", "Cloud security capstone"] },
];

export const pricingPlans = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity Program",
    description: "Industry-oriented training for learners targeting SOC, VAPT, security engineering and offensive security roles.",
    rating: "4.9/5",
    schedule: "Monday-Friday, 8:00 PM-10:00 PM",
    featured: false,
    mentor: "N Pruthvi Krishna & Rambabu",
    features: ["Networking, Linux and Kali foundations", "Recon, Burp Suite and OWASP labs", "SOC, SIEM and incident response workflows", "Cloud security and bug bounty methodology", "Portfolio-ready security reports"],
  },
  {
    slug: "full-stack-developer",
    name: "Full Stack Developer Program",
    description: "A practical path from JavaScript and backend foundations to React, secure APIs, deployment and a capstone project.",
    rating: "4.8/5",
    schedule: "Monday-Friday, 7:00 AM-8:00 AM; Saturday-Sunday, 9:00 AM-11:00 AM",
    featured: false,
    mentor: "Naga Haneesh",
    features: ["JavaScript, Node.js and Express", "PostgreSQL and database design", "React interfaces and API integration", "Authentication and backend security", "Deployment plus portfolio-ready capstone"],
  },
  {
    slug: "dynamics-365-power-platform",
    name: "Dynamics 365 & Power Platform Program",
    description: "Business application training across Power Platform, Dynamics 365 Sales, Customer Service, and Finance & Operations.",
    rating: "4.8/5",
    schedule: "Schedule confirmed with the institute after enrollment",
    featured: false,
    mentor: "Shivaramakrishna M",
    features: ["Power Apps, Power Automate and Power BI", "Dataverse, security and ALM", "Dynamics 365 Sales and CRM workflows", "Customer Service case management and analytics", "Finance, supply chain and capstone scenarios"],
  },
  {
    slug: "cloud-devsecops",
    name: "Cloud & DevSecOps Program",
    description: "Build secure cloud and delivery skills across IAM, CI/CD, containers, monitoring, infrastructure as code, and incident response.",
    rating: "4.8/5",
    schedule: "Schedule confirmed with the institute after enrollment",
    featured: false,
    mentor: "Shivaramakrishna M",
    features: ["Cloud networking and IAM foundations", "DevSecOps pipelines and security gates", "Container and dependency security", "Cloud monitoring and incident response", "Infrastructure as code capstone"],
  },
];

export const programs = pricingPlans;

export const courseCatalog = [
  {
    slug: "cybersecurity",
    name: "Cybersecurity Program",
    description: "Practical SOC, VAPT, SIEM, cloud security, ethical hacking, and bug bounty training with mentor-led labs.",
    mentor: "N Pruthvi Krishna & Rambabu",
    syllabusUrl: process.env.NEXT_PUBLIC_CYBER_SYLLABUS_URL || "https://docs.google.com/document/d/1t9li8CfrEAX7RhJNDGDf3mhBGNDOs3KGTqLoUsmAb5c/edit?usp=sharing",
    modules: curriculumModules.map((module) => module.title),
  },
  {
    slug: "full-stack-developer",
    name: "Full Stack Developer Program",
    description: "Build responsive applications from JavaScript and backend foundations through React, databases, deployment, and a capstone.",
    mentor: "Naga Haneesh",
    syllabusUrl: process.env.NEXT_PUBLIC_FULL_STACK_SYLLABUS_URL || "https://docs.google.com/document/d/1EmnQr6KptUdBWv5bYf4q3xzsWHB8a676SQ6sFzAFloI/edit?usp=sharing",
    modules: fullStackModules.map((module) => `${module.title} (${module.weeks})`),
  },
  {
    slug: "dynamics-365-power-platform",
    name: "Dynamics 365 & Power Platform Program",
    description: "Learn Power Platform and Dynamics 365 Sales, Customer Service, and Finance & Operations through business scenarios and capstones.",
    mentor: "Shivaramakrishna M",
    syllabusUrl: process.env.NEXT_PUBLIC_D365_SYLLABUS_URL || "https://docs.google.com/document/d/1cdUFYG8imSe5brwrLTt-f0-ZqZ-496AcB0MX770L6-4/edit?usp=sharing",
    modules: d365Modules.map((module) => `${module.title} (${module.weeks})`),
  },
  {
    slug: "cloud-devsecops",
    name: "Cloud & DevSecOps Program",
    description: "Build secure cloud and delivery skills across IAM, CI/CD, containers, monitoring, infrastructure as code, and incident response.",
    mentor: "CyberVSI Mentor Team",
    syllabusUrl: process.env.NEXT_PUBLIC_CLOUD_DEVSECOPS_SYLLABUS_URL ?? "",
    modules: cloudDevSecOpsModules.map((module) => `${module.title} (${module.weeks})`),
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
    readTime: "6 min read",
    author: "CyberVSI Editorial Team",
    category: "Labs",
    content: "Setting up a dedicated sandbox environment is one of the most critical steps in learning cybersecurity. A properly configured lab allows you to test exploits, analyze malware, and monitor traffic without risking the security of your primary system or violating legal boundaries.\n\n### Step 1: Choosing a Hypervisor\nTo run multiple systems securely, use a Type-2 hypervisor like VirtualBox or VMware Workstation. These tools create a virtual sandbox where virtual machines (VMs) are isolated from your physical host.\n\n### Step 2: Setting Up Kali Linux (Offensive Node)\nDownload the official Kali Linux VM image. Kali comes preloaded with hundreds of pentesting utilities including Nmap, Metasploit, and Burp Suite. Secure the default credentials (change `kali:kali` instantly) and keep your packages updated.\n\n### Step 3: Installing a Defensive Monitoring Target\nInstall a lightweight Linux VM or Wazuh agent to act as your defensive target. By sending logs to an ELK stack or Splunk instance, you can practice reading logs and correlating events. Focus on understanding how attack indicators look inside auth logs (`/var/log/auth.log`).\n\n### Step 4: Network Isolation\nConfigure your hypervisor's network settings to 'Host-Only' or a custom 'NAT Network' that does not allow internal VMs to scan your home network. Safety and authorization are the gold standards of professional cybersecurity.",
  },
  {
    slug: "soc-vs-bug-bounty",
    title: "SOC Operations vs Bug Bounty: Which Path Fits You?",
    excerpt: "Understand the mindset, tools, and daily workflows behind defensive monitoring and offensive testing.",
    date: "2026-05-18",
    readTime: "8 min read",
    author: "CyberVSI Editorial Team",
    category: "Career Guidance",
    content: "Students starting in cybersecurity often wonder whether they should focus on offensive testing (such as Bug Bounties) or defensive operations (like working in a Security Operations Center - SOC). Both career paths are highly rewarding but require entirely different mindsets and workflows.\n\n### The SOC Analyst: The Cyber Guardian\nA SOC Analyst focuses on defense, monitoring, and incident response. The daily workflow consists of triaging alerts, investigating log sources (SIEM), and containing active threats. SOC work requires a analytical mind, deep understanding of corporate networks, and familiarity with attack signatures.\n\n* **Key Tools:** Splunk, Wazuh, Wireshark, TheHive, Firewalls, EDR agents.\n* **Core Skill:** Differentiating standard traffic patterns from malicious activity.\n\n### The Bug Bounty Hunter: The Cyber Explorer\nA Bug Bounty Hunter focuses on offensive security, trying to discover security flaws in web apps, APIs, or cloud assets before malicious actors do. This path requires extreme persistence, out-of-the-box thinking, and deep specialized knowledge of software vulnerabilities.\n\n* **Key Tools:** Burp Suite, SQLMap, Nmap, custom automation scripts.\n* **Core Skill:** Chaining minor findings to prove serious impact.\n\n### Which One Should You Choose?\nWe highly recommend starting with a blended foundation. Knowing how defensive SOC analysts write rules makes you a better offensive pentester, and knowing how hackers bypass filters makes you a better defender. Choose defensive tracks if you love forensics and system engineering, or offensive tracks if you love custom exploration and testing.",
  },
  {
    slug: "api-security-first-steps",
    title: "API Security First Steps for New Testers",
    excerpt: "Start with auth, object-level authorization, schema validation, and clean evidence collection.",
    date: "2026-05-12",
    readTime: "5 min read",
    author: "Rambabu",
    category: "Application Security",
    content: "With the rise of microservices and mobile applications, APIs have become the primary targets for modern cyberattacks. Securing and testing APIs is now one of the most in-demand skills in the security industry. Here is how beginners can start testing APIs safely.\n\n### 1. Understand the OWASP API Security Top 10\nAPI vulnerabilities differ significantly from standard web flaws. The most critical issue is often **BOLA** (Broken Object Level Authorization), where an API endpoint fails to verify if the requesting user has the right to access a specific resource ID. Always verify if changing `user_id` in a request returns unauthorized responses.\n\n### 2. Map the Attack Surface\nStart by intercepting API traffic in Burp Suite or reading documentation (like Swagger/OpenAPI files). Map every endpoint, HTTP method (GET, POST, PUT, DELETE), and required parameters. Look for undocumented API versions (e.g., `/v2/` vs `/v1/`) which might lack modern security filters.\n\n### 3. Test Authentication and Session Logic\nCheck if JWT tokens are signed using secure algorithms and if they contain appropriate expiration claims. Test if endpoints work when removing the `Authorization` header completely or by submitting expired tokens.\n\n### 4. Provide Professional Evidence\nWhen reporting API vulnerabilities, always include: the exact request URL, HTTP headers, request body, response codes, and clean, redacted screenshots showing access to sensitive information. Professional communication is what makes a great API security consultant.",
  },
];
