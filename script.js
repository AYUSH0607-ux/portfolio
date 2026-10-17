/* ===================================================================
   MODERN DARK GLASSMORPHISM DEVELOPER PORTFOLIO
   AYUSH NAMBALLA — Student & Aspiring AI Engineer
   =================================================================== */

// ==========================================
// 1. AYUSH'S PERSONAL CONFIGURATION
// ==========================================
const USER_CONFIG = {
  name: "Ayush Namballa",
  role: "Student & Aspiring AI Engineer",
  email: "namballaayus@gmail.com",
  location: "Worldwide (Remote)",
  status: "Open for AI Internships & Collaborations",
  typingPhrases: [
    "neural networks & machine learning.",
    "intelligent AI agent workflows.",
    "data structures & Python algorithms.",
    "modern full-stack web applications."
  ],
  stats: {
    dedication: 100,
    coreSkills: 10,
    curiosity: 24,
    websitesShipped: 1
  },
  socials: {
    github: "https://github.com/AYUSH0607-ux/AYUSH0607-ux",
    email: "mailto:namballaayus@gmail.com"
  },
  projects: [
    {
      title: "CyberGlass Developer Portfolio",
      category: "First Web Project (Completed)",
      year: "2026",
      description: "Ayush's very first personal website! Engineered with Modern Dark Glassmorphism, interactive particle canvas, dynamic CLI terminal, and responsive UI components.",
      features: [
        "First complete frontend project built and shipped live",
        "Interactive constellation particle physics canvas",
        "Custom built browser terminal with command interpreter & easter eggs",
        "Linear & Vercel inspired dark glassmorphic design system",
        "Fully responsive layout across mobile, tablet, and desktop"
      ],
      tech: ["HTML5", "CSS3 Glassmorphism", "Vanilla JavaScript", "Canvas API"],
      liveUrl: "http://localhost:8080",
      githubUrl: "https://github.com/AYUSH0607-ux/AYUSH0607-ux"
    },
    {
      title: "Python Desktop GUIs, Automation & AI Suite",
      category: "PyQt5 Desktop & Python Applications",
      year: "2026",
      badge: "14+ Shipped Apps",
      description: "A rich collection of 14+ engineered Python applications spanning modern desktop GUIs with PyQt5 & REST APIs, real-world system automation utilities, and interactive game simulations.",
      features: [
        "🖥️ <strong>PyQt5 Desktop GUIs:</strong> Built complete dark-mode desktop applications including Live Weather App with OpenWeatherMap REST API, Cyber Digital Clock with QTimer, and Millisecond Precision Stopwatch.",
        "⚙️ <strong>Utilities & Automation:</strong> Developed automated QR Code Generator using qrcode imaging, modular Banking System with match-case validation, Dynamic To-Do List manager, and Shopping Cart billing calculator.",
        "🎮 <strong>Game & Logic Engines:</strong> Engineered Casino Slot Machine with 10x multiplier mechanics, AI Rock-Paper-Scissors with opponent logic, automated Multiple-Choice Quiz Engine, and Binary Intuition Number Guessing Game.",
        "🔐 <strong>Security & Math Tools:</strong> Implemented high-entropy Cryptographic Password Generator using Python string modules, zero-division safe Calculator, and formatted HH:MM:SS Countdown Timer."
      ],
      tech: ["Python 3", "PyQt5 Desktop GUI", "REST APIs", "qrcode", "OOP", "State Machines", "Algorithms"],
      liveUrl: "https://github.com/AYUSH0607-ux/python-mini-projects",
      githubUrl: "https://github.com/AYUSH0607-ux/python-mini-projects",
      catalog: [
        {
          category: "🖥️ PyQt5 Desktop GUI Applications",
          items: [
            {
              name: "Live Weather Desktop App",
              file: "weather app.py",
              desc: "Real-time meteorological desktop client with OpenWeatherMap REST API, temperature conversion, contextual weather emojis (☀️, 🌧️, ⛈️, ❄️), HTTP error code guardrails, and dark card UI.",
              tech: ["PyQt5", "Requests API", "OpenWeather", "QGraphicsEffects"]
            },
            {
              name: "Cyber Digital Clock",
              file: "Digital clock.py",
              desc: "Futuristic dark-mode desktop clock widget with real-time QTimer (1000ms), 12-hour AM/PM formats, localized calendar date, and pulsing live status beacon.",
              tech: ["PyQt5", "QTimer", "QDate", "Neon Typography"]
            },
            {
              name: "Millisecond Precision Stopwatch",
              file: "stop watch.py",
              desc: "High-accuracy desktop stopwatch with 10ms timer resolution displaying hh:mm:ss.centiseconds, responsive Start/Stop/Reset controls, and animated button states.",
              tech: ["PyQt5", "Event Handlers", "Time Calculations"]
            }
          ]
        },
        {
          category: "⚙️ System Automation, Utilities & Media",
          items: [
            {
              name: "Automated QR Code Generator",
              file: "Qr code Generator.py",
              desc: "Encodes arbitrary URLs or textual inputs into high-resolution PNG QR matrices saved to local storage for instant mobile scanning.",
              tech: ["qrcode", "PIL / Pillow", "File I/O"]
            },
            {
              name: "Modular Banking Transaction System",
              file: "Banking Program.py",
              desc: "State-managed personal banking simulator with match-case branching, deposit handling, balance inquiries, and overdraft protection.",
              tech: ["Python 3.10+ match-case", "Validation", "State Control"]
            },
            {
              name: "Dynamic Task & To-Do Manager",
              file: "To Do List.py",
              desc: "Interactive CLI task manager with 1-based indexed deletion, boundary safety checks, dynamic list rendering, and empty-state handling.",
              tech: ["List Data Structures", "enumerate()", "CRUD"]
            },
            {
              name: "Smart Grocery Shopping Cart",
              file: "Shopping Cart.py",
              desc: "Multi-item grocery tallying engine using dictionary price mapping, quantity unit multipliers, and cumulative receipt computation.",
              tech: ["Dictionary Hashing", "Iterative Loops", "Arithmetic"]
            },
            {
              name: "Cryptographic Password Generator",
              file: "Password Generator.py",
              desc: "Customizable password synthesizer combining ASCII uppercase, lowercase, numbers, and punctuation for high-entropy credential security.",
              tech: ["string module", "random.choice()", "Security"]
            }
          ]
        },
        {
          category: "🎮 Interactive Game Engines & Algorithmic Logic",
          items: [
            {
              name: "Casino Emoji Slot Machine",
              file: "Slot Machine.py",
              desc: "Interactive wagering simulation featuring randomized emoji reels (☠️, 🦅, 🐬, ❤️), bankroll management, and 10x reward multipliers on triplets.",
              tech: ["random.choice()", "Betting Mathematics", "Game Loops"]
            },
            {
              name: "AI Rock-Paper-Scissors Engine",
              file: "Rock Paper Scissors.py",
              desc: "Decision duel against computer AI choice with case-insensitive input handling, complete win/loss/tie logic, and replay state controller.",
              tech: ["Game State", "Decision Trees", "Input Normalization"]
            },
            {
              name: "Interactive Quiz Assessment Engine",
              file: "quiz.py",
              desc: "Multiple-choice science & astronomy assessment engine with instant answer validation, score accumulation, and percentage grading.",
              tech: ["Array Indexing", "Score Calculation", "CLI Output"]
            },
            {
              name: "Binary Intuition Number Guessing Game",
              file: "Number Guessing.py",
              desc: "Range-based 1-1000 guessing game providing dynamic higher/lower directional hints and tracking total attempt counts.",
              tech: ["random.randint", "Binary Range Intuition"]
            },
            {
              name: "Formatted Countdown Timer",
              file: "Timer.py",
              desc: "Precision console countdown converting raw seconds into formatted HH:MM:SS zero-padded timestamps using modulo arithmetic.",
              tech: ["time.sleep()", "Modulo Division", "Formatting"]
            },
            {
              name: "Zero-Division Safe Calculator",
              file: "Calculator.py",
              desc: "Arithmetic processor supporting addition, subtraction, multiplication, and division with floating-point formatting and divisor guardrails.",
              tech: ["Arithmetic", "Exception Guardrails", "Float Formatting"]
            }
          ]
        }
      ]
    },
    {
      title: "DSA & LeetCode Solutions",
      category: "Data Structures & Algorithms (Active)",
      year: "2026",
      description: "My dedicated repository containing solutions to LeetCode and Data Structures & Algorithms challenges. Focused on algorithmic intuition, optimal Big-O complexity, and daily practice.",
      features: [
        "Hands-on practice solving LeetCode and algorithmic challenges",
        "Mastering Arrays, Strings, HashMaps, Trees, Graphs, and Dynamic Programming",
        "Focus on optimal time and space complexity (Big-O analysis)",
        "Clean, readable, well-commented code solutions in GitHub"
      ],
      tech: ["LeetCode", "Data Structures", "Algorithms", "Python / C++"],
      liveUrl: "https://github.com/AYUSH0607-ux/dsa-leetcode-solutions",
      githubUrl: "https://github.com/AYUSH0607-ux/dsa-leetcode-solutions"
    }
  ]
};

