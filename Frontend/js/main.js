document.addEventListener("DOMContentLoaded", () => {
  renderHeroSkills();
  renderServices();
  renderProjects();
  renderContactInfo();
  renderFooterSocials();
  setupSmoothScroll();

  // Dynamic Typewriter Effect
  setupTypewriter();

  // Re-initialize Lucide Icons
  refreshIcons();
});

// Typewriter Function
function setupTypewriter() {
  const words = [
    "Software Developer",
    "Full Stack Developer",
    "Python Developer",
    "Web Engineer",
  ];
  let i = 0;
  let timer;

  function typingEffect() {
    const target = document.getElementById("typing-text");
    if (!target) return;

    let word = words[i].split("");
    var loopTyping = function () {
      if (word.length > 0) {
        target.innerHTML += word.shift();
      } else {
        setTimeout(deletingEffect, 2000);
        return false;
      }
      timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
  }

  function deletingEffect() {
    const target = document.getElementById("typing-text");
    if (!target) return;

    let word = target.innerHTML.split("");
    var loopDeleting = function () {
      if (word.length > 0) {
        word.pop();
        target.innerHTML = word.join("");
      } else {
        if (words.length > i + 1) {
          i++;
        } else {
          i = 0;
        }
        typingEffect();
        return false;
      }
      timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
  }

  typingEffect();
}

function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}

// 1. Render Hero Section Skills Tags
function renderHeroSkills() {
  const container = document.getElementById("hero-skills");
  if (!container || !window.portfolioData || !window.portfolioData.heroSkills)
    return;

  container.innerHTML = portfolioData.heroSkills
    .map(
      (s) => `
        <span class="px-3.5 py-1.5 text-xs font-bold rounded-lg shadow-sm ${s.bg} ${s.text}">${s.name}</span>
    `,
    )
    .join("");
}

// 2. Render Services Cards
function renderServices() {
  const container = document.getElementById("services-container");
  if (!container || !window.portfolioData || !window.portfolioData.services)
    return;

  container.innerHTML = portfolioData.services
    .map(
      (s) => `
        <div class="bg-white p-8 rounded-2xl border border-purple-100/80 shadow-md hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-1.5 transition-all group">
            <div class="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 mb-6 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-sm">
                <i data-lucide="${s.icon}" class="w-6 h-6"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 mb-3">${s.title}</h3>
            <p class="text-slate-600 text-sm leading-relaxed">${s.description}</p>
        </div>
    `,
    )
    .join("");
}

// 3. Render Projects Cards (Featured Wide Showcase Layout)
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container || !window.portfolioData || !window.portfolioData.projects)
    return;

  const projects = window.portfolioData.projects;

  // Agar sirf 1 project hai toh screen ke center me wide stylish showcase card banayein
  if (projects.length === 1) {
    container.className = "max-w-5xl mx-auto";
    const p = projects[0];
    const techList = p.tech || p.tags || p.technologies || [];

    container.innerHTML = `
      <div class="bg-white/95 rounded-3xl border border-purple-100 shadow-xl shadow-purple-500/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-purple-200 grid md:grid-cols-12 group">
        <!-- Project Preview Image -->
        <div class="md:col-span-6 relative overflow-hidden bg-slate-900 min-h-[280px] md:min-h-[380px]">
          <img 
            src="${p.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop&q=80"}" 
            alt="${p.title}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent md:hidden"></div>
          <div class="absolute top-4 left-4">
            <span class="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-purple-700 shadow-md">
              ${p.category || "Full Stack"}
            </span>
          </div>
        </div>

        <!-- Project Details -->
        <div class="md:col-span-6 p-8 sm:p-10 flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="hidden md:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold tracking-wide uppercase border border-purple-100">
              <span class="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
              ${p.category || "Featured System"}
            </div>
            
            <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight group-hover:text-purple-600 transition-colors">
              ${p.title}
            </h3>

            <p class="text-slate-600 text-sm sm:text-base leading-relaxed">
              ${p.description}
            </p>

            <!-- Tech Pills -->
            <div class="flex flex-wrap gap-2 pt-2">
              ${techList
                .map(
                  (t) => `
                <span class="px-3 py-1 text-xs font-semibold rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
                  ${t}
                </span>`
                )
                .join("")}
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-100">
            <a 
              href="${p.live || p.liveUrl || "#"}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-bold text-sm shadow-lg shadow-purple-500/25 flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
            >
              <span>Live Demo</span>
              <i data-lucide="external-link" class="w-4 h-4"></i>
            </a>

            <a 
              href="${p.github || p.githubUrl || "#"}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-md flex items-center gap-2 transform hover:-translate-y-0.5 transition-all"
            >
              <i class="fa-brands fa-github text-base"></i>
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>
    `;
  } else {
    // 2 ya usse zyada projects hone par standard 3-column grid layout
    container.className = "grid sm:grid-cols-2 lg:grid-cols-3 gap-8";
    container.innerHTML = projects
      .map((p) => {
        const techList = p.tech || p.tags || p.technologies || [];
        return `
        <div class="bg-white rounded-2xl border border-purple-100/80 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-purple-200/50 transition-all flex flex-col justify-between p-6">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-md">${p.category || "Project"}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">${p.title}</h3>
                <p class="text-slate-600 text-sm mb-6 leading-relaxed">${p.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${techList.map((t) => `<span class="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">${t}</span>`).join("")}
                </div>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-slate-100 text-sm font-bold text-purple-700">
                <a href="${p.live || p.liveUrl}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1">Live Demo ↗</a>
                <a href="${p.github || p.githubUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-slate-900 flex items-center gap-1">Code ↗</a>
            </div>
        </div>`;
      })
      .join("");
  }

  refreshIcons();
}

// 4. Render Contact Details
function renderContactInfo() {
  const container = document.getElementById("contact-info");
  if (!container) return;

  container.innerHTML = `
        <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-sm">
                <i data-lucide="mail" class="w-5 h-5"></i>
            </div>
            <div>
                <span class="text-xs text-slate-500 block font-medium">Email</span>
                <a href="mailto:devanuragai@gmail.com" class="text-sm font-bold text-slate-900 hover:text-purple-600 transition-colors">devanuragai@gmail.com</a>
            </div>
        </div>
        <div class="flex items-center gap-4">
            <div class="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center shrink-0 shadow-sm">
                <i data-lucide="map-pin" class="w-5 h-5"></i>
            </div>
            <div>
                <span class="text-xs text-slate-500 block font-medium">Location</span>
                <span class="text-sm font-bold text-slate-900">Sheikhpura, Bihar</span>
            </div>
        </div>
    `;
}

// 5. Render Footer Social Media Icons (Font Awesome)
function renderFooterSocials() {
  const container = document.getElementById("footer-socials");
  if (!container || !window.portfolioData || !window.portfolioData.socialLinks)
    return;

  container.innerHTML = portfolioData.socialLinks
    .map(
      (s) => `
      <a 
        href="${s.url}" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="w-10 h-10 rounded-xl bg-slate-800 hover:bg-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-all border border-slate-700/60 shadow-sm text-base" 
        title="${s.name}"
      >
        <i class="${s.iconClass}"></i>
      </a>
    `,
    )
    .join("");
}

// 6. Smooth Scroll Implementation
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}