const portfolioData = {
  personalInfo: {
    name: "Anurag Kumar",
    title: "Software Developer",
    location: "Sheikhpura, Bihar",
    email: "devanuragai@gmail.com",
    github: "https://github.com/KernelKiller-ai",
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
      title: "BiharFast — Public Information & Exam Portal",
      category: "Full Stack",
      description:
        "A centralized platform for Bihar government notices, jobs, admit cards, citizen services, and real-time Class 10 mock tests with district leaderboards.",
      tech: ["React", "FastAPI", "Python", "Supabase", "Redis"],
      tags: ["React", "FastAPI", "Python", "Supabase", "Redis"],
      live: "https://bihar-fast-portal.onrender.com",
      liveUrl: "https://bihar-fast-portal.onrender.com",
      github: "https://github.com/KernelKiller-ai/bihar_fast",
      githubUrl: "https://github.com/KernelKiller-ai/bihar_fast",
      image:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&auto=format&fit=crop&q=80",
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