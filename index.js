const nav = document.getElementById('main-nav');
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const revealItems = document.querySelectorAll('.reveal');
const heroCard = document.querySelector('.hero-card');
const heroSection = document.querySelector('.hero');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }

  if (heroSection) {
    const offset = window.scrollY * 0.12;
    heroSection.style.setProperty('--hero-shift', `${offset}px`);
  }
});

menuBtn?.addEventListener('click', () => {
  menu?.classList.toggle('active');
});

document.querySelectorAll('.menu a').forEach((link) => {
  link.addEventListener('click', () => {
    menu?.classList.remove('active');
  });
});

if (typeof Typed !== 'undefined') {
  new Typed('.panku', {
    strings: ['a Full Stack Developer', 'a React & Node.js Builder', 'an AI-assisted Product Engineer'],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true,
  });
}

heroCard?.addEventListener('mousemove', (event) => {
  const rect = heroCard.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  heroCard.style.setProperty('--tilt-x', `${y * -10}deg`);
  heroCard.style.setProperty('--tilt-y', `${x * 10}deg`);
});

heroCard?.addEventListener('mouseleave', () => {
  heroCard.style.setProperty('--tilt-x', '0deg');
  heroCard.style.setProperty('--tilt-y', '0deg');
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.15 }
);

revealItems.forEach((item) => observer.observe(item));

const resumeLinks = ['resume-link-1', 'resume-link-2'];
resumeLinks.forEach((id) => {
  const el = document.getElementById(id);
  el?.addEventListener('click', () => {
    window.open('./pranay_paul_resume_v1.pdf', '_blank', 'noopener,noreferrer');
  });
});

const projectToggles = document.querySelectorAll('.project-toggle');
projectToggles.forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const targetId = toggle.dataset.target;
    const activeList = document.querySelector(`#${targetId}`);

    if (!activeList) return;

    document.querySelectorAll('.project-list').forEach((list) => {
      list.classList.toggle('hidden', list.id !== targetId);
    });

    projectToggles.forEach((button) => {
      button.classList.toggle('active', button === toggle);
    });
  });
});