// ==========================================
// 2. DOM INITIALIZATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initLiveClock();
  initParticleCanvas();
  initTypingEffect();
  initStatsCounters();
  initSkillsFilter();
  initInteractiveTerminal();
  initContactForm();
  initClipboardCopy();
  initNavbarScroll();
  initMobileMenu();
  updateCurrentYear();
});

// Update Copyright Year
function updateCurrentYear() {
  const yearEl = document.getElementById("currentYear");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
}

// ==========================================
// 3. LIVE HUD CLOCK
// ==========================================
function initLiveClock() {
  const clockEl = document.getElementById("liveClock");
  if (!clockEl) return;

  function tick() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    clockEl.textContent = `${hours}:${minutes}:${seconds} LOCAL`;
  }
  tick();
  setInterval(tick, 1000);
}

// ==========================================
// 4. STATIONARY CONSTANT BALLS WITH CURSOR AVOIDANCE
// ==========================================
function initParticleCanvas() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const mouse = { x: null, y: null, radius: 155 };

  window.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener("mouseout", () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Number of constant glowing balls across the screen
  const particleCount = Math.min(Math.floor((width * height) / 7200), 200);
  const particles = [];

  const colorPalettes = [
    { fill: "rgba(0, 242, 254,", glow: "#00f2fe" },    // Neon Cyan
    { fill: "rgba(79, 172, 254,", glow: "#4facfe" },    // Electric Blue
    { fill: "rgba(147, 51, 234,", glow: "#9333ea" },    // Electric Purple
    { fill: "rgba(121, 40, 202,", glow: "#7928ca" },    // Deep Violet
    { fill: "rgba(16, 185, 129,", glow: "#10b981" },    // Emerald Sparkle
    { fill: "rgba(255, 0, 128,", glow: "#ff0080" }      // Cyberpunk Pink Accent
  ];

  class StationaryBall {
    constructor(originX, originY) {
      // Fixed constant home position
      this.originX = originX;
      this.originY = originY;
      this.x = originX;
      this.y = originY;
      this.vx = 0;
      this.vy = 0;

      // Tiered ball sizing:
      // ~60% small micro-balls (2px - 3.5px)
      // ~28% medium glowing energy balls (4px - 8px)
      // ~12% large cyber orbs (11px - 22px)
      const rand = Math.random();
      if (rand < 0.60) {
        this.baseSize = Math.random() * 1.8 + 1.8;
        this.type = "small";
        this.baseAlpha = Math.random() * 0.45 + 0.35;
        this.repelFactor = 8.5;
        this.springStiffness = 0.075;
        this.damping = 0.84;
      } else if (rand < 0.88) {
        this.baseSize = Math.random() * 3.5 + 4;
        this.type = "medium";
        this.baseAlpha = Math.random() * 0.4 + 0.3;
        this.repelFactor = 6.8;
        this.springStiffness = 0.065;
        this.damping = 0.85;
      } else {
        this.baseSize = Math.random() * 10 + 11;
        this.type = "large";
        this.baseAlpha = Math.random() * 0.28 + 0.16;
        this.repelFactor = 4.8;
        this.springStiffness = 0.055;
        this.damping = 0.88;
      }

      this.size = this.baseSize;
      this.color = colorPalettes[Math.floor(Math.random() * colorPalettes.length)];
      this.pulseSpeed = Math.random() * 0.025 + 0.01;
      this.pulseStep = Math.random() * Math.PI * 2;
    }

    update() {
      // 1. Cursor Avoidance / Repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouse.radius && dist > 0) {
          const force = (mouse.radius - dist) / mouse.radius; // 0 to 1
          const dirX = dx / dist;
          const dirY = dy / dist;

          // Push ball away from cursor
          this.vx += dirX * force * this.repelFactor;
          this.vy += dirY * force * this.repelFactor;
        }
      }

      // 2. Spring physics: smoothly pull back to its constant home position
      const homeDx = this.originX - this.x;
      const homeDy = this.originY - this.y;
      this.vx += homeDx * this.springStiffness;
      this.vy += homeDy * this.springStiffness;

      // 3. Friction damping so it comes to a graceful stop
      this.vx *= this.damping;
      this.vy *= this.damping;

      this.x += this.vx;
      this.y += this.vy;

      // Snap precisely to home if velocity is negligible (zero movement at rest)
      if (
        Math.abs(this.vx) < 0.008 &&
        Math.abs(this.vy) < 0.008 &&
        Math.abs(homeDx) < 0.04 &&
        Math.abs(homeDy) < 0.04
      ) {
        this.x = this.originX;
        this.y = this.originY;
        this.vx = 0;
        this.vy = 0;
      }

      // Subtle breathing glow in-place
      this.pulseStep += this.pulseSpeed;
      const pulseFactor = Math.sin(this.pulseStep) * 0.18 + 1;
      this.size = this.baseSize * pulseFactor;
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, Math.max(0.5, this.size), 0, Math.PI * 2);

      if (this.type === "large") {
        const grad = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size
        );
        grad.addColorStop(0, `${this.color.fill} ${this.baseAlpha * 1.5})`);
        grad.addColorStop(0.5, `${this.color.fill} ${this.baseAlpha * 0.7})`);
        grad.addColorStop(1, `${this.color.fill} 0)`);
        ctx.fillStyle = grad;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color.glow;
      } else {
        ctx.fillStyle = `${this.color.fill} ${this.baseAlpha})`;
        ctx.shadowBlur = this.type === "medium" ? 14 : 8;
        ctx.shadowColor = this.color.glow;
      }

      ctx.fill();
      ctx.restore();
    }
  }

  // Populate constant positions across the screen
  for (let i = 0; i < particleCount; i++) {
    const originX = Math.random() * width;
    const originY = Math.random() * height;
    particles.push(new StationaryBall(originX, originY));
  }

  window.addEventListener("resize", () => {
    const oldW = width;
    const oldH = height;
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

    // Rescale constant positions proportionally on window resize
    particles.forEach((p) => {
      p.originX = (p.originX / oldW) * width;
      p.originY = (p.originY / oldH) * height;
      p.x = p.originX;
      p.y = p.originY;
      p.vx = 0;
      p.vy = 0;
    });
  });

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw constellation connection threads between nearby stationary balls
    for (let a = 0; a < particles.length; a++) {
      for (let b = a + 1; b < particles.length; b++) {
        if (particles[a].type === "large" && particles[b].type === "large") continue;

        const dx = particles[a].x - particles[b].x;
        const dy = particles[a].y - particles[b].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 105) {
          const alpha = (1 - dist / 105) * 0.16;
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = `rgba(79, 172, 254, ${alpha})`;
          ctx.lineWidth = 0.85;
          ctx.stroke();
        }
      }
    }

    // Update and draw all balls
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

