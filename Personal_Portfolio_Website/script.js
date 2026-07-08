document.addEventListener('DOMContentLoaded', () => {

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const navToggle = document.getElementById('navToggle');
  const navTabs = document.querySelector('.nav__tabs');
  if (navToggle && navTabs) {
    navToggle.addEventListener('click', () => {
      const isOpen = navTabs.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    navTabs.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navTabs.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const sections = document.querySelectorAll('section[id]');
  const tabs = document.querySelectorAll('.nav__tab');
  const setActiveTab = (id) => {
    tabs.forEach(t => t.classList.toggle('is-active', t.getAttribute('href') === `#${id}`));
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActiveTab(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
  sections.forEach(s => observer.observe(s));

  const revealTargets = document.querySelectorAll(
    '.about__grid, .skills__groups, .timeline, .projects__featured, .projects__grid, .edu-cards, .contact__layout'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealTargets.forEach(el => revealObserver.observe(el));

  const typedCommandEl = document.getElementById('typedCommand');
  const typedOutputEl = document.getElementById('typedOutput');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const command = 'whoami --verbose';
  const outputLines = [
    'name       : Himanshu Panwar',
    'role       : Full Stack Enthusiast',
    'stack      : React.js · Node.js · MongoDB · Java',
    'focus      : DSA · OS · System Design · GATE prep',
    'status     : open_to_internships = true'
  ];

  function typeText(el, text, speed, onDone) {
    let i = 0;
    (function step() {
      if (i <= text.length) {
        el.textContent = text.slice(0, i);
        i++;
        setTimeout(step, speed);
      } else if (onDone) {
        onDone();
      }
    })();
  }

  function printOutputLines(lines) {
    lines.forEach((line, idx) => {
      const p = document.createElement('div');
      p.className = 'line';
      p.style.animationDelay = `${idx * 0.12}s`;
      p.textContent = line;
      typedOutputEl.appendChild(p);
    });
    const cursor = document.createElement('span');
    cursor.className = 'cursor';
    typedOutputEl.appendChild(cursor);
  }

  if (typedCommandEl && typedOutputEl) {
    if (prefersReducedMotion) {
      typedCommandEl.textContent = command;
      printOutputLines(outputLines);
    } else {
      typeText(typedCommandEl, command, 55, () => {
        setTimeout(() => printOutputLines(outputLines), 250);
      });
    }
  }

  const input = document.getElementById('terminalInput');
  const log = document.getElementById('interactiveLog');

  const commands = {
    help: () => [
      'available commands:',
      '  about      – short bio',
      '  skills     – core tech stack',
      '  projects   – list of projects',
      '  email      – open mail client',
      '  github     – open GitHub profile',
      '  linkedin   – open LinkedIn profile',
      '  clear      – clear this terminal'
    ].join('\n'),
    about: () => 'CSE undergrad @ South Asian University. Building with React, Node.js, MongoDB & Java. Preparing for GATE alongside web dev. Always building, always improving.',
    skills: () => 'Data Structures, C, Python, MySQL, Problem Solving, React.js, Node.js, MongoDB, Java, HTML5/CSS3, JavaScript, Git.',
    projects: () => [
      '1. MediTrack — full-stack healthcare platform',
      '2. Trust Modeling (Type-2 Fuzzy Logic) — research',
      '3. Global Rasoi — recipe website',
      '4. My Tech Blog — CSS layouts',
      '5. MikiWiki Project — mini wiki',
      '6. JavaScript Implementation — logic problems'
    ].join('\n'),
    email: () => { window.location.href = 'mailto:himaaaanshuuuuu@gmail.com'; return 'opening mail client...'; },
    github: () => { window.open('https://github.com/himaaaanshuuuuu', '_blank', 'noopener'); return 'opening github.com/himaaaanshuuuuu ...'; },
    linkedin: () => { window.open('https://www.linkedin.com/in/himanshu-panwar-3ba399313/', '_blank', 'noopener'); return 'opening LinkedIn profile...'; },
  };

  function appendLog(html) {
    const p = document.createElement('p');
    p.className = 'terminal__output-line';
    p.innerHTML = html;
    log.appendChild(p);
    log.scrollTop = log.scrollHeight;
  }

  if (input && log) {
    input.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return;
      const raw = input.value.trim();
      if (!raw) return;
      const cmd = raw.toLowerCase();

      appendLog(`<span class="cmdline">$ ${escapeHtml(raw)}</span>`);

      if (cmd === 'clear') {
        log.innerHTML = '';
      } else if (commands[cmd]) {
        const result = commands[cmd]();
        appendLog(escapeHtml(result).replace(/\n/g, '<br>'));
      } else {
        appendLog(`command not found: ${escapeHtml(raw)}. type "help" for a list of commands.`);
      }
      input.value = '';
    });
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
});
