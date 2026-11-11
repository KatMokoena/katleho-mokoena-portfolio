export const profile = {
  name: "Katleho Mokoena",
  title: "Full Stack Software Engineer",
  stack:
    "C# · ASP.NET Core · React · Vite · Python · Node.js · REST APIs · TypeScript · SQL · PowerShell · Siemens / Festo PLC",
  phone: "0815386428",
  phoneHref: "tel:+27815386428",
  email: "katleho.magnolia@icloud.com",
  location: "Johannesburg, Gauteng",
  workModel: "Flexible Work Model - Remote & Hybrid",
  linkedin: "https://www.linkedin.com/in/katleho-magnolia-mokoena-7602121a1",
  github: "https://github.com/KatMokoena",
  cv: "Katleho-Mokoena-CV.pdf",
};

export const intro =
  "Full-Stack Software Engineer and Industrial Automation Specialist delivering enterprise solutions across Pharmaceuticals, FMCG, and Oil & Gas. Experienced in building high-performance track-and-trace and automation solutions for global brands including Coca-Cola and Heineken, while bridging PLCs, IoT devices, and cloud platforms to unlock real-time production intelligence.";

export const experienceLead =
  "PLCs and IoT devices to seamlessly integrate industrial hardware with cloud/on-premise systems for advanced production data analysis.";

export const filters = ["All", "React", "C#", "SQL Server", "PLC"];

export const projects = [
  {
    name: "Production Inspection Software",
    href: "https://github.com/KatMokoena/Production-Inspection-Software",
    summary:
      "A packaging-line inspection system: an operator dashboard and a line simulator that pairs front and back label results. A failed pack is rejected only when that pack reaches the reject station.",
    run: "In the repo, run Open-Demo.ps1 or open demo/index.html. The line feeds 10 packs, 8 pass and 2 fail.",
    tags: ["React", "C#", "SQL Server", "PLC"],
  },
  {
    name: "BestCode Inkjet Software",
    href: "https://github.com/KatMokoena/Bestcode-Inkjet-Software",
    summary:
      "A Windows console for BestCode NExT Series 8 printers. It lists every line on the plant, and the message layout updates on screen while the printer link is down.",
    run: "In the repo, run Open-Demo.ps1 or open demo.html. The walkthrough stops on the message layout.",
    tags: ["React", "C#"],
  },
  {
    name: "Cognex Smart Camera Integration",
    href: "https://github.com/KatMokoena/Cognex-Smart-Camera-Integration",
    summary:
      "A Windows app groups printed product codes into Cognex inspection jobs. A service loads the matching job onto the second camera when the first camera reads a code.",
    run: "In the repo, run Open-Demo.ps1 or open demo/index.html. The walkthrough loads RIDGECARTON.jobx onto camera 2.",
    tags: ["C#"],
  },
  {
    name: "Internal Project Management Platform",
    href: "https://github.com/KatMokoena/Internal-Project-Management-Platform",
    summary:
      "A delivery schedule that shifts when a purchase is late. The dashboard counts every engagement and flags the ones at risk.",
    run: "In the repo, run Open-Demo.ps1 or open demo/index.html. The walkthrough opens the at-risk order and the critical path.",
    tags: ["React", "SQL Server"],
  },
];

export const experience = [
  {
    title: "Full Stack Software Engineer",
    company: "Mitas Corporation",
    companyHref: "https://www.mitasglobal.com/",
    dates: "06/2024 – Present",
    bullets: [
      "Developed full-stack C#/.NET and React/TypeScript solutions to power automated inspection, labelling, and serialization/track-and-trace operations in high-throughput manufacturing environments.",
      "Designed relational database schemas in SQL Server to aggregate shift metrics, delivering live analytics dashboards for camera status, pass/fail rates, and production summaries during operational runs.",
      "Programming PLCs and IoT devices to seamlessly integrate industrial hardware with cloud/on-premise systems for advanced production data analysis.",
      "Used those production reports to diagnose line issues, because I own the data model and the machine side.",
      "Experienced in leveraging AI-assisted development workflows with rigorous manual code review guidelines. LLM Ops & Observability.",
    ],
  },
  {
    title: "Software Engineer",
    company: "Mitas Corporation",
    companyHref: "https://www.mitasglobal.com/",
    dates: "09/2023 – 05/2024",
    bullets: [
      "Built full stack features in C# / .NET, ASP.NET Web Forms, React, and TypeScript: a REST service, SQL Server storage.",
      "Integrated PLC / IoT and track-and-trace data, and applied batch, reject, and audit rules for FMCG and pharma lines.",
      "Used AI-assisted development with an LLM tool such as Cursor to move faster on that code, then reviewed and shipped it.",
    ],
  },
  {
    title: "Junior Software Developer",
    company: "Greif SA",
    dates: "08/2022 – 08/2023",
    bullets: [
      "Developed and debugged C# / .NET changes to production-monitoring software.",
      "Ingested PLC, sensor, or scanner data into the database and a simple UI, and fixed defects when that path broke.",
      "Used Git-style review and repeatable tests on those screens, and learned the plant rules for a good unit, a stop, and a shift.",
    ],
  },
  {
    title: "Developer - Freelancer",
    dates: "03/2022 – 07/2022",
    bullets: [
      "Built websites and small web apps in HTML, CSS, and JavaScript.",
      "Developed small-business stock-management software so an owner could record items, quantities, and stock movement in a simple SQL data store.",
      "Delivered that software as a working web application, then fixed the defects that showed up once the business started using it.",
    ],
  },
  {
    title: "Electronics Engineering Intern",
    company: "Resolution Circle",
    dates: "06/2021 – 02/2022",
    bullets: [
      "Workshops in Software, Electrical, Instrumental, Electronics, Automation, Carpentry, and Boilermaker.",
    ],
  },
];