// ==========================================
// 5. HERO TYPING EFFECT
// ==========================================
function initTypingEffect() {
  const typedEl = document.getElementById("typedElement");
  if (!typedEl) return;

  const phrases = USER_CONFIG.typingPhrases;
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedEl.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 35;
    } else {
      typedEl.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 75;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typingSpeed = 1800;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

// ==========================================
// 6. ANIMATED HUD STAT COUNTERS
// ==========================================
function initStatsCounters() {
  const statNumbers = document.querySelectorAll(".hud-number");
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          statNumbers.forEach((el) => {
            const target = parseInt(el.getAttribute("data-count"), 10);
            animateCount(el, target, 1600);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const statsHud = document.querySelector(".hero-stats-hud");
  if (statsHud) observer.observe(statsHud);

  function animateCount(el, target, duration) {
    let start = 0;
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(ease * target);
      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    requestAnimationFrame(update);
  }
}

// ==========================================
// 7. SKILLS FILTERING
// ==========================================
function initSkillsFilter() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const skillCards = document.querySelectorAll(".skill-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const filter = tab.getAttribute("data-filter");

      skillCards.forEach((card) => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.classList.remove("hidden");
          card.style.opacity = "0";
          card.style.transform = "translateY(10px)";
          setTimeout(() => {
            card.style.transition = "all 0.3s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 30);
        } else {
          card.classList.add("hidden");
        }
      });
    });
  });
}

