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

// 3. Render Projects Cards
function renderProjects() {
  const container = document.getElementById("projects-container");
  if (!container || !window.portfolioData || !window.portfolioData.projects)
    return;

  container.innerHTML = portfolioData.projects
    .map(
      (p) => `
        <div class="bg-white rounded-2xl border border-purple-100/80 overflow-hidden shadow-md hover:shadow-2xl hover:shadow-purple-200/50 transition-all flex flex-col justify-between p-6">
            <div>
                <div class="flex items-center justify-between mb-4">
                    <span class="text-xs font-bold text-purple-700 bg-purple-100 px-3 py-1 rounded-md">${p.category}</span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 mb-2">${p.title}</h3>
                <p class="text-slate-600 text-sm mb-6 leading-relaxed">${p.description}</p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${p.tech.map((t) => `<span class="text-xs font-semibold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200">${t}</span>`).join("")}
                </div>
            </div>
            <div class="flex items-center gap-4 pt-4 border-t border-slate-100 text-sm font-bold text-purple-700">
                <a href="${p.live}" target="_blank" rel="noopener noreferrer" class="hover:underline flex items-center gap-1">Live Demo ↗</a>
                <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="text-slate-500 hover:text-slate-900 flex items-center gap-1">Code ↗</a>
            </div>
        </div>
    `,
    )
    .join("");
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