export const education = [
  {
    title: "Electronics Engineering",
    place: "Vaal University of Technology — Diploma",
    dates: "02/2018 – 09/2022",
  },
  {
    title: "Matric",
    place: "Hoërskool Suiderlig",
    dates: "01/2013 – 11/2017",
    note: "RCL Executive member — Vice Secretary",
  },
  {
    title: "Amazon Software Developer",
    place: "Amazon Web Services (AWS) · Coursera",
    dates: "11/2025 – 04/2026",
    href: "https://www.coursera.org/account/accomplishments/specialization/X2136D62NSBD",
  },
];

export const certificates = [
  {
    name: "Application Development",
    issuer: "Amazon Web Services (AWS) · Coursera",
    date: "04/2026",
    href: "https://www.coursera.org/account/accomplishments/verify/OTVAGJEBLHEF",
  },
  {
    name: "Generative AI in Software Development",
    issuer: "Amazon Web Services (AWS) · Coursera",
    date: "04/2026",
    href: "https://www.coursera.org/account/accomplishments/verify/RDL3FQRLIR85",
  },
  {
    name: "Full Stack Web Development",
    issuer: "Amazon Web Services (AWS) · Coursera",
    date: "04/2026",
    href: "https://www.coursera.org/account/accomplishments/verify/W84LA8SRI8X8",
  },
  {
    name: "Data Structures and Algorithms",
    issuer: "Amazon Web Services (AWS) · Coursera",
    date: "04/2026",
    href: "https://www.coursera.org/account/accomplishments/verify/A3O33TO2FVLT",
  },
  {
    name: "Programming with Java",
    issuer: "Amazon Web Services (AWS) · Coursera",
    date: "04/2026",
    href: "https://www.coursera.org/account/accomplishments/verify/3J0FUBHS13M5",
  },
  { name: "PowerShell Mastery", issuer: "Udemy" },
  { name: "SQL Server Certificate", issuer: "Udemy" },
  { name: "Responsive Web Design", issuer: "CodeCamp", date: "02/2025" },
  { name: "Data Analysis with Python", issuer: "CodeCamp", date: "02/2025" },
  { name: "Front End Development Libraries", issuer: "CodeCamp", date: "02/2025" },
  { name: "Foundational C# with Microsoft", issuer: "CodeCamp", date: "02/2025" },
];

export const skills = [
  {
    label: "Front-end",
    items: [
      { name: "React", level: "Expert", filter: "React" },
      { name: "CSS / HTML5", level: "Expert" },
      { name: "Vite | npm", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "JavaScript", level: "Advanced" },
      { name: "Nest.js", level: "Advanced" },
    ],
  },
  {
    label: "Back-end",
    items: [
      { name: "C#", level: "Advanced", filter: "C#" },
      { name: "Microsoft SQL Server", level: "Expert", filter: "SQL Server" },
      { name: "Python", level: "Expert" },
      { name: "ASP.NET Core", level: "Advanced" },
      { name: "Node.js", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "RESTful APIs", level: "Advanced" },
      { name: "WebSockets", level: "Advanced" },
    ],
  },
  {
    label: "Cloud, infrastructure, and AI",
    items: [
      { name: "Advanced Prompt Engineering", level: "Expert" },
      { name: "Agentic Workflows", level: "Expert" },
      { name: "Cursor AI code", level: "Expert" },
      { name: "Claude Code", level: "Expert" },
      { name: "Amazon Web Services - AWS", level: "Advanced" },
      { name: "Microsoft Azure", level: "Advanced" },
      { name: "Arduino | Industrial sensors | Cognex Cameras | RFID", level: "Advanced" },
      { name: "Siemens PLC", level: "Expert", filter: "PLC" },
    ],
  },
];

export const languages = [
  ["English", "Fluent"],
  ["seSotho", "Fluent"],
  ["Afrikaans", "Intermediate"],
  ["isiZulu", "Intermediate"],
];