// ==========================================
// 8. INTERACTIVE COMMAND DECK (TERMINAL)
// ==========================================
function initInteractiveTerminal() {
  const form = document.getElementById("terminalForm");
  const input = document.getElementById("terminalInput");
  const body = document.getElementById("terminalBody");
  const chips = document.querySelectorAll(".cmd-chip");

  if (!form || !input || !body) return;

  const commandHistory = [];
  let historyIndex = -1;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const cmd = chip.getAttribute("data-cmd");
      executeCommand(cmd);
      input.focus();
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const cmd = input.value.trim();
    if (!cmd) return;
    commandHistory.push(cmd);
    historyIndex = commandHistory.length;
    executeCommand(cmd);
    input.value = "";
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") {
      if (historyIndex > 0) {
        historyIndex--;
        input.value = commandHistory[historyIndex];
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        input.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        input.value = "";
      }
    }
  });

  function executeCommand(rawCommand) {
    appendLine(`ayush@ai-station:~$ ${escapeHtml(rawCommand)}`, "term-prompt-line");

    const cmd = rawCommand.toLowerCase().trim();
    const parts = cmd.split(" ");
    const root = parts[0];

    switch (root) {
      case "help":
        appendLine(`
<span class="term-cyan">AYUSH'S TERMINAL COMMANDS:</span>
  • <span class="term-yellow">about</span>       - Learn about Ayush Namballa & AI Aspirations
  • <span class="term-yellow">skills</span>      - Display technical arsenal & ML proficiencies
  • <span class="term-yellow">projects</span>    - List highlighted AI & web projects
  • <span class="term-yellow">python</span>      - Inspect all 14 Python Desktop GUIs & AI scripts
  • <span class="term-yellow">contact</span>     - Show direct communication channels
  • <span class="term-yellow">github</span>      - Print GitHub repository link
  • <span class="term-yellow">matrix</span>      - Trigger digital cipher animation
  • <span class="term-yellow">clear</span>       - Clear terminal output
  • <span class="term-yellow">date</span>        - Display current UTC timestamp
  • <span class="term-yellow">echo [text]</span> - Repeat back message
        `);
        break;

      case "about":
        appendLine(`
<span class="term-cyan">ABOUT // ${USER_CONFIG.name}</span>
Role: ${USER_CONFIG.role}
Email: ${USER_CONFIG.email}
GitHub: <a href="${USER_CONFIG.socials.github}" target="_blank" class="term-yellow">${USER_CONFIG.socials.github}</a>
Status: ${USER_CONFIG.status}

Student passionate about Artificial Intelligence, Machine Learning algorithms, and building modern software.
        `);
        break;

      case "skills":
        appendLine(`
<span class="term-cyan">TECHNICAL ARSENAL:</span>
  • <span class="term-yellow">[AI & ML]</span>      Machine Learning, Deep Learning, LLMs, Vector Embeddings
  • <span class="term-green">[Languages]</span>    Python (PyQt5, APIs, Automation), JavaScript, HTML5/CSS3, DSA
  • <span class="term-purple">[Dev & Tools]</span>   Git & GitHub, AI Agent Frameworks, VS Code
        `);
        break;

      case "projects":
        let projectListHtml = `<span class="term-cyan">FEATURED WORK:</span><br>`;
        USER_CONFIG.projects.forEach((p, idx) => {
          projectListHtml += `[0${idx + 1}] <strong class="term-yellow">${p.title}</strong> (${p.category})<br>    ↳ ${p.description}<br>`;
        });
        projectListHtml += `<br><span class="term-cyan">Tip: Type '<span class="term-yellow">python</span>' to see the detailed 14-program breakdown!</span>`;
        appendLine(projectListHtml);
        break;

      case "python":
      case "pyapps":
      case "lab":
        appendLine(`
<span class="term-cyan">=====================================================</span><br>
<span class="term-cyan">🧠 AYUSH NAMBALLA // PYTHON &amp; AI LAB [14 SHIPPED APPS]</span><br>
<span class="term-cyan">=====================================================</span><br>
<strong class="term-yellow">1. DESKTOP GUI APPLICATIONS (PyQt5):</strong><br>
  • <span class="term-green">weather app.py</span>        - Live Weather App (OpenWeather REST API, Conditions, Emojis)<br>
  • <span class="term-green">Digital clock.py</span>      - Cyber Digital Clock Widget (QTimer 1000ms, Date &amp; Status)<br>
  • <span class="term-green">stop watch.py</span>         - Millisecond Precision Stopwatch (10ms Resolution, Start/Stop/Reset)<br>
<br>
<strong class="term-yellow">2. SYSTEM UTILITIES, AUTOMATION &amp; MEDIA:</strong><br>
  • <span class="term-green">Qr code Generator.py</span>  - Automated URL-to-PNG QR Code Generator (qrcode library)<br>
  • <span class="term-green">Banking Program.py</span>    - Modular Bank Manager (Match-case, Deposit, Overdraft Guard)<br>
  • <span class="term-green">To Do List.py</span>         - Dynamic Task Organizer (Add, Remove by Index, Enumerate)<br>
  • <span class="term-green">Shopping Cart.py</span>      - Grocery Pricing Engine (Dictionary Hash, Quantity Multipliers)<br>
  • <span class="term-green">Password Generator.py</span>  - Cryptographic Pass Generator (ASCII Letters, Digits, Punctuation)<br>
<br>
<strong class="term-yellow">3. GAME SIMULATIONS &amp; LOGIC ENGINES:</strong><br>
  • <span class="term-green">Slot Machine.py</span>       - Casino Emoji Reel (☠️🦅🐬❤️) with 10x Jackpot Multiplier<br>
  • <span class="term-green">Rock Paper Scissors.py</span> - AI Adversary Duel (Case-insensitive Parser, Win/Loss Matrix)<br>
  • <span class="term-green">quiz.py</span>               - Interactive Science Quiz Assessment with % Grading<br>
  • <span class="term-green">Number Guessing.py</span>    - 1-1000 Binary Search Hints &amp; Attempt Tracker<br>
  • <span class="term-green">Timer.py</span>              - Formatted HH:MM:SS Countdown Loop (Modulo Arithmetic)<br>
  • <span class="term-green">Calculator.py</span>         - Zero-Division Guarded Arithmetic Processor (.2f Precision)<br>
<span class="term-cyan">Tip: Click 'Explore All 14 Apps' on the Python card above to inspect each card in the interactive modal!</span>
        `);
        break;

      case "contact":
        appendLine(`
<span class="term-cyan">COMMUNICATION CHANNELS:</span>
  • Email:  <a href="mailto:${USER_CONFIG.email}" class="term-yellow">${USER_CONFIG.email}</a>
  • GitHub: <a href="${USER_CONFIG.socials.github}" target="_blank" class="term-yellow">${USER_CONFIG.socials.github}</a>
        `);
        break;

      case "github":
        appendLine(`
<span class="term-green">AYUSH'S GITHUB:</span> <a href="${USER_CONFIG.socials.github}" target="_blank" class="term-yellow">${USER_CONFIG.socials.github}</a>
        `);
        break;

      case "matrix":
        runMatrixRain();
        break;

      case "clear":
        body.innerHTML = "";
        break;

      case "date":
        appendLine(`<span class="term-green">${new Date().toUTCString()}</span>`);
        break;

      case "echo":
        const text = parts.slice(1).join(" ");
        appendLine(escapeHtml(text || "echo: nothing to repeat"));
        break;

      default:
        appendLine(`<span class="term-red">nexus: command not found: '${escapeHtml(rawCommand)}'. Type 'help' for available commands.</span>`);
        break;
    }

    body.scrollTop = body.scrollHeight;
  }

  function appendLine(htmlContent, extraClass = "") {
    const line = document.createElement("div");
    line.className = `term-line ${extraClass}`;
    line.innerHTML = htmlContent;
    body.appendChild(line);
  }

  function runMatrixRain() {
    appendLine(`<span class="term-green">INITIALIZING AI NEURAL CIPHER STREAM...</span>`);
    const streamLine = document.createElement("div");
    streamLine.className = "term-line term-green";
    body.appendChild(streamLine);

    const chars = "01010101ABCDEF0123456789$#@%&*";
    let count = 0;
    const interval = setInterval(() => {
      let chunk = "";
      for (let i = 0; i < 40; i++) {
        chunk += chars[Math.floor(Math.random() * chars.length)];
      }
      streamLine.textContent = chunk;
      count++;
      if (count > 25) {
        clearInterval(interval);
        streamLine.textContent = "AI SYSTEM SYNCHRONIZED. STATUS: EXCELLENT.";
      }
      body.scrollTop = body.scrollHeight;
    }, 60);
  }
}

