const portfolioData = {
  personalInfo: {
    name: "Anurag Kumar",
    title: "Software Developer",
    location: "Sheikhpura, Bihar",
    email: "devanuragai@gmail.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
  },
  heroSkills: [
    { name: "Python", bg: "bg-amber-100", text: "text-amber-800" },
    { name: "JavaScript", bg: "bg-yellow-100", text: "text-yellow-800" },
    { name: "Tailwind CSS", bg: "bg-sky-100", text: "text-sky-800" },
    { name: "HTML5 & CSS3", bg: "bg-orange-100", text: "text-orange-800" },
    { name: "REST APIs", bg: "bg-purple-100", text: "text-purple-800" },
  ],
  services: [
    {
      icon: "code",
      title: "Web Development",
      description:
        "Building responsive, performant websites using modern frameworks and best practices from landing pages to dynamic web apps.",
    },
    {
      icon: "layout",
      title: "UI/UX Design Integration",
      description:
        "Creating intuitive and beautiful user interfaces that provide exceptional user experiences and responsive layouts.",
    },
    {
      icon: "server",
      title: "Backend Development",
      description:
        "Robust and scalable server-side solutions with RESTful APIs, databases, and efficient data processing tools.",
    },
  ],
  projects: [
    {
      title: "E-Commerce Platform",
      category: "Web App",
      tech: ["HTML", "Tailwind", "JavaScript"],
      description:
        "A feature-rich e-commerce store with interactive product selection, dynamic filtering, and clean UI components.",
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      category: "SaaS",
      tech: ["JavaScript", "CSS3", "APIs"],
      description:
        "Collaborative task management tool with real-time updates, drag-and-drop workflow, and priority tracking.",
      github: "#",
      live: "#",
    },
    {
      title: "Automated Data Integrator",
      category: "Python",
      tech: ["Python", "REST API", "JSON"],
      description:
        "Intelligent backend tool powered by Python for parsing structured data and integrating third-party API services.",
      github: "#",
      live: "#",
    },
  ],
  socialLinks: [
    {
      name: "GitHub",
      iconClass: "fa-brands fa-github",
      url: "https://github.com/KernelKiller-ai",
    },
    {
      name: "LinkedIn",
      iconClass: "fa-brands fa-linkedin-in",
      url: "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME",
    },
    {
      name: "Instagram",
      iconClass: "fa-brands fa-instagram",
      url: "https://www.instagram.com/YOUR_INSTAGRAM_USERNAME",
    },
  ],
};

window.portfolioData = portfolioData;
