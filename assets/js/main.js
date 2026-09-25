console.log('By Kevin Turpin\n\nhttps://github.com/kevinturpin97');

document.documentElement.classList.add('js');
document.getElementById('year').textContent = new Date().getFullYear();

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal sections on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Hero prompt: cycle through a few commands
const typed = document.getElementById('typed');
const commands = ['whoami', 'cat ./stack.txt', 'git log --author=kevin | wc -l', 'whoami'];
if (!reducedMotion) {
  let i = 0;
  const type = (text, done) => {
    let n = 0;
    typed.textContent = '';
    const step = () => {
      typed.textContent = text.slice(0, ++n);
      if (n < text.length) setTimeout(step, 70);
      else done();
    };
    step();
  };
  const next = () => {
    i = (i + 1) % commands.length;
    type(commands[i], () => setTimeout(next, 2600));
  };
  setTimeout(next, 2600);
}

// Stats count-up
const formatNumber = (n) => n.toLocaleString('fr-FR');
const countObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    countObserver.unobserve(entry.target);
    const el = entry.target;
    const target = Number(el.dataset.count);
    const prefix = el.dataset.prefix || '';
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1200, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = prefix + formatNumber(Math.round(target * eased));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.5 });
if (!reducedMotion) document.querySelectorAll('[data-count]').forEach((el) => countObserver.observe(el));

// Mini terminal
const out = document.getElementById('term-out');
const form = document.getElementById('term-form');
const input = document.getElementById('term-in');
const history = [];
let historyIndex = 0;

const print = (html) => {
  const p = document.createElement('p');
  p.innerHTML = html;
  out.appendChild(p);
  out.scrollTop = out.scrollHeight;
};
const escapeHtml = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

const commandsMap = {
  help: () => 'Commandes : <b>whoami</b>, <b>stack</b>, <b>history</b>, <b>projects</b>, <b>cv</b>, <b>contact</b>, <b>hobbies</b>, <b>clear</b>',
  whoami: () => 'Kévin Turpin, développeur fullstack web & mobile. Le Tampon, La Réunion.',
  stack: () => 'PHP 8 · Symfony · React · TypeScript · React Native · Expo · Node.js · SQL · PostgreSQL',
  history: () => '2024-now  Développeur Fullstack @ Fleetee\n2022-2023 Développeur Web @ Fotokabine / Zotphoto',
  projects: () => 'Fleetee API · Fleetee Manager · Fleetee Check · Keyrent · Fleetee Web · Générateur PDF',
  cv: () => '<a href="turpin_kevin_cv.pdf" download>turpin_kevin_cv.pdf</a> (téléchargement)',
  contact: () => '<a href="mailto:kevin.turpin@epitech.eu">kevin.turpin@epitech.eu</a> · <a href="https://www.linkedin.com/in/kevinturpin97">LinkedIn</a> · <a href="https://github.com/kevinturpin97">GitHub</a>',
  hobbies: () => 'Coder, électronique (Arduino), guitare, randonnée, documentaires.\nDisplay all 9999 possibilities? (y or n)',
  y: () => 'Bien tenté. Il faudra m\'en parler de vive voix :)',
  n: () => 'Sage décision.',
  sudo: () => 'kevin n\'est pas dans le fichier sudoers. Cet incident sera signalé.',
  ls: () => 'cv.pdf  projects/  stack.txt  hobbies/',
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const raw = input.value.trim();
  input.value = '';
  if (!raw) return;
  history.push(raw);
  historyIndex = history.length;
  print(`<span class="ps1">kevin@reunion:~$</span> ${escapeHtml(raw)}`);
  const cmd = raw.split(/\s+/)[0].toLowerCase();
  if (cmd === 'clear') { out.innerHTML = ''; return; }
  const fn = commandsMap[cmd];
  print(fn ? fn() : `${escapeHtml(cmd)}: commande introuvable. Tapez <b>help</b>.`);
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp' && historyIndex > 0) {
    input.value = history[--historyIndex];
    e.preventDefault();
  } else if (e.key === 'ArrowDown') {
    historyIndex = Math.min(historyIndex + 1, history.length);
    input.value = history[historyIndex] || '';
    e.preventDefault();
  }
});