// ==========================================
// 9. PROJECT MODAL ENGINE
// ==========================================
window.openProjectModal = function (index) {
  const project = USER_CONFIG.projects[index];
  if (!project) return;

  const modal = document.getElementById("projectModal");
  const content = document.getElementById("modalContent");
  if (!modal || !content) return;

  let featuresList = project.features.map((f) => `<li>${f}</li>`).join("");
  let tagsList = project.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("");

  let catalogHtml = "";
  if (project.catalog && project.catalog.length > 0) {
    catalogHtml = `
      <div class="python-catalog-header">
        <h4 style="font-size: 1.15rem; color: #ffffff; margin-bottom: 6px; font-family: var(--font-heading);">Engineered Applications Catalog:</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; line-height: 1.6; margin-bottom: 12px;">Complete suite of 14 Python programs built across GUI frameworks, REST API clients, system automation scripts, and game engines.</p>
        <div class="catalog-stats-row">
          <div class="catalog-stat-badge">Total Programs: <strong>14</strong></div>
          <div class="catalog-stat-badge">PyQt5 Desktop GUIs: <strong>3</strong></div>
          <div class="catalog-stat-badge">System &amp; Media Tools: <strong>5</strong></div>
          <div class="catalog-stat-badge">Game &amp; Logic Engines: <strong>6</strong></div>
        </div>
      </div>
      <div class="python-apps-container">
        ${project.catalog
          .map(
            (cat) => `
          <div class="python-category-section">
            <div class="python-category-title">
              <span>${cat.category}</span>
              <span class="category-count-badge">${cat.items.length} Programs</span>
            </div>
            <div class="python-cards-grid">
              ${cat.items
                .map(
                  (item) => `
                <div class="python-app-item">
                  <div class="app-item-top">
                    <span class="app-item-name">${item.name}</span>
                    <span class="app-file-tag">${item.file}</span>
                  </div>
                  <p class="app-item-desc">${item.desc}</p>
                  <div class="app-item-tech">
                    ${item.tech.map((t) => `<span class="app-tech-pill">${t}</span>`).join("")}
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  content.innerHTML = `
    <div class="project-modal-header" style="margin-bottom: 20px;">
      <span class="preview-pill" style="margin-bottom: 8px; display: inline-block;">${project.category}</span>
      <h3 style="font-family: var(--font-heading); font-size: 1.6rem; font-weight: 700; margin-bottom: 6px;">${project.title}</h3>
      <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-subtle);">Year: ${project.year} // Developer: ${USER_CONFIG.name}</span>
    </div>
    <p style="color: var(--text-muted); font-size: 1rem; line-height: 1.7; margin-bottom: 20px;">${project.description}</p>
    
    ${catalogHtml}

    <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 10px; margin-top: 24px;">Core Engineering Highlights:</h4>
    <ul style="color: var(--text-muted); padding-left: 20px; font-size: 0.95rem; line-height: 1.7; margin-bottom: 24px;">
      ${featuresList}
    </ul>

    <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 10px;">Technologies &amp; Libraries:</h4>
    <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px;">
      ${tagsList}
    </div>

    <div style="display: flex; gap: 14px; flex-wrap: wrap;">
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
        <span>View on GitHub</span>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
      </a>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
};

// Close modal handlers
const projectModal = document.getElementById("projectModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

if (modalCloseBtn && projectModal) {
  modalCloseBtn.addEventListener("click", () => {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
  });

  projectModal.addEventListener("click", (e) => {
    if (e.target === projectModal) {
      projectModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && projectModal) {
    projectModal.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// ==========================================
// 10. CLIPBOARD COPY UTILITY
// ==========================================
function initClipboardCopy() {
  const copyBtn = document.getElementById("copyEmailBtn");
  const copyTooltip = document.getElementById("copyTooltip");
  const emailDisplay = document.getElementById("emailDisplay");

  if (!copyBtn || !emailDisplay) return;

  copyBtn.addEventListener("click", () => {
    const email = emailDisplay.textContent.trim();
    navigator.clipboard
      .writeText(email)
      .then(() => {
        copyTooltip.textContent = "Copied!";
        copyBtn.classList.add("active");
        showToast("Ayush's email copied to clipboard!", "success");

        setTimeout(() => {
          copyTooltip.textContent = "Copy";
          copyBtn.classList.remove("active");
        }, 2200);
      })
      .catch(() => {
        showToast("Could not auto-copy, please copy manually.", "error");
      });
  });
}

// ==========================================
// 11. CONTACT FORM TRANSMISSION ENGINE
// ==========================================
// 11. LIVE CONTACT FORM TRANSMISSION ENGINE
// ==========================================
function initContactForm() {
  const form = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");
  const statusMsg = document.getElementById("formStatusMsg");

  if (!form || !submitBtn) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const subject = document.getElementById("messageSubject").value.trim();
    const message = document.getElementById("messageBody").value.trim();

    if (!name || !email || !message) {
      showToast("Please fill out all required fields.", "error");
      return;
    }

    submitBtn.disabled = true;
    const originalText = submitBtn.querySelector(".btn-text").textContent;
    submitBtn.querySelector(".btn-text").textContent = "Transmitting to Ayush...";

    // Live AJAX dispatch directly to Ayush's email via FormSubmit
    fetch("https://formsubmit.co/ajax/namballaayus@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _subject: `[Portfolio Transmission] ${subject} — from ${name}`,
        message: message,
        _template: "table",
        _captcha: "false"
      })
    })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        submitBtn.disabled = false;
        submitBtn.querySelector(".btn-text").textContent = originalText;
        form.reset();

        if (statusMsg) {
          statusMsg.className = "form-status-message success";
          statusMsg.textContent = `Transmission delivered! Message forwarded to Ayush's inbox (namballaayus@gmail.com). Ayush will respond to ${email} soon.`;
          statusMsg.style.display = "block";
          setTimeout(() => {
            statusMsg.style.display = "none";
          }, 8000);
        }

        showToast("Message successfully delivered to Ayush!", "success");
      })
      .catch((err) => {
        console.warn("Contact transmission warning:", err);
        submitBtn.disabled = false;
        submitBtn.querySelector(".btn-text").textContent = originalText;

        // Graceful resilient fallback: direct mailto trigger link
        const mailtoUrl = `mailto:namballaayus@gmail.com?subject=${encodeURIComponent(
          subject
        )}&body=${encodeURIComponent(
          `From: ${name} (${email})\n\n${message}`
        )}`;

        if (statusMsg) {
          statusMsg.className = "form-status-message info";
          statusMsg.innerHTML = `Offline / Network filter detected. <a href="${mailtoUrl}" style="color: var(--accent-cyan); text-decoration: underline; font-weight: 600;">Click here to send directly via your email client</a>.`;
          statusMsg.style.display = "block";
        }

        showToast("Fallback link ready. Click status link to email.", "info");
      });
  });
}

// ==========================================
// 12. TOAST NOTIFICATION ENGINE
// ==========================================
function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";

  const icon = type === "success" ? "🧠" : "ℹ️";
  toast.innerHTML = `<span>${icon}</span> <span>${escapeHtml(message)}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ==========================================
// 13. NAVBAR SCROLL AND ACTIVE SPY
// ==========================================
function initNavbarScroll() {
  const navbarWrapper = document.querySelector(".navbar-wrapper");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbarWrapper?.classList.add("scrolled");
    } else {
      navbarWrapper?.classList.remove("scrolled");
    }

    let currentId = "";
    sections.forEach((sec) => {
      const top = sec.offsetTop - 120;
      const height = sec.offsetHeight;
      if (window.scrollY >= top && window.scrollY < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

// ==========================================
// 14. MOBILE MENU DRAWER
// ==========================================
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (!btn || !navLinks) return;

  btn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("mobile-open");
    btn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      navLinks.classList.remove("mobile-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================
// 15. HTML ESCAPE HELPER
// ==========================================
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
